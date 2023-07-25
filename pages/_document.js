import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Google Analytics script */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-9LLXNZW2EL"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-9LLXNZW2EL');
              `,
            }}
          ></script>
          {/* End Google Analytics script */}
          <meta name="google-site-verification" content="BPdoMNtMhb07f9_BRXS0JXjDrtG4AsOpxtSsIeNmEz0" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
