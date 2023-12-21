import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Color, Product, Size } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const priceFormatter = new Intl.NumberFormat('uz', {
  style: 'currency',
  currency: 'UZS',
});

export const getAttributesFromProducts = (
  products: Product[],
  attribute: 'color' | 'size'
): Color[] | Size[] | null => {
  return products.reduce((acc: Color[] | Size[], product) => {
    if (!acc.find(accAttribute => accAttribute.id === product[attribute].id)) {
      acc.push(product[attribute]);
    }
    return acc;
  }, []);
};
