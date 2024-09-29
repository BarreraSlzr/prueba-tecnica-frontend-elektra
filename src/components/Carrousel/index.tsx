import * as React from 'react';
import styles from './styles.module.scss';

export interface ICarrouselProps {
}

export default function Carrousel (props: React.PropsWithChildren<ICarrouselProps>) {
  return (
    <div className={styles.Carrousel}>
      {props.children}
    </div>
  );
}
