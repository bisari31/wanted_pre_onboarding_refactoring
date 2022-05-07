import styles from './Input.module.scss'
import { ImEye, ImEyeBlocked } from 'react-icons/im'
import { AiFillCheckCircle } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'

const Input = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const { email } = form
  const [validate, setValidate] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [validateMsg, setValidateMsg] = useState('')
  const cx = classNames.bind(styles)
  const handleChangeFrom = (e) => {
    const { name, value } = e.target
    setForm((prev) => {
      return { ...prev, [name]: value }
    })
    console.log(form)
  }
  const isEmail = (mail) => {
    const regx = /^[a-zA-Z0-9.-_]{2,}@[a-zA-Z0-9]+\.[a-zA-Z0-9]+[.a-zA-Z0-9]*/
    const result = mail.match(regx)
    if (result) {
      setValidate(true)
    } else {
      setValidate(false)
    }
  }
  const onBlur = () => {
    if (!email) setValidateMsg('')
    setValidateMsg(validate ? '' : 'Invalid e-mail address')
  }
  useEffect(() => {
    isEmail(email)
    console.log(validate)
  }, [email, form, validate])
  const handleShowPassword = () => setShowPassword((prev) => !prev)
  return (
    <div className={styles.wrapper}>
      <form action='' className={styles.form}>
        <label htmlFor='email' className={styles.label}>
          E-mail
        </label>
        <input
          id='email'
          type='text'
          name='email'
          onChange={handleChangeFrom}
          className={styles.input}
          placeholder='E-mail'
          value={form.email}
          onBlur={onBlur}
        />
        <span className={styles.errMsg}>{validateMsg}</span>
        <AiFillCheckCircle className={cx({ checked: validate })} />
        <label htmlFor='password' className={styles.label}>
          Password
        </label>
        <input
          id='password'
          type={showPassword ? 'text' : 'password'}
          name='password'
          onChange={handleChangeFrom}
          className={styles.input}
          placeholder='Password'
          value={form.password}
        />
        {showPassword ? (
          <ImEye onClick={handleShowPassword} className={styles.checked} />
        ) : (
          <ImEyeBlocked onClick={handleShowPassword} />
        )}
      </form>
    </div>
  )
}

export default Input
