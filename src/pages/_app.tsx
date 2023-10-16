import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    //Themeを使う際はThemeProviderを使用し、themeプロパティに値を渡す
    <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    </ThemeProvider>
  ); 
}
