import * as React from 'react';
import styles from './styles.module.scss';

export interface IButtonProps {
}

export default function Button(props: JSX.IntrinsicElements['button'] & IButtonProps) {
    return (
        <button
            className={styles.Button}
            {...props}
        />
    );
}

