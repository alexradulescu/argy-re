import React, { FC } from 'react'
import { Box, Heading } from '@chakra-ui/core'

import { useOverview, useCategories } from 'src/hooks'

import { CategoryItem } from './CategoryItem'

export const CategoriesContainer: FC = () => {
  const { overview, totalBalance } = useOverview()
  const { deleteCategory } = useCategories()

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Heading size="lg" color="gray.500">
          Overview
        </Heading>
        <Heading size="lg">{totalBalance}</Heading>
      </Box>
      <Box>
        {overview.map(({ id, label, treshold, spent }: any) => (
          <CategoryItem
            key={id}
            id={id}
            label={label}
            spent={spent}
            treshold={treshold}
            deleteCategory={deleteCategory}
          />
        ))}
      </Box>
    </>
  )
}

CategoriesContainer.displayName = 'CategoriesContainer'
