import classNames from 'classnames/bind'
import { useState } from 'react'
import styles from './Toggle.module.scss'

const Toggle = () => {
  const [toggle, setToggle] = useState(false)
  const cx = classNames.bind(styles)
  const handleChangeToggle = () => setToggle((prev) => !prev)

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles.wrapper} onClick={handleChangeToggle}>
      <button type='button' className={cx('option', { clicked: !toggle })}>
        기본
      </button>
      <button type='button' className={cx('option', { clicked: toggle })}>
        상세
      </button>
      <div className={cx('toggle', { clicked: toggle })} />
    </div>
  )
}

export default Toggle
