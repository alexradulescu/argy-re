import React, { FC } from 'react'

import { ApiIncome } from 'src/interfaces'

interface Props extends ApiIncome {
  deleteIncome: (id: string) => void
}

export const IncomeItem: FC<Props> = ({ id, description, amount, date, deleteIncome }) => {
  return (
    <li className="list-group-item" onDoubleClick={() => deleteIncome(id)}>
      <div className="d-flex justify-content-between">
        <p className="mb-0">{description}</p>
        <p className="mb-0 text-success text-monospace small">{amount}</p>
      </div>
      <span className="badge badge-light">{date}</span>
    </li>
  )
}

IncomeItem.displayName = 'IncomeItem'
