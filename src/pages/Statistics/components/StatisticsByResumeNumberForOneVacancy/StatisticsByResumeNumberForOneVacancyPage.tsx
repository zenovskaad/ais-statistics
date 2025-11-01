import styles from '../../StatisticsPage.module.css'
import React, { useEffect, useState } from 'react'
// import { statisticsApi } from '../../../../services/statisticsApi/StatisticsApi'
import { DiagramResumeNumberByStatus } from '../DiagramResumeNumberByStatus'
import { StatisticsInput } from '../StatisticsInput'

export const StatisticsByResumeNumberForOneVacancyPage = () => {
  const [loadingResumesNumber, setLoadingResumesNumber] = useState(false)
  const [searchVacancy, setSearchVacancy] = useState('')

  // ДЛЯ ТЕСТОВ
  const averageDaysData = {
    result: [
      {
        state: 'communication',
        value: 88,
      },
      {
        state: 'screening',
        value: 35,
      },
      {
        state: 'new',
        value: 13,
      },
      {
        state: 'interview',
        value: 55,
      },
      {
        state: 'customer_interview',
        value: 47,
      },
      {
        state: 'check_security',
        value: 33,
      },
      {
        state: 'send_offer',
        value: 24,
      },
      {
        state: 'rejection',
        value: 18,
      },
    ],
  }

  // ДЛЯ РАБОТЫ API-ЗАПРОСОВ
  //   const [resumesNumberData, setAverageDaysData] = useState<{ result: AverageDayItem[] }>({
  //       result: [],
  //   });
  //
  // useEffect(() => {
  //   setLoadingResumesNumber(true);
  //
  //   statisticsApi
  //       .getResumesNumberForOne(`${searchVacancy}`)
  //       .then((res) => {
  //         const ALL_STATES = [
  //           'new',
  //           'communication',
  //           'screening',
  //           'interview',
  //           'customer_interview',
  //           'check_security',
  //           'send_offer',
  //           'rejection',
  //         ];
  //
  //         const dataMap = Object.fromEntries(res.data.result.map(item => [item.state.toLowerCase(), item.value]));
  //
  //         const normalizedData = {
  //           result: ALL_STATES.map(state => ({
  //             state,
  //             value: dataMap[state] ?? 0,
  //           })),
  //         };
  //
  //         setResumesNumberData(normalizedData);
  //       })
  //       .finally(() => setLoadingResumesNumber(false));
  // }, [period]);

  return (
    <>
      <div className={styles['diagramsContainer']}>
        <StatisticsInput
          value={searchVacancy}
          onChange={(e) => setSearchVacancy(e.target.value)}
        />

        {loadingResumesNumber && !averageDaysData?.result?.length ? (
          <div className={styles['loader']}>
            Загрузка
          </div>
        ) : (
          <div className={averageDaysData?.result?.length ? '' : styles.hidden}>
            <DiagramResumeNumberByStatus
              result={averageDaysData}
              title={'Количество резюме у вакансии на разных статусах'}
            />
          </div>
        )}
      </div>
    </>
  )
}
