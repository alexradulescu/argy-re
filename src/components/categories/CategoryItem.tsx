import React, { FC } from 'react'

import { ApiCategory } from 'src/interfaces'

import { Progress } from '../shared'

interface Props extends ApiCategory {
  spent: number
  deleteCategory: (id: string) => void
}

export const CategoryItem: FC<Props> = ({ id, label, spent, treshold, deleteCategory }) => {
  return (
    <li className="list-group-item" onDoubleClick={() => deleteCategory(id)}>
      <div className="d-flex justify-content-between">
        <p className="mb-1">{label}</p>
        <p className="mb-1 text-monospace small">
          <strong>{spent}</strong>
          <span className="text-muted">/{treshold}</span>
        </p>
      </div>

      <Progress progress={(Number(spent) / Number(treshold)) * 100} />
    </li>
  )
}

CategoryItem.displayName = 'CategoryItem'
