import s from './EditingTable.module.css'
import HeaderTable from '../HeaderTable/HeaderTable'
import BodyTable from '../BodyTable/BodyTable'
import ProgressBar from './../ProgressBar/ProgressBar'
import { initialTableData } from '../../store/initialTableData'

import React, { useState } from 'react';

function EditingTable() {

  const [dataTable, setTableData] = useState(initialTableData);

  return (
    <div className={s.tableContainer}>
      <table className={s.editingTable}>
        <HeaderTable theadData={dataTable.theadData} />
        <BodyTable tbodyData={dataTable.tbodyData} />
      </table>
      <ProgressBar />
    </div>
  )
}

export default EditingTable
