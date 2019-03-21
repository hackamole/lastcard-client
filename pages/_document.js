import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html css={`
          width: 100%;
          height: 100%;
          color: white;
        `}>
        <Head>
          <title>Last Card</title>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body css={`
          width: 100%;
          height: 100%;
          background: linear-gradient(65.21deg, rgba(48, 35, 174, 0.5) 0%, rgba(200, 109, 215, 0.5) 100%);
        `}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
