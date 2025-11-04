import React from 'react'
import styles from './SideBar.module.css'
import reactIcon from '../../../../assets/react.svg'
export const SideBar = () => {

    return (
        <div className={styles.SideBarContainer}>
            <img src={reactIcon} alt={'react-icon'}/>
            <div className={styles.title}>
                ais-statistics
            </div>

            <div className={styles.pageList}>
                <span>Главная</span>
                <span>Статистика</span>
                <span>Отчеты</span>
                <span>Вакансии</span>
                <span>Резюме</span>
                <span>Помощь</span>
            </div>
        </div>
    )
}
