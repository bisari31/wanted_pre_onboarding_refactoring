import { useRef, useState, useEffect } from 'react'
import styles from './Dropdown.module.scss'
import { AiFillCaretDown } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'

const CATEGORY = [
  'BTCUSD.PERP',
  'ETHUSD.PERP',
  'BCHUSD.PERP',
  'LTCUSD.PERP',
  'XRPUSD.PERP',
  'BATUSD.PERP',
  'BANDUSD.PERP',
  '1000SUIBUSD.PERP',
]

const Dropdown = () => {
  const [options, setOptions] = useState([...CATEGORY])
  const [selectedOption, setSelectedOption] = useState('All Symbols')
  const [viewOptions, setViewOptions] = useState(false)
  const handleChagneOption = () => setViewOptions((prev) => !prev)
  const view = () => setViewOptions(!viewOptions)
  const categoryRef = useRef()
  const onChangeOption = (e) => {
    setSelectedOption(e.target.value)
    view()
    setOptions([...CATEGORY])
  }
  const filterSymbols = (e) => {
    const string = e.target.value
    if (e.target.value === '') {
      return setOptions([...CATEGORY])
    }
    return setOptions(
      CATEGORY.filter((item) => item.toLowerCase().includes(string) || item.toUpperCase().includes(string))
    )
  }
  const handleClickOutSide = (e) => {
    console.log(categoryRef.current.contains(e.target))
    if (viewOptions && !categoryRef.current.contains(e.target)) setViewOptions(false)
  }

  useEffect(() => {
    if (viewOptions) document.addEventListener('mousedown', handleClickOutSide)
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide)
    }
  })
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} type='button' onClick={handleChagneOption}>
        {selectedOption}
        <AiFillCaretDown />
      </button>
      {viewOptions && (
        <div className={styles.optionWrapper} ref={categoryRef}>
          <div className={styles.inputForm}>
            <input type='text' placeholder='Serach Symbols' className={styles.search} onChange={filterSymbols} />
            <BiSearch />
          </div>
          <div className={styles.categoryWrapper}>
            <option className={styles.category} onClick={onChangeOption}>
              All Symbols
            </option>
            {options.map((item) => (
              <option key={item} className={styles.category} onClick={onChangeOption}>
                {item}
              </option>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
