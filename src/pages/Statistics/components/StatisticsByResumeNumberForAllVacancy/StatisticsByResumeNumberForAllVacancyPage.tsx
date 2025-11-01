import styles from '../../StatisticsPage.module.css'
import React, { useEffect, useState } from 'react'
// import { statisticsApi } from '../../../../services/statisticsApi/StatisticsApi'
import { DiagramResumeNumberByStatus } from '../DiagramResumeNumberByStatus'
import { DiagramSuccessResume } from '../DiagramSuccessResume'
import { DiagramResumeWithoutVacancy } from '../DiagramResumeWithoutVacancy'

type MonthOption = {
  label: string
  value: string
}

export const StatisticsByResumeNumberForAllVacancyPage = () => {
  const date = new Date()
  date.setMonth(date.getMonth() - 1)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const [period, setPeriod] = useState(`${year}-${month}`)
  const [loadingResumesNumber, setLoadingResumesNumber] = useState(false)
  const [loadingSuccessfulResume, setLoadingSuccessfulResume] = useState(false)
  const [
    loadingResumeWithoutVacancy,
    setLoadingSeccessfulResumeWithoutVacancy,
  ] = useState(false)

  const getMonthOptions = (startYear: number): MonthOption[] => {
    const monthNames = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ]

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth() // от 0 до 11

    const result: MonthOption[] = []

    for (let year = startYear; year <= currentYear; year++) {
      const lastMonth = year === currentYear ? currentMonth : 11

      for (let month = 0; month <= lastMonth; month++) {
        const label = `${monthNames[month]} ${year}`
        const value = `${year}-${(month + 1).toString().padStart(2, '0')}` // формат YYYY-MM
        result.push({ label, value })
      }
    }

    return result
  }

  const periods = getMonthOptions(2020)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPeriod(event.target.value)
  }

  // ДЛЯ ТЕСТОВ
  const resumesNumberData = {
    result: [
      {
        state: 'communication',
        value: 84,
      },
      {
        state: 'screening',
        value: 37,
      },
      {
        state: 'new',
        value: 19,
      },
      {
        state: 'interview',
        value: 55,
      },
      {
        state: 'customer_interview',
        value: 42,
      },
      {
        state: 'check_security',
        value: 38,
      },
      {
        state: 'send_offer',
        value: 26,
      },
    ],
  }

  const resumeWithoutVacancyData = {
    result: [
      {
        state: 'withVacancy',
        value: 750,
      },
      {
        state: 'withoutVacancy',
        value: 250,
      },
    ],
  }

  const successResumeData = {
    result: [
      {
        state: 'send_offer',
        value: 750,
      },
      {
        state: 'rejection',
        value: 250,
      },
    ],
  }

  // ДЛЯ РАБОТЫ API-ЗАПРОСОВ
  //   const [resumesNumberData, setAverageDaysData] = useState<{ result: AverageDayItem[] }>({
  //       result: [],
  //   });
  //
  //   const [resumeWithoutVacancyData, setClosedVacanciesData] = useState<{ result: AverageDayItem[] }>({
  //        result: [],
  //   })
  //
  //   const [successfulResumeData, setSuccessfulResumeData] = useState<{ result: AverageDayItem[] }>({
  //        result: [],
  //   })
  //
  // useEffect(() => {
  //   setLoadingResumesNumber(true);
  //
  //   statisticsApi
  //       .getResumesNumberForAll(`${period}`)
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
  //
  // useEffect(() => {
  //   setLoadingSuccessfulResume(true)
  //
  //   statisticsApi
  //       .getSuccessfulResume(`${period}`)
  //   .then((res) => {
  //         const ALL_STATES = [
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
  //         setSuccessfulResumeData(normalizedData);
  //       })
  //       .finally(() => setLoadingSuccessfulResume(false));
  // }, [year])
  //
  // useEffect(() => {
  //   setResumeWithoutVacancy(true)
  //
  //   statisticsApi
  //       .getResumeWithoutVacancy(`${period}`)
  //   .then((res) => {
  //         const ALL_STATES = [
  //           'withVacancy',
  //           'withoutVacancy',
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
  //         setResumeWithoutVacancyData(normalizedData);
  //       })
  //       .finally(() => setLoadingResumeWithoutVacancy(false));
  // }, [year])

  return (
    <>
      <div className={styles.selectPeriod}>
        <select
          className={styles.selectMonthYear}
          id='dropdown'
          value={period}
          onChange={handleChange}
        >
          {periods.map((y) => (
            <option key={y.value} value={y.value}>
              {y.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles['diagramsContainer']}>
        {loadingResumesNumber && !resumesNumberData?.result?.length ? (
          <div className={styles['loader']}>
            Загрузка
          </div>
        ) : (
          <div
            className={resumesNumberData?.result?.length ? '' : styles.hidden}
          >
            <DiagramResumeNumberByStatus
              result={resumesNumberData}
              title={'Количество резюме у всех вакансий на разных статусах'}
            />
          </div>
        )}

        {loadingSuccessfulResume &&
        !resumeWithoutVacancyData?.result?.length ? (
          <div className={styles['loader']}>
            Загрузка
          </div>
        ) : (
          <div className={styles.pieDiagrams}>
            <DiagramSuccessResume
              result={successResumeData}
              title={'Количество удачно закрытых резюме'}
            />

            <DiagramResumeWithoutVacancy
              result={resumeWithoutVacancyData}
              title={'Количество резюме без вакансии'}
            />
          </div>
        )}
      </div>
    </>
  )
}
