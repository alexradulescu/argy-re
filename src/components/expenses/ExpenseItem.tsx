import React, { FC } from 'react'

import { Expense } from 'src/interfaces'

interface Props extends Expense {
  deleteExpense: (id: string) => void
}

export const ExpenseItem: FC<Props> = ({
  id,
  description,
  category,
  categoryLabel,
  amount,
  date,
  deleteExpense
}) => {
  return (
    <li className="list-group-item " onDoubleClick={() => deleteExpense(id)}>
      <div className="d-flex justify-content-between">
        <p className="mb-0">{description}</p>
        <p className="mb-0">{amount}</p>
      </div>
      <span className="badge badge-info">
        {categoryLabel ?? category} - {date}
      </span>
    </li>
  )
}

ExpenseItem.displayName = 'ExpenseItem'
