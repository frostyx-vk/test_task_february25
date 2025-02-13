import s from './EditingTable.module.css'
import HeaderTable from '../HeaderTable/HeaderTable'
import BodyTable from '../BodyTable/BodyTable'
import ProgressBar from './../ProgressBar/ProgressBar'
import { initialTableData } from '../../store/initialTableData'

import React, { useState, useCallback, useEffect } from 'react';

function EditingTable() {

  const [dataTable, setTableData] = useState(initialTableData);
  const [editTimeout, setEditTimeout] = useState(null);
  const [count, setCount] = useState(null);
  const [editedInfo, setEditedInfo] = useState({});

  function сomparisonValues(object1, object2) {
    if (object1 === object2) return true;

    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);

    if (objKeys1.length !== objKeys2.length) return false;

    for (const key of objKeys1) {
      if (!objKeys2.includes(key) || !сomparisonValues(object1[key], object2[key])) return false;
    };

    return true;
  };

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
    };

    setTableData(newData);
    setEditedInfo((prev) => ({ ...prev, [id]: value }));

    if (editTimeout) {
      clearTimeout(editTimeout);
    };

    if (!сomparisonValues(newData, initialTableData)) {
      setCount(null);
      setEditTimeout(setTimeout(() => setCount(10), 5000));
    } else {
      setCount(null);
    };


  }, [dataTable, editTimeout]);

  useEffect(() => {
    if (count !== null) {
      if (count > 0) {
        const timer = setTimeout(() => setCount(count - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        console.log('Вывод данных:', editedInfo);
        setCount(null);
      }
    }
  }, [count, editedInfo]);

  return (
    <div className={s.tableContainer}>
      <table className={s.editingTable}>
        <HeaderTable theadData={dataTable.theadData} editCell={editCell} />
        <BodyTable tbodyData={dataTable.tbodyData} editCell={editCell} />
      </table>
      <ProgressBar count={count} />
    </div>
  )
}

export default EditingTable
