import s from './EditingTable.module.css'
import HeaderTable from '../HeaderTable/HeaderTable'
import BodyTable from '../BodyTable/BodyTable'
import ProgressBar from './../ProgressBar/ProgressBar'
import { initialTableData } from '../../store/initialTableData'

import React, { useState, useCallback } from 'react';

function EditingTable() {

  const [dataTable, setTableData] = useState(initialTableData);

  const editCell = useCallback((id, value, isThead = false) => {
    let newData;

    if (isThead) {
      const newThead = dataTable.theadData.map((data) =>
        data.id === id ? { ...data, value } : data
      );
      newData = { ...dataTable, theadData: newThead };
    } else {
      const newTbody = dataTable.tbodyData.map((rows) => ({
        row: rows.row.map((row) => (row.id === id ? { ...row, value } : row)),
      }));
      newData = { ...dataTable, tbodyData: newTbody };
    }

    setTableData(newData);
  }, [dataTable]);

  return (
    <div className={s.tableContainer}>
      <table className={s.editingTable}>
        <HeaderTable theadData={dataTable.theadData} editCell={editCell} />
        <BodyTable tbodyData={dataTable.tbodyData} editCell={editCell} />
      </table>
      <ProgressBar />
    </div>
  )
}

export default EditingTable
