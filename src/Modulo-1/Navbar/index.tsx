import * as React from 'react';
import { AlignJustify, X } from 'lucide-react';
import styles from './styles.module.scss';

export interface IAppProps {
}

export default function Navbar(props: IAppProps) {
    const [IsVisible, setVisible] = React.useState(false)

    const toggleVisibility: React.HTMLAttributes<HTMLButtonElement>['onClick'] = () => {
        setVisible(!IsVisible);
    }
    return (
        <div className={[styles.container, IsVisible ? styles.visible : styles.hidden].join(" ")}>
            <div className={styles.header}>
                <button className={styles.toggle} onClick={toggleVisibility}>
                    {IsVisible ? <X /> : <AlignJustify />}
                </button>
            </div>
            <div className={styles.content}>
                <h1>Menú</h1>
                <a href="/">Inicio</a>
            </div>
        </div>
    );
}
