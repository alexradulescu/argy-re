import React, { FC } from 'react'
import { Box, Text, Button } from '@chakra-ui/core'
import { FaTimes } from 'react-icons/fa'

import { Income } from '../../interfaces'

interface Props extends Income {
  deleteIncome: (id: string) => void
}

export const IncomeItem: FC<Props> = ({ id, description, amount, date, deleteIncome }) => {
  return (
    <Box key={id} borderWidth="1px" display="flex" justifyContent="space-between" padding="3" borderRadius="4px">
      <Box>
        <Text fontWeight="600">{description}</Text>
        <Text as="span" fontSize="14px" color="gray.600">
          {date}
        </Text>
      </Box>
      <Box textAlign="right">
        <Text fontWeight="600" fontFamily="mono">
          {amount}
        </Text>
        <Button size="xs" onClick={() => deleteIncome(id)}>
          <FaTimes />
        </Button>
      </Box>
    </Box>
  )
}

IncomeItem.displayName = 'IncomeItem'
