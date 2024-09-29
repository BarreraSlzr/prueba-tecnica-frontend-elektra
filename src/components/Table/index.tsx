import * as React from 'react';
import styles from './styles.module.scss';

export interface ITableProps {
    columns: React.ReactNode[],
    data: React.ReactNode[][],
    classNameCell?: string,
}

export default function Table({ columns, data, classNameCell = ''}: ITableProps) {
    
    return (
        <table className={styles.Table}>
            <thead>
                <tr>
                    {columns.map((col, index) => (
                        <th key={index} className={classNameCell}>
                            {col}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((col, colIndex) => (
                            <td key={colIndex} className={classNameCell}>
                                {row[colIndex]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
