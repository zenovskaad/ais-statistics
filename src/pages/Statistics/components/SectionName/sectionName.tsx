import React from 'react'

import styles from './sectionName.module.css'

interface ISectionName {
  isActive: boolean
  name: string
  onClick: () => void
}

export const SectionName: React.FC<ISectionName> = (props) => {
  const {isActive, name, onClick } = props

  return (
    <button className={isActive?styles.sectionActive: styles.sectionNotActive} onClick={onClick}>
      {name}
    </button>
  )
}
