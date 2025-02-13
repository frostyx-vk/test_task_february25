import s from './ProgressBar.module.css'

function ProgressBar({ count }) {

  return (
    <div className={`${s.barContainer} ${count === null ? s.hide : ''}`}>
      <progress
        className={s.barProgress}
        value={count !== null ? 10 - count : 0}
        max="10"
      />
      <span className={s.barText}>
        Отправка данных через {count} секунд
      </span>
    </div>
  )
}

export default ProgressBar
