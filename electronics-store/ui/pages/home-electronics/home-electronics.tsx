import React from 'react';
import { HomePage } from '@learn-bit-react/ecommerce.ui.pages.home-page';
import { mockHeadPhonesList } from '@learn-bit-react/electronics-store.entity.headphones';

import styles from './home-electronics.module.scss';

export function HomeElectronics() {
  return (
    <HomePage
      className={styles.hero}
      background="url(https://images.unsplash.com/photo-1619792597637-2604bf70ee00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80)
    no-repeat center center scroll"
      linkText="Shop Now"
      headingText="Your Number 1 Electronics Shop"
      href="/shop"
      list={mockHeadPhonesList}
    />
  );
}
