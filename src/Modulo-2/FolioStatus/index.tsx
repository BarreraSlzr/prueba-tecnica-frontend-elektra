import * as React from 'react';
import styles from './styles.module.scss';
import ProgressBar from '../../components/ProgressBar';
import { useFetchedData } from '../../contexts/FetchedData';

export interface IFolioStatusProps {
}

export default function FolioStatus(props: IFolioStatusProps) {
  const data = useFetchedData();
  return (
    <div className={styles.FolioStatus}>
      <p>Estado del folio</p>
      <ProgressBar progress={data.record.progress} />
      <p>{data.record.progress}%</p>
    </div>
  );
}
