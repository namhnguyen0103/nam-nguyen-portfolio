import { Nunito_Sans, Capriola } from 'next/font/google';

export const brand = Capriola({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-brand"
})

export const sans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});