import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import ReactQueryProvider from '@/api/provider'
import { StoreProvider } from '../zustand/store-provider'
import ReduxProvider from '@/components/providers/redux-provider'
import TopNavbar from '@/components/nav-bar/top-nav-bar'
import { ThemeProvider } from '@/context/theme-context'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: `Mustfai Shop`,
  description: `Mustfai shop for your loved ones.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={inter.className}
        data-new-gr-c-s-check-loaded='14.1235.0'
        data-gr-ext-installed=''
        cz-shortcut-listen='true'
      >
        <StoreProvider isAuthenticated={false} accessToken='' user={null}>
          <ReduxProvider>
            <ReactQueryProvider>
              <ThemeProvider>
                <TopNavbar />
                <hr className='w-full h-[2px] border-t-black/10 mb-2 md:mb-4' />
                {children}
              </ThemeProvider>
              <ToastContainer position='top-center' />
            </ReactQueryProvider>
          </ReduxProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
