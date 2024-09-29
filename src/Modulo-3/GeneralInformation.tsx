import * as React from 'react';
import Table from '../components/Table';
import { useFetchedData } from '../contexts/FetchedData';

export interface IGeneralInformationProps {
}

export default function GeneralInformation(props: IGeneralInformationProps) {
    const data = useFetchedData();
    const columns = ["Nombre de Cliente", "Fecha de Folio", "Folio SAC", "Folio MV", "Registrado", "", ""];
    const rows = [
        [data.user.name, data.record.date, data.record.folioSAC, data.record.folioMV, data.record.registered ? 'YES' : 'NO', <a href='#Options'>Options</a>, <a href='#Details'>Details</a>]
    ];

    return (
        <Table columns={columns} data={rows} classNameCell='border' />
    );
}
