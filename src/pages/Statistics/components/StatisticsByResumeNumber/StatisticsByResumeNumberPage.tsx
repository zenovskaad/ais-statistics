import styles from '../../StatisticsPage.module.css'
import React, { useEffect, useState } from 'react'
// import { statisticsApi } from '../../../../services/statisticsApi/StatisticsApi'
import { SectionName } from '../SectionName'
import {
  StatisticsByResumeNumberForAllVacancyPage
} from '../StatisticsByResumeNumberForAllVacancy/StatisticsByResumeNumberForAllVacancyPage'
import {
  StatisticsByResumeNumberForOneVacancyPage
} from '../StatisticsByResumeNumberForOneVacancy/StatisticsByResumeNumberForOneVacancyPage'

export const StatisticsByResumeNumberPage = () => {
  const [vacancyNumber, setVacancyNumber] = useState('all')

  if (vacancyNumber=='all')
  return (
      <>
      <div className={styles.filterContainerWithoutBorder}>
        <div className={styles.innerFilterContainer}>
          <SectionName isActive={vacancyNumber=='all'} name={'Статистика всех вакансий по статусам'} onClick={()=>{setVacancyNumber('all')}}/>
          <SectionName isActive={vacancyNumber=='one'} name={'Статистика вакансии по статусам'}  onClick={()=>{setVacancyNumber('one')}}/>
        </div>
      </div>

      <StatisticsByResumeNumberForAllVacancyPage/>
      </>
  )

  return (
    <>
      <div className={styles.filterContainerWithoutBorder}>
        <div className={styles.innerFilterContainer}>
          <SectionName isActive={vacancyNumber=='all'} name={'Статистика всех вакансий по статусам'} onClick={()=>{setVacancyNumber('all')}}/>
          <SectionName isActive={vacancyNumber=='one'} name={'Статистика вакансии по статусам'}  onClick={()=>{setVacancyNumber('one')}}/>
        </div>
      </div>

      <StatisticsByResumeNumberForOneVacancyPage/>
      </>
  )
}
