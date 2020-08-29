import React, { FC, useState, ChangeEvent } from 'react'

import { useIncomes } from 'src/hooks'
import { getThisYearMonth, getSeparateMonthYear } from 'src/utils'

import { IncomeItem } from './IncomeItem'

export const IncomesContainer: FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(getThisYearMonth())
  const onMonthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedMonth(e.target.value)
  }

  const { incomes, deleteIncome } = useIncomes(getSeparateMonthYear(selectedMonth))

  return (
    <div className="container flex-fill overflow-auto">
      <input
        className="form-control mb-2"
        placeholder="Select month and year"
        name="month"
        type="month"
        max={getThisYearMonth()}
        value={selectedMonth}
        onChange={onMonthChange}
      />
      <ul className="list-group">
        {incomes.map(({ id, description, amount, date }) => (
          <IncomeItem
            key={id}
            id={id}
            description={description}
            amount={amount}
            date={date}
            deleteIncome={deleteIncome}
          />
        ))}
      </ul>
    </div>
  )
}

IncomesContainer.displayName = 'IncomesContainer'
