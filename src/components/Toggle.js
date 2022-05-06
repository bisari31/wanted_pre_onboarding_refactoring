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
      <div className={cx('option', { clicked: !toggle })}>기본</div>
      <div className={cx('option', { clicked: toggle })}>상세</div>
      <div className={cx('toggle', { clicked: toggle })} />
    </div>
  )
}

export default Toggle
