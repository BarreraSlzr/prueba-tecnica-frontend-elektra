
import * as React from 'react';
import Table from '../components/Table';

export interface IAttachmentFieldsProps {
    form: string
}

export default function SearchResultsFields(props: IAttachmentFieldsProps) {
    const columns = [
        'Selecciona tu respuesta de acuerdo al resultado de la búsqueda',
        "SI",
        "NO",
        "NO APLICA"];
    const rows = [
        [
            <label htmlFor='not-expired-data'>
                ¿La información devuelta por tus consultas es vigente?
            </label>,
            <input required form={props.form} type='radio' name='datos-vigente' id='not-expired-data' value='SI' title='SI' />,
            <input required form={props.form} type='radio' name='datos-vigente' id='not-expired-data' value='NO' title='NO' />,
            <input required form={props.form} type='radio' name='datos-vigente' id='not-expired-data' value='NA' title='NA' />,
        ],
        [
            <label htmlFor='request-data-match'>
                ¿La información devuelta por las consultas coincide con la identificación del cliente?
            </label>,
            <input required form={props.form} type='radio' name='consulta-coincide-identificacion-cliente' id='request-data-match' value='SI' title='SI' />,
            <input required form={props.form} type='radio' name='consulta-coincide-identificacion-cliente' id='request-data-match' value='NO' title='NO' />,
            <input required form={props.form} type='radio' name='consulta-coincide-identificacion-cliente' id='request-data-match' value='NA' title='NA' />,
        ]
    ]
    return (
        <Table columns={columns} data={rows} classNameCell='!text-left'/>
    );
}
