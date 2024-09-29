import * as React from 'react';
import styles from './styles.module.scss';

export interface ITextareaProps {
}

export default function Textarea(props: JSX.IntrinsicElements['textarea']) {
    return (
        <div className={styles.Textarea}>
            <textarea {...props} />
        </div>
    );
}
