import s from './ProgressBar.module.css'

function ProgressBar() {
  let count = 10;
  return (
    <div className={`${s.barContainer} ${count === null ? s.hide : ''}`}>
      <progress
        className={s.barProgress}
        max="10"
      />
      <span className={s.barText}>
        Отправка данных через {count} секунд
      </span>
    </div>
  )
}

export default ProgressBar
