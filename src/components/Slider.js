import classNames from 'classnames/bind'
import { useState, useRef, useEffect } from 'react'
import styles from './Slider.module.scss'

const NUMBERS = [1, 25, 50, 75, 100]
const Slider = () => {
  const [percent, setPercent] = useState(1)
  const cx = classNames.bind(styles)
  const handleChnagePercent = (e) => {
    if (e.target.type === 'button') setPercent(e.currentTarget.value)
    setPercent(e.target.value)
  }
  const rangeRef = useRef(null)
  const rangeBgChange = (val) => {
    rangeRef.current.style.background = `linear-gradient(to right, #10afaf 0%, #10afaf ${val}%, #ebebeb ${val}%, #ebebeb 100%)`
  }

  useEffect(() => {
    rangeBgChange(percent)
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.screen}>
        <span>{percent}</span>
      </div>
      <div className={styles.rangeWrapper}>
        <div className={styles.circleWrapper}>
          {NUMBERS.map((item) => (
            <span key={`${item}circle`} className={cx({ on: percent >= item })} />
          ))}
        </div>
        <input
          type='range'
          ref={rangeRef}
          className={styles.range}
          min='1'
          max='100'
          value={percent}
          onChange={handleChnagePercent}
        />
      </div>
      <div className={styles.btnWrapper}>
        {NUMBERS.map((number) => (
          <button
            key={`${number}button`}
            className={styles.numberBtn}
            type='button'
            value={number}
            onClick={handleChnagePercent}
          >
            {number}%
          </button>
        ))}
      </div>
    </div>
  )
}

export default Slider
