import s from './HeaderTable.module.css'

function HeaderTable({ theadData }) {

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
                        />
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default HeaderTable
