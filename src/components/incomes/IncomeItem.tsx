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
        <p className="mb-0 text-success">{amount}</p>
      </div>
      <span className="badge badge-light">{date}</span>
    </li>
  )
}

IncomeItem.displayName = 'IncomeItem'
