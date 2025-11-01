import React from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LineElement,
} from 'chart.js'
// import { statisticsApi } from '../../../../services/statisticsApi/StatisticsApi'
import styles from './ImportsHrData.module.css'
import { ButtonStatistics } from '../ButtonStatistics'

ChartJS.register(
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LineElement
)

type ImportsItem = {
    hrName: string,
    hrEmail: string,
    date: string,
    imported: number,
    duplicate: number,
    error: number,
}

interface ImportsHrDataProps {
  data: ImportsItem
}

export const ImportsHrData: React.FC<ImportsHrDataProps> = ({ data }) => {
  // const downloadReport = (hrEmail: string, date: string) => {
  //   statisticsApi.downloadReport(hrEmail, date)
  // }

  return (
    <div className={styles['main-container']}>
      <table className={styles['table-body']}>
        <tbody>
          <tr>
            <td>{data.date}</td>
            <td>{data.hrName}</td>
            <td>{data.imported} резюме</td>
            <td>{data.error} резюме</td>
            <td>{data.duplicate} резюме</td>
            <td>
              <ButtonStatistics
                classname={'btnInactive'}
                text='Скачать отчет'
                withHover={true}
                onClick={() => {
                  // downloadReport(data.hrEmail, data.date)
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
