import * as React from 'react';
import styles from './styles.module.scss';
import Navbar from '../../Modulo-1/Navbar';
import Sidebar from '../../Modulo-2/Sidebar';
import FolioStatus from '../../Modulo-2/FolioStatus';
import GeneralInformation from '../../Modulo-3/GeneralInformation';
import Formulario from '../../Modulo-3/Formulario';
import AttachmentFields from '../../Modulo-3/AttachmentFields';
import ExpedienteSelector from '../../Modulo-3/ExpedienteSelector';
import ExternalLinks from '../../Modulo-3/ExternalLinks';
import ImageContainer from '../../Modulo-3/ImageContainer';
import RequestFields from '../../Modulo-3/RequestFields';
import SearchResultsFields from '../../Modulo-3/SearchResultsFields';
import { useModal } from '../../contexts/FormDataModal';


export default function Layout() {
  const modalContext = useModal();
  const principalFormId = 'formulario-prueba-tecnica';

  function onSubmitFormData(formData: FormData){
    modalContext.openModal(Object.fromEntries(Array.from(formData) || []))
  }

  return (
    <div className={styles.container}>
      <Formulario hidden id={principalFormId} onSubmitFormData={onSubmitFormData}/>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
        <div className={styles.statusProgress}>
          <FolioStatus />
        </div>
        <main className={styles.main}>
          <GeneralInformation />
          <div className="flex flex-row gap-2 grow">
            <ExpedienteSelector form={principalFormId}/>
            <div className="flex flex-col gap-2 grow w-full">
              <ImageContainer />
              <AttachmentFields form={principalFormId}/>
              <ExternalLinks />
              <SearchResultsFields form={principalFormId}/>
            </div>
          </div>
          <RequestFields form={principalFormId}/>
        </main>
      </div>
    </div>
  );
}