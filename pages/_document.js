import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import styled, { ServerStyleSheet } from 'styled-components';

const Html = styled.html`
  width: 100%;
  height: 100%;
  color: white;
  font-family: 'Montserrat', sans-serif;
  
  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: linear-gradient(65.21deg, rgba(48, 35, 174, 0.5) 0%, rgba(200, 109, 215, 0.5) 100%);
    
    > div {
      width: 100%;
      height: 100%;
    }
  }
`

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
      <Html>
        <Head>
          <title>Last Card</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet" />
          <link rel="stylesheet" href="https://i.icomoon.io/public/temp/72e8086c6a/UntitledProject/style.css" />
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
