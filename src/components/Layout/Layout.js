import React from 'react';
import PropTypes from 'prop-types';

import Header from '@components/Header';
import Footer from '@components/Footer';

import styles from './Layout.module.scss';
import '@styles/index.scss';

const Layout = ({ children, data }) => {
  const header = data.prismic.allLayouts.edges[0].node.body[0];
  const footer = data.prismic.allLayouts.edges[0].node.body1[0];
  return (
    <>
      <div className={styles.container}>
        <Header {...header} />
        <main className={styles.main} id="main">
          {children}
        </main>
        <Footer {...footer} />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object,
};

export default Layout;
