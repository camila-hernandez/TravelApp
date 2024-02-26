import React from 'react';
import styles from './headercontainer.module.css';

function HeaderContainer({ children }) {
  return <div className={styles.headerContainer}>{children}</div>;
}

export default HeaderContainer;
