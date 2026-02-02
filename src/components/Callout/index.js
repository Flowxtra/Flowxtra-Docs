import React from 'react';
import Admonition from '@theme/Admonition';

export function Callout({ type = 'info', title, children }) {
    return (
        <Admonition type={type} title={title}>
            {children}
        </Admonition>
    );
}
