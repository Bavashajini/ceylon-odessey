import { CurrencyCode } from '../types/travel';

export const CURRENCY_RATES: Record<CurrencyCode, { symbol: string; rate: number; name: string }> = {
  USD: { symbol: '$', rate: 1, name: 'US Dollar' },
  LKR: { symbol: 'Rs. ', rate: 310, name: 'Sri Lankan Rupee' },
  EUR: { symbol: '€', rate: 0.92, name: 'Euro' },
  GBP: { symbol: '£', rate: 0.79, name: 'British Pound' },
};

export function formatPrice(amountInUSD: number, currency: CurrencyCode): string {
  const { symbol, rate } = CURRENCY_RATES[currency];
  const converted = amountInUSD * rate;
  if (currency === 'LKR') {
    return `${symbol}${Math.round(converted).toLocaleString()}`;
  }
  return `${symbol}${Math.round(converted)}`;
}
