import Document, { Html, Head, Main, NextScript } from 'next/document';

export const NOTIFICATIONS_ROOT_ID = 'notification-root';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id={NOTIFICATIONS_ROOT_ID} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
