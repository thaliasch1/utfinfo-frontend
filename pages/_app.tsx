import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SliderProvider } from '../src/components/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SliderProvider>
      <Component {...pageProps} />
    </SliderProvider>
  )
}

export default MyApp
