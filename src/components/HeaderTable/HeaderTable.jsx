import s from './HeaderTable.module.css'
import React, { useCallback } from 'react';

function HeaderTable({ theadData, editCell }) {

    const handleChange = useCallback((id) => (e) => {
        const validateSurname = (e, id) => {
            if (id === 3) {
                const currentValue = e.target.value;

                if (/[^А-Яа-яЁё.: ]/.test(currentValue)) {
                    e.target.value = currentValue.replace(/[^А-Яа-яЁё.: ]/g, '');
                };
            }
        };

        validateSurname(e, id);
        editCell(id, e.target.value, true);
    }, [editCell]);

    return (
        <thead>
            <tr>
                {theadData.map(({ id, value, colspan, rowspan }) => (
                    <th
                        key={id}
                        className={s.headerCell}
                        colSpan={colspan}
                        rowSpan={rowspan}
                    >
                        <input
                            type="text"
                            className={s.headerInput}
                            value={value}
                            onChange={handleChange(id)}
                        />
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default HeaderTable
