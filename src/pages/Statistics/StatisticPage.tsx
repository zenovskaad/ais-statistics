// import styles from '../StatisticsPage/StatisticsPage.module.css'
import {Header} from './components/Header'
import styles from './StatisticsPage.module.css'
import React, {useState} from 'react'
import {ButtonStatistics} from "./components/ButtonStatistics";
// import { ButtonStatistics } from '../../UI/ButtonStatistics'
import {StatisticsByPeriodPage} from './components/StatisticsByPeriod/StatisticsByPeriodPage'
import {StatisticsByImportPage} from "./components/StatisticsByImport/StatisticsByImportPage.tsx";
import {StatisticsByResumeNumberPage} from "./components/StatisticsByResumeNumber/StatisticsByResumeNumberPage.tsx";
// import { StatisticsByImportPage } from './components/StatisticsByImport/StatisticsByImportPage'
// import { StatisticsByResumeNumberPage } from './components/StatisticsByResumeNumber/StatisticsByResumeNumberPage'

export const StatisticsPage = () => {
    const [statBy, setStatBy] = useState('Статистика по времени')

    return (
        <>
            <div className={styles.page}>
                <Header subCurrentPageName='Аналитика' currentPageName={statBy}/>

                <div className={styles.buttonsContainer}>
                    <ButtonStatistics
                        classname={
                            statBy === 'Статистика по количеству резюме'
                                ? 'btnActive'
                                : 'btnInactive'
                        }
                        text='Статистика по количеству резюме'
                        onClick={() => {
                            setStatBy('Статистика по количеству резюме')
                        }}
                    />
                    <ButtonStatistics
                        classname={
                            statBy === 'Статистика по времени' ? 'btnActive' : 'btnInactive'
                        }
                        text='Статистика по времени'
                        onClick={() => {
                            setStatBy('Статистика по времени')
                        }}
                    />
                    <ButtonStatistics
                        classname={
                            statBy === 'Статистика по импорту' ? 'btnActive' : 'btnInactive'
                        }
                        text='Статистика по импорту'
                        onClick={() => {
                            setStatBy('Статистика по импорту')
                        }}
                    />
                </div>


                {statBy === 'Статистика по времени' ? (
                    <StatisticsByPeriodPage/>
                ) : statBy === 'Статистика по импорту' ? (
                        <StatisticsByImportPage/>
                    ) :
                   (
                        <StatisticsByResumeNumberPage/>
                    ) }

            </div>
        </>

    )
}
