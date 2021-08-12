import React from 'react';
import { Layout } from '@learn-bit-react/base-ui.ui.layout';
import { StoreHero } from '@learn-bit-react/ecommerce.ui.store-hero';
import { About as AboutContent } from '@learn-bit-react/ecommerce.content.about';
import styles from './about-electronics.module.scss';

export function AboutElectronics() {
  return (
    <Layout>
      <StoreHero
        className={styles.hero}
        background="url(https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2684&q=80)
    no-repeat center center scroll"
        headingText="About our Electronics Store"
        href="/"
        linkText="Shop Now"
      />

      <AboutContent />
    </Layout>
  );
}
