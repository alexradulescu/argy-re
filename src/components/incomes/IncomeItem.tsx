import React, { FC } from 'react'
import { FaTimes } from 'react-icons/fa'

import { Income } from 'src/interfaces'

interface Props extends Income {
  deleteIncome: (id: string) => void
}

export const IncomeItem: FC<Props> = ({ id, description, amount, date, deleteIncome }) => {
  return (
    <li className="list-group-item">
      <p>{description}</p>
      <p>{date}</p>
      <p>{amount}</p>
      <button className="btn btn-sm btn-outline-secondary" onClick={() => deleteIncome(id)}>
        <FaTimes />
      </button>
    </li>
  )
}

IncomeItem.displayName = 'IncomeItem'
