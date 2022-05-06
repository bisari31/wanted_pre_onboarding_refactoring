import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './Toggle.module.scss'

const Toggle = () => {
  const [toggle, setToggle] = useState(true)
  const cx = classNames.bind(styles)
  const handleChangeToggle = () => setToggle((prev) => !prev)
  useEffect(() => {
    console.log(toggle)
  }, [toggle])
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles.wrapper} onClick={handleChangeToggle}>
      <button type='button'>기본</button>
      <button type='button'>상세</button>
    </div>
  )
}

export default Toggle
