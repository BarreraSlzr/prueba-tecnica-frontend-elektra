import React from 'react';
import Layout from './components/Layout';
import FetchedDataProvider from './contexts/FetchedData';
import ModalProvider from './contexts/FormDataModal';
import Modal from './components/Modal';

function App() {
  return (
    <FetchedDataProvider>
      <ModalProvider>
        <Layout />
        <Modal />
      </ModalProvider>
    </FetchedDataProvider>
  );
}

export default App;
