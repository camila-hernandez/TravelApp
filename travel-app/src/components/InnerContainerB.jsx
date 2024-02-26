// InnerContainerB.jsx

import React from 'react';
import styles from './headercontainer.module.css';

function InnerContainerB({ children }) {
  return <div className={styles.innerContainerB}>{children}</div>;
}

export default InnerContainerB;
