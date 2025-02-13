import s from './BodyTable.module.css'
import React, { useCallback } from 'react';

function BodyTable({ tbodyData, editCell }) {

    const handleInputChange = useCallback((id, type) => (e) => {
        const masks = {
            number: /^(?:\d+(\.\d*)?)?$/
        };

        const validateInputs = (value, type) => {
            if (type === 'number') {
                const validateValue = value.replace('.', '');
                if (masks.number.test(validateValue)) {
                    return validateValue
                };
                return null;
            };

            if (type === 'percent') {
                const percentValue = value.slice(0, -1).replace(',', '.');
                if (masks.number.test(percentValue)) {
                    return percentValue;
                };
                return null;
            };

            if (type === 'text') return value;

            return null;
        };

        const сheckingValue = validateInputs(e.target.value, type);

        сheckingValue !== null && editCell(id, сheckingValue)
    }, [editCell]);

    return (
        <tbody>
            {tbodyData.map((rows, index) => (
                <tr key={index}>
                    {rows.row.map(({ id, value, rowspan, colspan, type }) => (
                        <td
                            key={id}
                            className={s.bodyCell}
                            colSpan={colspan}
                            rowSpan={rowspan}
                        >
                            {id === 7 ? (
                                <textarea
                                    className={s.bodyTextarea}
                                    value={value}
                                    onChange={handleInputChange(id, 'text')}
                                />
                            ) : (
                                <input
                                    className={`${s.bodyInput} ${id === 13 ? s.changeColor : ''}`}
                                    value={type === 'percent' ? `${value}%` : value}
                                    onChange={handleInputChange(id, type)}
                                />
                            )}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

export default BodyTable
