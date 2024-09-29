import * as React from 'react';
import Dropdown, { TOption } from '../components/Dropdown';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import { ArrowBigRight } from 'lucide-react';

export interface IRequestFieldsProps {
    form: string
}

export default function RequestFields(props: IRequestFieldsProps) {
    const requestStatusOptions: TOption[] = [
        { value: 'aprobada', title: "Aprobada" },
        { value: 'rechazada', title: "Rechazada" }
    ];
    const reasonOptions: TOption[] = [
        { value: 'no-coincide', title: "Fotografía del cliente no coincide" },
        { value: 'borrosa-manipulada', title: "Fotografía borrosa o manipulada" },
        { value: 'no-visible', title: "Fotografía no visible" }
    ];

    return (
        <div className="p-4 border border-gray-400 w-full">
            <div className="flex flex-col grow-0 text-center gap-4 m-auto w-fit">
                <b>Respuesta de Solicitud</b>
                <div className="flex flex-row gap-6 justify-center">
                    <div className='flex flex-col gap-2'>
                        <div className="flex flex-row gap-4 justify-between">
                            <label htmlFor="status" className="label">
                                Respuesta
                            </label>
                            <Dropdown placeholder='Selecciona estatus de respuesta'
                                required form={props.form}
                                name='respuesta-estatus'
                                id='status'
                                options={requestStatusOptions} />
                        </div>
                        <div className="flex flex-row gap-4 justify-between">
                            <label htmlFor="reason" className="label">
                                Motivo
                            </label>
                            <Dropdown placeholder='Selecciona motivo'
                                required form={props.form}
                                name='motivo'
                                id='reason'
                                options={reasonOptions} />
                        </div>
                    </div>
                    <Textarea placeholder='Observaciones'
                        form={props.form}
                        name='observaciones'
                        id='comments'
                        title='Observaciones' />
                </div>
                <div className='flex justify-end'>
                    <Button type='submit'
                        form={props.form}>
                        <ArrowBigRight />
                        Finalizar
                    </Button>
                </div>
            </div>
        </div>
    );
}
