import Modal from '@/context/modal/Modal'
import ModalContextProvider from '@/context/modal/modal-context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return<>
     <ModalContextProvider>
       <Component  {...pageProps} />
     </ModalContextProvider>
  </>

}
