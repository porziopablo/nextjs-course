// vendors
import type { AppProps } from 'next/app';

// components
import Layout from '@/components/layout/Layout/Layout';

// context
import { NotificationContextProvider } from '@/context/NotificationContext';

// styles
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}
