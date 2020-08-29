import React, { FC } from 'react'

interface Props {
  progress: number
}

export const Progress: FC<Props> = ({ progress }) => {
  const getProgressColor = () => {
    if (progress > 80) {
      return 'bg-danger'
    }
    if (progress > 50) {
      return 'bg-warning'
    }
    return 'bg-success'
  }
  return (
    <div className="progress">
      <div
        className={`progress-bar ${getProgressColor()}`}
        role="progressbar"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}

Progress.displayName = 'Progress'
