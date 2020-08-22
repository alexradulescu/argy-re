import React, { FC } from 'react'
import { Box } from '@chakra-ui/core'

import { useIncomes } from 'src/hooks'

import { IncomeItem } from './IncomeItem'

export const IncomesContainer: FC = () => {
  const { incomes, deleteIncome } = useIncomes()

  return (
    <Box>
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
    </Box>
  )
}

IncomesContainer.displayName = 'IncomesContainer'
