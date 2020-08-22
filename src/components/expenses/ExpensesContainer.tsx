import React, { FC } from 'react'
import { Box } from '@chakra-ui/core'

import { useExpenses } from 'src/hooks'

import { ExpenseItem } from './ExpenseItem'

export const ExpensesContainer: FC = () => {
  const { expenses, deleteExpense } = useExpenses()

  return (
    <Box>
      {expenses.map(({ id, description, category, amount, date }) => (
        <ExpenseItem
          id={id}
          description={description}
          category={category}
          amount={amount}
          date={date}
          deleteExpense={deleteExpense}
        />
      ))}
    </Box>
  )
}

ExpensesContainer.displayName = 'ExpensesContainer'
