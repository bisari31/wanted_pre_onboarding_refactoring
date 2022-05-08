import classNames from 'classnames/bind'
import { useRef, useState } from 'react'
import styles from './Tab.module.scss'

const Tab = () => {
  const [list, setList] = useState([
    { id: 1, title: '감자', checked: true },
    { id: 2, title: '고구마', checked: false },
    { id: 3, title: '카레라이스', checked: false },
  ])
  const ref = useRef()
  const cx = classNames.bind(styles)
  const handleChange = (id) => {
    setList((prev) => [
      ...prev.map((item) => (item.id === id ? { ...item, checked: true } : { ...item, checked: false })),
    ])
    ref.current.style = `transform: translateX(calc(${id - 1} * 100%))`
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.btnWrapper}>
        {list.map((item) => (
          <button
            type='button'
            key={item.id}
            className={cx('list', { checked: item.checked })}
            onClick={() => handleChange(item.id)}
          >
            {item.title}
          </button>
        ))}
        <div ref={ref} className={styles.slider} />
      </div>
      <div />
    </div>
  )
}

export default Tab
