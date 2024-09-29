import * as React from 'react';
import styles from './styles.module.scss';

export interface INavGroupProps {
    links: JSX.IntrinsicElements['a'][];
}

export default function NavGroup(props: INavGroupProps) {
    return (
        <ul className={styles.NavGroup}>
            {props.links.map(link =>
                <li key={link.href}>
                    <a {...link}
                        referrerPolicy='no-referrer'
                        target='_blank'
                        rel="noreferrer">
                        {link.children || link.title}
                    </a>
                </li>
            )}
        </ul>
    );
}
