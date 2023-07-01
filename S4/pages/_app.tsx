// vendors
import type { AppProps } from 'next/app';

// styles
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
