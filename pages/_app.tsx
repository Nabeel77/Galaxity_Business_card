import { createGlobalStyle, ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import './styles.css'
import "../global-styles.css";
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    width:100%;
    padding: 0;
    margin: 0;
    background-color: #000000;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  
`

const theme = {
  colors: {
    primary: '#16FFFF'
  },
  centerChildStyle: {
    inlineBlock: "inline-block",
    margin: "2px"
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, user-scalable=no"/>
          <link rel="preload" href="/fonts/Orbitron-Regular" as="font" type="font/Orbitron-Regular" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/Raleway-Bold" as="font" type="font/Raleway-Bold" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/Raleway-ExtraLight" as="font" type="font/Raleway-ExtraLight" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/Raleway-Regular" as="font" type="font/Raleway-Regular" crossOrigin="anonymous" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
