import * as React from 'react';
import styles from './styles.module.scss';
import { useModal } from '../../contexts/FormDataModal';
import Button from '../Button';

export interface IModalProps {
}

export default function Modal (props: IModalProps) {
    const { isOpen, closeModal, data } = useModal();

  if (!isOpen) return null;

  return (
    <div className={styles.ModalContainer}>
      <div className={styles.Modal}>
        <h2 className={styles.Title}>Datos en JSON</h2>
        <pre className={styles.JSONBody}>{JSON.stringify(data, null, 2)}</pre>
        <Button onClick={closeModal}>
          Cerrar
        </Button>
      </div>
    </div>
  );
}
