import React from 'react';
import PropTypes from 'prop-types';

import Header from '@components/Header';
import Footer from '@components/Footer';

import styles from './Layout.module.scss';
import '@styles/index.scss';

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles.main} id="main">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
