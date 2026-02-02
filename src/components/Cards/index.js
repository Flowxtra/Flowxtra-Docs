import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import clsx from 'clsx';

export function Cards({ children }) {
    return <div className={styles.cards}>{children}</div>;
}

export function Card({ title, description, href, icon }) {
    return (
        <Link to={href} className={clsx('card', styles.card)}>
            <div className={styles.cardHeader}>
                {icon && <div className={styles.icon}>{icon}</div>}
                <h3 className={styles.title}>{title}</h3>
            </div>
            <p className={styles.description}>{description}</p>
        </Link>
    );
}
