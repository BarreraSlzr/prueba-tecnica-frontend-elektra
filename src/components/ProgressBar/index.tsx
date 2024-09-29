import * as React from 'react';
import styles from './styles.module.scss';

export interface IProgressBarProps {
    progress: number;
}

export default function ProgressBar ({progress}: IProgressBarProps) {
  return (
    <div className={styles.ProgressBar}>
      <div
        className={styles.progress}
        style={{ width: `${(progress / 100) * 100}%` }}
      />
    </div>
  );
}
