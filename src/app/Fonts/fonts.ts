import { Roboto, Manrope } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-roboto',
  
});

export const manrope = Manrope({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-manrope',
  
});
