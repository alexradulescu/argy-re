import React, { FC, useState, ChangeEvent } from 'react'
import { Box, Input } from '@chakra-ui/core'

import { useExpenses } from 'src/hooks'
import { getThisYearMonth, getSeparateMonthYear } from 'src/utils'

import { ExpenseItem } from './ExpenseItem'

export const ExpensesContainer: FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(getThisYearMonth())
  const { expenses, deleteExpense } = useExpenses(getSeparateMonthYear(selectedMonth))

  const onMonthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedMonth(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
      <Input
        placeholder="Select month and year"
        name="month"
        type="month"
        max={getThisYearMonth()}
        value={selectedMonth}
        onChange={onMonthChange}
        isRequired
      />
      <Box>
        {expenses.map(({ id, description, category, amount, date }) => (
          <ExpenseItem
            key={id}
            id={id}
            description={description}
            category={category}
            amount={amount}
            date={date}
            deleteExpense={deleteExpense}
          />
        ))}
      </Box>
    </>
  )
}

ExpensesContainer.displayName = 'ExpensesContainer'
