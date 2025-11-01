import React from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import styles from './Header.module.css'

interface IHeaderProfile {
  currentPageName: string
  subCurrentPageName: string
}

export const Header: React.FC<IHeaderProfile> = (props) => {
  const {subCurrentPageName, currentPageName } = props

  // const navigate = useNavigate()

  return (
    <div className={styles.wrap}>
      <div className={styles.navigation}>
          <div className={styles.link}>
          Главная
        </div>
          <FaArrowRightLong />
        <div className={styles.link}>{subCurrentPageName}</div>
          <FaArrowRightLong />
        <div className={styles.link}>{currentPageName}</div>
      </div>
      <button
        onClick={() => {        }}
        className={styles.exit}
      >
        {/*<Icon.ArrowLogIn />*/}
        Выйти из системы
      </button>
    </div>
  )
}
