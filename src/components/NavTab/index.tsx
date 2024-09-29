import * as React from 'react';
import styles from "./styles.module.scss";

export interface INavTabProps {
}

export default function NavTab(props: React.PropsWithChildren<INavTabProps>) {
  return (
    <ul className={styles.NavTab}>
      {props.children}
    </ul>
  );
}
