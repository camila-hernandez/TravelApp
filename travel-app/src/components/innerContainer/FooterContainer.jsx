import React from 'react';
import styles from './container.module.css';

function FooterContainer({ children }) {
  return <div className={styles.footerContainer}>{children}</div>;
}

export default FooterContainer;
