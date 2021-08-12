import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeElectronics } from '@learn-bit-react/electronics-store.ui.pages.home-electronics';
import { AboutElectronics } from '@learn-bit-react/electronics-store.ui.pages.about-electronics';
import { Header } from '@learn-bit-react/ecommerce.ui.header';
import { Footer } from '@learn-bit-react/ecommerce.ui.footer';
import { Link } from '@learn-bit-react/base-ui.ui.link';
import { Layout } from '@learn-bit-react/base-ui.ui.layout';
import { Theme } from '@learn-bit-react/base-ui.themes.theme';
import styles from './electronics-store.module.scss';

export function ElectronicsStoreApp() {
  return (
    <BrowserRouter>
      <Theme>
        <Layout>
          <Header
            className={styles.header}
            logoText="Bit Electronics Store"
            src="https://static.bit.dev/bit-logo.svg"
            alt="Bit Logo"
          >
            <Link href="/headphones">Headphones</Link>
            <Link href="/microphones">Microphones</Link>
            <Link href="/accessories">Accessories</Link>
          </Header>
          <Switch>
            <Route path="/about" exact>
              <AboutElectronics />
            </Route>
            <Route path="/">
              <HomeElectronics />
            </Route>
          </Switch>

          <Footer
            className={styles.footer}
            logoText="Bit Perfume Store"
            src="https://static.bit.dev/bit-logo.svg"
            alt="Bit Logo"
          >
            <Link href="/privacy">Privacy</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
          </Footer>
        </Layout>
      </Theme>
    </BrowserRouter>
  );
}
