import React from 'react'
import App, { Container } from 'next/app'
import NextSeo from 'next-seo'
import meta from 'Config/meta'
import { GlobalStyles } from 'Components'
import {ThemeContextProvider} from 'Hooks'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeContextProvider>
        <Container>
          <NextSeo config={meta} />
          <GlobalStyles/>
          <Component {...pageProps} />
        </Container>
      </ThemeContextProvider>
    );
  }
}

export default MyApp