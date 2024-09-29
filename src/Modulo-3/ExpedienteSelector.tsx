import * as React from 'react';
import Dropdown, { type TOption } from '../components/Dropdown';

export interface IExpedienteSelectorProps {
    form: string;
}

export default function ExpedienteSelector(props: IExpedienteSelectorProps) {
    const options: TOption[] = [
        { value: 'credito', title: "Expediente de Crédito" },
        { value: 'captacion', title: "Expediente de Captación" }
    ]

    return (
        <Dropdown required form={props.form} name='expediente' id='recordType' placeholder='Selecciona un expediente' options={options} />
    );
}
