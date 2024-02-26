import React from 'react';
import styles from './container.module.css';

function HeaderContainer({ children }) {
  return <div className={styles.headerContainer}>{children}</div>;
}

export default HeaderContainer;
