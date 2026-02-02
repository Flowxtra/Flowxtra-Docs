import React from 'react';
import styles from './styles.module.css';

export function Steps({ children }) {
    return <div className={styles.steps}>{children}</div>;
}

export function Step({ children }) {
    return <div className={styles.step}>{children}</div>;
}
