import { getAverageColor } from 'fast-average-color-node';

async function analyze() {
  try {
    const color = await getAverageColor('https://i.ibb.co/Rk6yQ82k/i543406.webp');
    console.log(color);
  } catch (e) {
    console.error(e);
  }
}
analyze();
