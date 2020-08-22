import React, { FC } from 'react'
import { Box, Text, Button, Progress } from '@chakra-ui/core'
import { FaTimes } from 'react-icons/fa'

import { Category } from 'src/interfaces'

interface Props extends Category {
  spent: number
  deleteCategory: (id: string) => void
}

export const CategoryItem: FC<Props> = ({ id, label, spent, treshold, deleteCategory }) => {
  const getProgressColor = () => {
    const progressPercentage = spent / Number(treshold)

    if (progressPercentage > 1) {
      return 'black'
    }
    if (progressPercentage > 0.66) {
      return 'red'
    }
    return 'green'
  }

  return (
    <Box
      borderWidth="1px"
      display="flex"
      justifyContent="space-between"
      padding="3"
      borderRadius="4px"
    >
      <Box>
        <Text fontWeight="600">{label}</Text>
      </Box>
      <Box textAlign="right">
        <Text fontWeight="600" fontFamily="mono">
          {spent}/{treshold}
        </Text>
      </Box>
      <Box flex="1">
        <Progress
          color={getProgressColor()}
          size="sm"
          flex="1"
          value={spent}
          max={Number(treshold)}
        />

        <Button size="xs" onClick={() => deleteCategory(id)}>
          <FaTimes />
        </Button>
      </Box>
    </Box>
  )
}

CategoryItem.displayName = 'CategoryItem'
