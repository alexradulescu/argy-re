import React, { FC, useState, ChangeEvent } from 'react'

import { useExpenses } from 'src/hooks'
import { getThisYearMonth, getSeparateMonthYear } from 'src/utils'

import { ExpenseItem } from './ExpenseItem'

export const ExpensesContainer: FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(getThisYearMonth())
  const { expenses, deleteExpense } = useExpenses(getSeparateMonthYear(selectedMonth))

  const onMonthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedMonth(e.target.value)
  }

  return (
    <div className="container flex-fill">
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
        {expenses.map(({ id, description, category, categoryLabel, amount, date }) => (
          <ExpenseItem
            key={id}
            id={id}
            description={description}
            category={category}
            categoryLabel={categoryLabel}
            amount={amount}
            date={date}
            deleteExpense={deleteExpense}
          />
        ))}
      </ul>
    </div>
  )
}

ExpensesContainer.displayName = 'ExpensesContainer'
