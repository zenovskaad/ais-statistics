import styles from '../../StatisticsPage.module.css'
import React, { useEffect, useState } from 'react'
import { ButtonStatistics } from '../ButtonStatistics'
import { TbFilterSearch } from "react-icons/tb";
// import { statisticsApi } from '../../../../services/statisticsApi/StatisticsApi'
import { ImportReport } from '../ImportReport'
import { ImportTable } from '../ImportTable'
// import {useScrollVisibility} from "../../../../hooks/useScrollVisibility";

export type ImportStatisticItem = {
    status: string,
    value: number,
}

type ImportsItem = {
    hrName: string,
    hrEmail: string,
    date: string,
    imported: number,
    duplicate: number,
    error: number,
}

export const StatisticsByImportPage = () => {
  const [period, setPeriod] = useState('6-month')
  const [loadingImports, setLoadingImports] = useState(false)
  const [successImport, setSuccessImport] = useState(0)
  const [successImportPercent, setSuccessImportPercent] = useState(0)
  const [errorImport, setErrorImport] = useState(0)
  const [errorImportPercent, setErrorImportPercent] = useState(0)
  const [duplicateImport, setDuplicateImport] = useState(0)
  const [duplicateImportPercent, setDuplicateImportPercent] = useState(0)
  const [page, setPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    setPeriod(period)
    setPage(1);
    setHasMore(true);
  }, [period])


  // useEffect(() => useScrollVisibility(setShowBtn), [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const scrollHandler = () => {
    if (
        document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
        100
    ) {
      // loadMoreList()
    }
  }

  // const loadMoreList=()=>{
  //   hasMore && setLoadingImports(true);
  //   statisticsApi
  //       .getImportsList(period, page)
  //       .then((res) => {
  //         setImportsData((prev) => ({
  //           page: page,
  //           result: page === 1 ? res.data.result : [...prev.result, ...res.data.result],
  //         }));
  //         setTotalCount(totalCount+res.data.result.length)
  //         if (res.data.result.length < 10) {
  //           setHasMore(false);
  //         }
  //       })
  //       .finally(() => setLoadingImports(false));
  // }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => document.removeEventListener('scroll', scrollHandler)
  }, [])

  // ДЛЯ ТЕСТОВ

    const [importsData, setImportsData] = useState<{
          page: number
          result: ImportsItem[]
        }>( {
    page: 1,
    result: [
      {
        hrName: 'Маркин Анатолий Константинович',
        hrEmail: 'markin@outlook.com',
        date: '23.02.2025',
        imported: 12,
        duplicate: 1,
        error: 230,
      },
      {
        hrName: 'Симонохин Афанасий Сергеевич',
        hrEmail: 'dobra_i_pozitiva@outlook.com',
        date: '23.02.2025',
        imported: 0,
        duplicate: 10,
        error: 20,
      },
    ],
  });

  const [importStatistic, setImportStatistic] = useState<{
    result: ImportStatisticItem[]
  }>( {
    result: [
      {
        status: "imported",
        value: 5808.0
      },
      {
        status: "duplicate",
        value: 41956.0
      },
      {
        status: "error",
        value: 23284.0
      }
    ]
  });

  // ДЛЯ ОТПРАВКИ API - ЗАПРОСОВ

  // const [importsData, setImportsData] = useState<{
  //   page: number
  //   result: ImportsItem[]
  // }>({
  //   page: 1,
  //   result: [],
  // })
  //
  // useEffect(() => {
  //   hasMore && setLoadingImports(true);
  //   statisticsApi
  //       .getImportsList(period, page)
  //       .then((res) => {
  //         setImportsData((prev) => ({
  //           page: page,
  //           result: page === 1 ? res.data.result : [...prev.result, ...res.data.result],
  //         }));
  //         setPage(page+1);
  //         if (res.data.result.length < 10) {
  //           setHasMore(false);
  //         }
  //       })
  //       .finally(() => setLoadingImports(false));
  // }, [page, period]);
  //
  // const [importStatistic, setImportStatistic] = useState<{
  //   result: ImportStatisticItem[]
  // }>({
  //   result: [
  //     {
  //       status: 'imported',
  //       value: 0,
  //     },
  //     {
  //       status: 'duplicate',
  //       value: 0,
  //     },
  //     {
  //       status: 'error',
  //       value: 0,
  //     },
  //   ],
  // })
  //
  // useEffect(() => {
  //   statisticsApi.getImportsStatistics(`${period}`).then((res) => {
  //     setImportStatistic(res.data)
  //   })
  // }, [period])

// _______________________________________________________________________________

  useEffect(() => {
    let sum = 0
    importStatistic.result.map((item) => {
      if (item.status == 'imported') {
        sum += item.value
        setSuccessImport(item.value)
      } else if (item.status == 'duplicate') {
        sum += item.value
        setDuplicateImport(item.value)
      } else if (item.status == 'error') {
        setErrorImport(item.value)
        sum += item.value
      }
    })
    if (sum == 0) sum = 1
    const k = 100 / sum
    importStatistic.result.map((item) => {
      if (item.status == 'imported')
        setSuccessImportPercent(Math.round(item.value * k))
      else if (item.status == 'duplicate')
        setDuplicateImportPercent(Math.round(item.value * k))
      else if (item.status == 'error')
        setErrorImportPercent(Math.round(item.value * k))
    })
  }, [period, importStatistic])

  return (
    <>
      <div className={styles.filterContainer}>
        <div className={styles.innerFilterContainer}>
          <div className={styles['filter']}>
              <TbFilterSearch />
            <p>Фильтры</p>
          </div>
          <ButtonStatistics
            classname={period === '1-week' ? 'btnActiveFill' : 'btnInactive'}
            text='Неделя'
            onClick={() => {
              setPeriod('1-week')
            }}
          />
          <ButtonStatistics
            classname={period === '1-month' ? 'btnActiveFill' : 'btnInactive'}
            text='Месяц'
            onClick={() => {
              setPeriod('1-month')
            }}
          />
          <ButtonStatistics
            classname={period === '6-month' ? 'btnActiveFill' : 'btnInactive'}
            text='6 месяцев'
            onClick={() => {
              setPeriod('6-month')
            }}
          />
          <ButtonStatistics
            classname={period === '1-year' ? 'btnActiveFill' : 'btnInactive'}
            text='Год'
            onClick={() => {
              setPeriod('1-year')
            }}
          />
        </div>
      </div>

      {loadingImports ? (
        <div className={styles['loader']}>
            Загрузка
        </div>
      ) : (
        <>
          <div className={styles['reportsContainer']}>
            <ImportReport
              title={'Удачно импортированные резюме и ошибки при импорте'}
              successImport={successImport}
              successImportPercent={successImportPercent}
              errorImport={errorImport}
              errorImportPercent={errorImportPercent}
              duplicateImport={duplicateImport}
              duplicateImportPercent={duplicateImportPercent}
            />
          </div>
          <ImportTable data={importsData.result} />
          {loadingImports && (
            <div className={styles.loader}>
                Загрузка
            </div>
          )}
        </>
      )}
      {showBtn && (
          <button className={styles.btnContentUp} onClick={scrollTop}>
          ^
          </button>
      )}
    </>
  )
}
