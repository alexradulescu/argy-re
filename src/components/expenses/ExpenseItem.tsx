import React, { FC } from 'react'
import { FaTimes } from 'react-icons/fa'

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
    <li className="list-group-item">
      <p>{description}</p>
      <p>
        {categoryLabel ?? category} - {date}
      </p>

      <p>{amount}</p>
      <button className="btn btn-sm btn-outline-secondary" onClick={() => deleteExpense(id)}>
        <FaTimes />
      </button>
    </li>
  )
}

ExpenseItem.displayName = 'ExpenseItem'
