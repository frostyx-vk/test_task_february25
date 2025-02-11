import s from './Homepage.module.css'
import EditingTable from '../components/EditingTable/EditingTable'

function Homepage() {
  return (
    <main className={s.container}>
      <section className={s.wrapperTable}>
        <EditingTable />
      </section>
    </main>
  );
}

export default Homepage;