import * as React from 'react';
import Table from '../components/Table';

export interface IAttachmentFieldsProps {
    form: string;
}

export default function AttachmentFields(props: IAttachmentFieldsProps) {
    const columns = [
        'Selecciona tu respuesta de acuerdo a lo que visualizas en las fotografías',
        "SI",
        "NO",
        "NO APLICA"];
    const rows = [
        [
            <label htmlFor='isColored'>
                ¿La digitalización de la ID para este folio está a color?
            </label>,
            <input required form={props.form} type='radio' name='id-color' id='isColored' value='SI' title='SI' />,
            <input required form={props.form} type='radio' name='id-color' id='isColored' value='NO' title='NO' />,
            <input required form={props.form} type='radio' name='id-color' id='isColored' value='NO APLICA' title='NO APLICA' />,
        ],
        [
            <label htmlFor='data-match'>
                ¿Los datos en ambas ID, expediente y digitalizada coinciden?
            </label>,
            <input required form={props.form} type='radio' name='id-expediente-digital-coinciden' id='data-match' value='SI' title='SI' />,
            <input required form={props.form} type='radio' name='id-expediente-digital-coinciden' id='data-match' value='NO' title='NO' />,
            <input required form={props.form} type='radio' name='id-expediente-digital-coinciden' id='data-match' value='NO APLICA' title='NO APLICA' />,
        ]
    ]
    return (
        <Table columns={columns} data={rows} classNameCell='!text-left'/>
    );
}
