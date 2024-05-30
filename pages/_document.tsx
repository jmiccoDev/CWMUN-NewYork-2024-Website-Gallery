import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See Photos of the CWMUN NewYork 2024 experience."
          />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="See Photos of the CWMUN NewYork 2024 experience."
          />
          <meta property="og:title" content="CWMUN New York 2024 Photos experience" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="CWMUN New York 2024 Photos experience" />
          <meta
            name="twitter:description"
            content="See Photos of the CWMUN NewYork 2024 experience."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
