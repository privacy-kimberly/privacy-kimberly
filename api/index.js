const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

// Configuração básica
app.use(express.json());
app.use(cors());

// Configuração do Asaas (Sandbox por padrão se não houver ENV)
const ASAAS_URL = process.env.ASAAS_API_URL || 'https://sandbox.asaas.com/api/v3';
const ASAAS_KEY = process.env.ASAAS_API_KEY;

// Instância Axios configurada
const asaasClient = axios.create({
  baseURL: ASAAS_URL,
  headers: {
    'access_token': ASAAS_KEY,
    'Content-Type': 'application/json'
  }
});

/**
 * Rota para Criar Cobrança PIX
 * Fluxo: Cria/Busca Cliente -> Cria Cobrança -> Pega QR Code
 */
app.post('/api/create-pix-payment', async (req, res) => {
  try {
    if (!ASAAS_KEY) {
      throw new Error('ASAAS_API_KEY não configurada no backend.');
    }

    const { name, email, cpfCnpj, value } = req.body;

    // 1. Criar ou Recuperar Cliente no Asaas
    const customerResponse = await asaasClient.post('/customers', {
      name: name || 'Cliente Anônimo',
      email: email || 'cliente@exemplo.com',
      cpfCnpj: cpfCnpj || '00000000000'
    });
    
    const customerId = customerResponse.data.id;

    // 2. Criar a Cobrança
    const paymentBody = {
      customer: customerId,
      billingType: 'PIX',
      value: value || 14.97,
      dueDate: new Date().toISOString().split('T')[0], // Vence hoje
      description: 'Assinatura Privacy Clone - Plano Mensal'
    };

    const paymentResponse = await asaasClient.post('/payments', paymentBody);
    const paymentId = paymentResponse.data.id;

    // 3. Obter o QR Code e Payload (Copia e Cola)
    const qrCodeResponse = await asaasClient.get(`/payments/${paymentId}/pixQrCode`);

    return res.status(200).json({
      success: true,
      paymentId: paymentId,
      encodedImage: qrCodeResponse.data.encodedImage,
      payload: qrCodeResponse.data.payload,
      expirationDate: qrCodeResponse.data.expirationDate
    });

  } catch (error) {
    console.error('Erro Asaas:', error.response?.data || error.message);
    return res.status(500).json({
      success: false,
      error: 'Falha ao processar pagamento.',
      details: error.response?.data?.errors?.[0]?.description || error.message
    });
  }
});

/**
 * Webhook para receber confirmação de pagamento
 */
app.post('/api/webhook/asaas', (req, res) => {
  // Segurança básica: Verificar token do cabeçalho se configurado no Asaas
  const requestToken = req.headers['asaas-access-token'];
  if (process.env.ASAAS_WEBHOOK_TOKEN && requestToken !== process.env.ASAAS_WEBHOOK_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { event, payment } = req.body;

  console.log(`Evento Recebido: ${event} | Pagamento: ${payment?.id}`);

  if (event === 'PAYMENT_RECEIVED' || event === 'PAYMENT_CONFIRMED') {
    // AQUI: Lógica para liberar acesso ao usuário no banco de dados
    console.log(`>>> PAGAMENTO CONFIRMADO: Liberar acesso para ${payment.customer}`);
  }

  // Asaas espera um 200 OK
  return res.status(200).json({ received: true });
});

// Exportar para Vercel Serverless
module.exports = app;