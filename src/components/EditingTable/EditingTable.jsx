import s from './EditingTable.module.css'
import HeaderTable from '../HeaderTable/HeaderTable'
import BodyTable from '../BodyTable/BodyTable'
import ProgressBar from './../ProgressBar/ProgressBar'

function EditingTable() {
  return (
    <div className={s.tableContainer}>
      <table className={s.editingTable}>
        <HeaderTable />
        <BodyTable />
      </table>
      <ProgressBar />
    </div>
  )
}

export default EditingTable
