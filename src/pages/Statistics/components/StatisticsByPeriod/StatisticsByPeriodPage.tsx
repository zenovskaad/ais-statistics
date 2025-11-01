import styles from '../../StatisticsPage.module.css'
import { DiagramVacancies } from '../DiagramVacancies'
import { ChartClosedVacancies } from '../ChartClosedVacancies'
import React, { useEffect, useState } from 'react'
import { ButtonStatistics } from '../ButtonStatistics'
import { TbFilterSearch } from "react-icons/tb";
// import { statisticsApi } from '../../../../services/statisticsApi/StatisticsApi'

export const StatisticsByPeriodPage = () => {
  const [period, setPeriod] = useState('six-month')
  const [loadingAverageDays, setLoadingAverageDays] = useState(false)
  const [loadingClosedVacancies, setLoadingClosedVacancies] = useState(false)
  const [year, setYear] = useState(2025)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(event.target.value)
  }

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2018 + 1 }, (_, i) => currentYear - i);

  // ДЛЯ ТЕСТОВ

    const averageDaysData= {
      result: [
        {
          state: 'communication',
          value: 6.91,
        },
        {
          state: 'screening',
          value: 7.85,
        },
        {
          state: 'new',
          value: 8.38,
        },
        {
          state: 'interview',
          value: 5.31,
        },
        {
          state: 'customer_interview',
          value: 4.91,
        },
        {
          state: 'check_security',
          value: 4.45,
        },
        {
          state: 'send_offer',
          value: 3.81,
        },
        {
          state: 'rejection',
          value: 2.63,
        },
      ],
    }

    const closedVacanciesData={
        "year": 2025,
        "data": [
            {
                "month": 1,
                "days": 6
            },
            {
                "month": 2,
                "days": 14
            },
            {
                "month": 3,
                "days": 28
            },
            {
                "month": 4,
                "days": 4
            },
            {
                "month": 5,
                "days": 9
            },
            {
                "month": 6,
                "days": 11
            },
            {
                "month": 7,
                "days": 18
            },
            {
                "month": 8,
                "days": 23
            },
            {
                "month": 9,
                "days": 8
            },
            {
                "month": 10,
                "days": 5
            },
            {
                "month": 11,
                "days": 19
            },
            {
                "month": 12,
                "days": 32
            }
        ]
    }

  // ДЛЯ РАБОТЫ API-ЗАПРОСОВ

  //   const [averageDaysData, setAverageDaysData] = useState<{ result: AverageDayItem[] }>({
  //       result: [],
  //   });
  //
  //   const [closedVacanciesData, setClosedVacanciesData] = useState<ClosedVacanciesItem>({
  //       year: 0,
  //       data: [],
  //   })
  //
  // useEffect(() => {
  //   setLoadingAverageDays(true);
  //
  //   statisticsApi
  //       .getAverageDays(`${period}`)
  //       .then((res) => {
  //         const ALL_STATES = [
  //           'new',
  //           'communication',
  //           'screening',
  //           'interview',
  //           'customer_interview',
  //           'check_security',
  //           'send_offer',
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
  //         setAverageDaysData(normalizedData);
  //       })
  //       .finally(() => setLoadingAverageDays(false));
  // }, [period]);
  //
  // useEffect(() => {
  //   setLoadingClosedVacancies(true)
  //
  //   statisticsApi
  //       .getClosedVacancies(year)
  //       .then((res) => {
  //         const allMonths = Array.from({ length: 12 }, (_, i) => i + 1)
  //
  //         const monthMap = Object.fromEntries(
  //             res.data.data.map((item: { month: number; days: number }) => [item.month, item.days])
  //         )
  //
  //         const normalizedData = {
  //           year: res.data.year,
  //           data: allMonths.map((month) => ({
  //             month: month,
  //             days: monthMap[month] ?? 0,
  //           })),
  //         }
  //
  //         setClosedVacanciesData(normalizedData)
  //       })
  //       .finally(() => setLoadingClosedVacancies(false))
  // }, [year])

// _______________________________________________________________________________

  return (
      <>

      <div className={styles.filterContainer}>
        <div className={styles.innerFilterContainer}>
          <div className={styles['filter']}>
              <TbFilterSearch />
            <p>Фильтры</p>
          </div>
          <ButtonStatistics
            classname={period === 'week' ? 'btnActiveFill' : 'btnInactive'}
            text='Неделя'
            onClick={() => {
              setPeriod('week')
            }}
          />
          <ButtonStatistics
            classname={period === 'month' ? 'btnActiveFill' : 'btnInactive'}
            text='Месяц'
            onClick={() => {
              setPeriod('month')
            }}
          />
          <ButtonStatistics
            classname={period === 'six-month' ? 'btnActiveFill' : 'btnInactive'}
            text='6 месяцев'
            onClick={() => {
              setPeriod('six-month')
            }}
          />
          <ButtonStatistics
            classname={period === 'year' ? 'btnActiveFill' : 'btnInactive'}
            text='Год'
            onClick={() => {
              setPeriod('year')
            }}
          />
        </div>

        <select
            className={styles.selectYear}
            id='dropdown'
            value={year}
            onChange={handleChange}
        >
          {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
          ))}
        </select>
      </div>

      <div className={styles['diagramsContainer']}>

        {loadingAverageDays && !averageDaysData?.result?.length ? (
          <div className={styles['loader']}>
              Загрузка
          </div>
        ) : (
          <div className={averageDaysData?.result?.length ? '' : styles.hidden}>
            <DiagramVacancies
              result={averageDaysData}
              title={
                'Среднее количество дней расположения резюме на разных статусах'
              }
            />
          </div>
        )}

        {loadingClosedVacancies && !closedVacanciesData?.data?.length ? (
          <div className={styles['loader']}>
              Загрузка
          </div>
        ) : (
          <div
            className={closedVacanciesData?.data?.length ? '' : styles.hidden}
          >
            <ChartClosedVacancies
              data={closedVacanciesData}
              title={'Среднее время закрытия вакансии'}
            />
          </div>
        )}
      </div>
      </>
  )
}
