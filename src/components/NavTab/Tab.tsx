import * as React from 'react';
import styles from './tab.module.scss';

export type TNavigationElement = JSX.IntrinsicElements['a'] & {
    isActived: boolean
};

export default function Tab({isActived, ...props}: TNavigationElement) {
    
    return (
        <li>
            <a {...props} className={styles.Tab + " "+(isActived ? styles.active : '')} aria-current={isActived ? 'location' : 'false'}>{props.children || props.title}</a>
        </li>
    );
}
