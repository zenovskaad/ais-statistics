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
import styles from './ImportTable.module.css'
import {ImportsHrData} from "../ImportsHrData";
// import { ImportsHrData } from '../ImportsHrData'

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

interface ImportTableProps {
  data:  ImportsItem[]
}

export const ImportTable: React.FC<ImportTableProps> = ({ data }) => {

  return (
    <div>
      <table className={styles['table-header']}>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Ф.И.О. ответственного</th>
            <th>Импорт</th>
            <th>Ошибка при импорте</th>
            <th>Дубликаты при импорте</th>
            <th>Действие</th>
          </tr>
        </thead>
      </table>

      {data?.length ? (
        <div className={styles['import-list']}>
          {data.map((item) => (
            <ImportsHrData key={item.hrEmail+item.date+item.imported+item.duplicate+item.error} data={item} />
          ))}
        </div>
      ) : (
        <div className={styles['empty-list']}>Список импорта пуст</div>
      )}
    </div>
  )
}
