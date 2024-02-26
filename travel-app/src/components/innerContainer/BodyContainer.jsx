// InnerContainerB.jsx

import React from 'react';
import styles from './container.module.css';

function BodyContainer({ children }) {
  return <div className={styles.innerContainerB}>{children}</div>;
}

export default BodyContainer;
