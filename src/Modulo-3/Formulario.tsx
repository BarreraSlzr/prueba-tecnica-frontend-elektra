import * as React from 'react';

export interface IFormularioProps {
    onSubmitFormData(data: FormData): void;
}


export default function Formulario({ onSubmitFormData, ...props }: JSX.IntrinsicElements['form'] & IFormularioProps) {
    const onSubmit = (event: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        event.preventDefault();
        const formdata = new FormData(event.currentTarget);
        onSubmitFormData(formdata);
    }

    return (
        <form {...props} onSubmit={onSubmit} />
    );
}
