import React, { FC } from 'react'

import { Expense } from 'src/interfaces'

interface Props extends Expense {
  deleteExpense: (id: string) => void
}

export const ExpenseItem: FC<Props> = ({
  id,
  description,
  categoryLabel,
  amount,
  date,
  deleteExpense
}) => {
  return (
    <li className="list-group-item " onDoubleClick={() => deleteExpense(id)}>
      <div className="d-flex justify-content-between">
        <p className="mb-0">{description}</p>
        <p className="mb-0 text-danger">{amount}</p>
      </div>
      <span className="badge badge-info mr-2">{categoryLabel}</span>
      <span className="badge badge-light">{date}</span>
    </li>
  )
}

ExpenseItem.displayName = 'ExpenseItem'
