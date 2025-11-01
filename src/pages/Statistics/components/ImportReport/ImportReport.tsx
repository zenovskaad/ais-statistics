import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LineElement,
} from 'chart.js';
import styles from './ImportReport.module.css';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, CategoryScale, LineElement);

interface ImportReportProps {
  successImport: number;
  errorImport: number;
  duplicateImport: number;
  successImportPercent: number;
  errorImportPercent: number;
  duplicateImportPercent: number;
  title: string;
}

export const ImportReport: React.FC<ImportReportProps> = (props,) => {
  const {successImport,    errorImport, duplicateImport, successImportPercent, errorImportPercent, duplicateImportPercent, title} = props;

  return (
    <div>
      <div className={styles.title}>{title}</div>
      <div>

        <table className={styles['report-table']}>
          <tbody>
          <tr>
            <td>
              <span className={styles.dot} style={{ backgroundColor: '#EFF0F5' }}></span>
              Импортировано</td>
            <td>{successImportPercent}%</td>
            <td>{successImport}</td>
            <td>
              <div className={styles.barWrapper}>
                <div
                    className={styles.bar}
                    style={{
                      width: `${successImportPercent}%`,
                      backgroundColor: '#EFF0F5',
                    }}
                ></div>
                <div className={styles.barPercentText}>
                  {successImportPercent}%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <span className={styles.dot} style={{ backgroundColor: '#FFA9BD' }}></span>
              Дубликаты при импорте</td>
            <td>{duplicateImportPercent}%</td>
            <td>{duplicateImport}</td>
            <td>
              <div className={styles.barWrapper}>
                <div
                    className={styles.bar}
                    style={{
                      width: `${duplicateImportPercent}%`,
                      backgroundColor: '#FFA9BD',
                    }}
                ></div>
                <div className={styles.barPercentText}>
                  {duplicateImportPercent}%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <span className={styles.dot} style={{ backgroundColor: '#A9C3FF' }}></span>
              Ошибка при импорте</td>
            <td>{errorImportPercent}%</td>
            <td>{errorImport}</td>
            <td>
              <div className={styles.barWrapper}>
                <div
                    className={styles.bar}
                    style={{
                      width: `${errorImportPercent}%`,
                      backgroundColor: '#A9C3FF',
                    }}
                ></div>
                <div className={styles.barPercentText}>
                  {errorImportPercent}%
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>

      </div>
    </div>
  )
};
