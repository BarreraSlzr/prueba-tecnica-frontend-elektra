import React from 'react';
import styles from './styles.module.scss';

export type TOption = JSX.IntrinsicElements['option'];
export interface IDropdownProps {
    options: TOption[];
    placeholder: string;
}

export default function Dropdown({ options, placeholder, ...props }: IDropdownProps & JSX.IntrinsicElements['select']) {
    return (
        <div className={styles.Dropdown}>
            <select
                defaultValue={''}
                {...props}
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((option, idx) => (
                    <option key={`${option.value}`} value={option.value}>
                        {option.title || option.children}
                    </option>
                ))}
            </select>
        </div>
    );
}
