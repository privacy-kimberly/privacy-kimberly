import React, { useState } from 'react';
import { CreatorProfile, PixPaymentResponse } from '../types';
import Button from './Button';
import { BadgeCheck, QrCode, Copy, Check } from './Icons';

interface SubscriptionCardProps {
  subscription: CreatorProfile['subscription'];
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ subscription }) => {
  const [loading, setLoading] = useState(false);
  const [pixData, setPixData] = useState<PixPaymentResponse | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubscribe = () => {
    window.location.href = 'https://marketplaceseguro.sbs/checkout/cmlodnocl0afr1xppdx5p7sne?offer=KJH172M';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 sticky top-24">
      <h3 className="font-bold text-gray-900 mb-4 text-lg">ASSINATURA</h3>
      
      <div className="bg-brand-500/5 border border-brand-500/20 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
           <span className="text-sm font-medium text-brand-600 uppercase tracking-wide">Mensal</span>
           {subscription.discount && (
             <span className="bg-brand-500 text-white text-xs font-bold px-2 py-1 rounded-md">
               -{subscription.discount}% OFF
             </span>
           )}
        </div>
        
        <div className="flex items-end gap-1 mb-4">
          <span className="text-3xl font-bold text-brand-500">
            {subscription.currency} {subscription.price.toFixed(2).replace('.', ',')}
          </span>
          <span className="text-gray-500 text-sm mb-1">/mês</span>
        </div>

        <Button 
          id="btnAssinar"
          fullWidth 
          className="uppercase tracking-wide font-bold shadow-brand-500/30"
          onClick={handleSubscribe}
        >
          Assinar
        </Button>
      </div>

      <div className="space-y-3">
        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Benefícios</h4>
        <ul className="space-y-2">
          {subscription.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
              <BadgeCheck className="w-4 h-4 text-brand-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-400">Renovação automática. Cancele quando quiser.</p>
      </div>
    </div>
  );
};

export default SubscriptionCard;