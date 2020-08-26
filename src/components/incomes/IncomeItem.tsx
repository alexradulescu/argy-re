import React, { FC } from 'react'

import { Income } from 'src/interfaces'

interface Props extends Income {
  deleteIncome: (id: string) => void
}

export const IncomeItem: FC<Props> = ({ id, description, amount, date, deleteIncome }) => {
  return (
    <li className="list-group-item" onDoubleClick={() => deleteIncome(id)}>
      <div className="d-flex justify-content-between">
        <p className="mb-0">{description}</p>
        <p className="mb-0">{amount}</p>
      </div>
      <span className="badge badge-success">{date}</span>
    </li>
  )
}

IncomeItem.displayName = 'IncomeItem'
