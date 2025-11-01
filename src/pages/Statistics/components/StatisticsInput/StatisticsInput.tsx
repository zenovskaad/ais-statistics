import React from 'react'
import styles from './StatisticsInput.module.css'

interface StatisticsInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearch?: () => void
}

export const StatisticsInput: React.FC<StatisticsInputProps> = ({
                                                                  value,
                                                                  onChange,
                                                                  onSearch,
                                                                }) => {
  return (
    <>
      <input
        className={styles.input}
        placeholder="Поиск"
        value={value}
        onChange={onChange}
      />
      <button className={styles.button} onClick={onSearch}>
        Найти
      </button>
    </>
  )
}
