import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Box, Text, Button, Tag } from '@chakra-ui/core'
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
    <Box
      key={id}
      borderWidth="1px"
      display="flex"
      justifyContent="space-between"
      padding="3"
      borderRadius="4px"
    >
      <Box>
        <Text fontWeight="600">{description}</Text>
        <Tag variant="subtle" fontSize="12px" colorScheme="blue" size="sm">
          {categoryLabel ?? category}
        </Tag>{' '}
        •{' '}
        <Text as="span" fontSize="14px" color="gray.600">
          {date}
        </Text>
      </Box>
      <Box textAlign="right">
        <Text fontWeight="600" fontFamily="mono">
          {amount}
        </Text>
        <Button size="xs" onClick={() => deleteExpense(id)}>
          <FaTimes />
        </Button>
      </Box>
    </Box>
  )
}

ExpenseItem.displayName = 'ExpenseItem'
