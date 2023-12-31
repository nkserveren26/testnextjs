import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => {
        return (
          originalRenderPage({
            enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
          })
        )
      }

      //初期値を流用
      const initialProps = await Document.getInitialProps(ctx);

      //initialPropsに加えてstyleを追加して返す
      return {
        ...initialProps,
        styles: [
          //もともとのstyle
          initialProps.styles,
          sheet.getStyleElement()
        ]
      }
    } finally {
      sheet.seal();
    }
  }
}