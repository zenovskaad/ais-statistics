import React from 'react'
import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  // ChartOptions,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import styles from './DiagramSuccessResume.module.css'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

interface DataItem {
  state: string
  value: number
}

interface IDiagramSuccessResume {
  result: DataItem[]
}

interface DiagramSuccessResumeProps {
  result: IDiagramSuccessResume
  title: string
}

export const DiagramSuccessResume: React.FC<DiagramSuccessResumeProps> = ({
  result,
  title,
}) => {
  const states = result.result.map((item) => {
    switch (item.state) {
      case 'send_offer':
        return 'Нанят'
      case 'rejection':
        return 'Отказ'
      default:
        return item.state
    }
  })

  const values = result.result.map((item) => item.value)
  const total = values.reduce((sum, val) => sum + val, 0)

  const backgroundColors = ['#1871ED', '#91B7ED']

  const chartData = {
    labels: states,
    datasets: [
      {
        data: values,
        backgroundColor: backgroundColors,
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  }

  const options: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: '#000000', // ← ЧЕРНЫЙ ЦВЕТ текста
        font: {
          size: 13,
          weight: 'normal', // можно 'bold' для жирного
        },
        formatter: (value: number, context) => {
          const data = context.chart.data.datasets[0].data as number[];
          const total = data.reduce((sum, val) => sum + val, 0);
          const percent = (value / total) * 100;
          return percent < 4 ? '' : `${Math.round(percent)}%`;
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#ffffff',
        bodyColor: '#2969FF',
        borderRadius: 12,
        padding: 16,
        caretSize: 0,
        bodyFont: {
          size: 20,
          family: 'Roboto',
          weight: 'bold',
        },
        displayColors: false,
        callbacks: {
          label: (context: any) => {
            const value = context.dataset.data[context.dataIndex]
            const percent = ((value / total) * 100).toFixed(1)
            return `${value} (${percent}%)`
          },
        },
      },
    },
  }

  return (
    <div className={styles.container}>
      <div className={styles.diagramTitle}>{title}</div>
      <Pie
        className={styles.diagramSuccessResume}
        data={chartData}
        options={options}
        plugins={[ChartDataLabels]}
      />
      <div className={styles.legeng}>
        <div className={styles.legendItem}>
          <div className={styles.legendHalfItem}>
            <div
              className={styles.legendColor}
              style={{ backgroundColor: backgroundColors[0] }}
            ></div>
            <div className={styles.legendLabel}>{chartData.labels[0]}</div>
          </div>
          <div className={styles.legendHalfItem}>
            <div className={styles.legendLabel}>
              {Math.round((chartData.datasets[0].data[0] * 100) /
                (chartData.datasets[0].data[0] +
                  chartData.datasets[0].data[1]))}
              %
            </div>
            <div className={styles.legendLabel}>
              {chartData.datasets[0].data[0]}
            </div>
          </div>
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendHalfItem}>
            <div
              className={styles.legendColor}
              style={{ backgroundColor: backgroundColors[1] }}
            ></div>
            <div className={styles.legendLabel}>{chartData.labels[1]}</div>
          </div>
          <div className={styles.legendHalfItem}>
            <div className={styles.legendLabel}>
              {Math.round((chartData.datasets[0].data[1] * 100) /
                (chartData.datasets[0].data[0] +
                  chartData.datasets[0].data[1]))}
              %
            </div>
            <div className={styles.legendLabel}>
              {chartData.datasets[0].data[1]}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
