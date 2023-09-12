// TODO: fix theme loading issue
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import { ThemeProviders } from "./theme-providers";
import ThemeSwitcher from '../components/ThemeSwitcher';
import localFont from "next/font/local"
import Image from "next/image"

// const ramillas = localFont({
//   src: [
//     {
//       path: "../fonts/Ramillas_Trial_Variable_Roman.ttf",
//       style: 'normal'
//     },
//     {
//       path: "../fonts/Ramillas_Trial_Variable_Italic.ttf",
//       style: 'italic'
//     }
//   ],
//   variable: '--font-ramillas',
// })

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const inter_tight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter_tight',
  display: 'swap',
})
// const garamond = Cormorant_Garamond({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: '400'
// })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${inter_tight.className}`} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviders>
          {/* <ThemeSwitcher /> */}
          <div className='bg-white dark:bg-slate-800 text-slate-900 dark:text-white'>
            {/* <Image
              className="z-0 not-sr-only"
              alt="purple background pattern"
              layout='fill'
              src="../data/royal-1.svg"
            /> */}


            {children}
          </div>
        </ThemeProviders>
      </body>
    </html>

  )
}