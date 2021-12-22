import { createGlobalStyle, ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: Orbitron;
    src: url('/fonts/orbitron-Regular.ttf');
  }

  @font-face {
    font-family: Raleway-Bold;
    src: url('/fonts/Raleway-Bold.ttf');
  }

  @font-face {
    font-family: Raleway-ExtraLight;
    src: url('/fonts/Raleway-ExtraLight.ttf');
  }

  @font-face {
    font-family: Raleway-Regular;
    src: url('/fonts/Raleway-Regular.ttf');
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
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
