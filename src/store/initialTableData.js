export const initialTableData = {
    theadData: [
        { id: 1, value: '30 января 2024', colspan: 1 },
        { id: 2, value: 'Смена 2', colspan: 1 },
        { id: 3, value: 'Мастер: Иванов И. И.', colspan: 3 },
        { id: 4, value: 'РПТКМ-120', colspan: 1 }
    ],
    tbodyData: [
        {
            row: [
                { id: 5, value: 'Персонал', type: 'text', colspan: 1, rowspan: 1 },
                { id: 6, value: '100500 человек', type: 'text', colspan: 3, rowspan: 1 },
                { id: 7, value: 'Комментарий в 3-5 строчек, который тоже можно редактировать.', type: 'text', colspan: 3, rowspan: 4 }
            ]
        },
        {
            row: [
                { id: 8, value: 'КТП 2000 321', type: 'text', colspan: 1, rowspan: 4 },
                { id: 9, value: 'Работает', type: 'text', colspan: 1, rowspan: 1 },
                { id: 10, value: '24', type: 'number', colspan: 1, rowspan: 1 },
                { id: 11, value: 'SPI 3432', type: 'text', colspan: 1, rowspan: 1 }]
        },
        {
            row: [
                { id: 12, value: '98.4', type: 'percent', colspan: 1, rowspan: 1 },
                { id: 13, value: 'Функционирует, но не бьет', type: 'text', colspan: 2, rowspan: 1 }
            ]
        },
    ],
};