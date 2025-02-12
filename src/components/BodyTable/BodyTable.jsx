import s from './BodyTable.module.css'

function BodyTable({ tbodyData }) {

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
                                />
                            ) : (
                                <input
                                    className={`${s.bodyInput} ${id === 13 ? s.changeColor : ''}`}
                                    value={value}
                                    type={type}
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
