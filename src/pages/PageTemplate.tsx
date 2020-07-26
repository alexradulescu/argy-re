import React, { FC, ReactNode } from 'react'
import { Box } from '@chakra-ui/core'

import { PageHeader, PageFooter } from '../components'

interface Props {
  title: string
  children: ReactNode
}

export const PageTemplate: FC<Props> = ({ title, children }) => {
  return (
    <Box as="main" maxWidth="960px" margin="auto">
      <PageHeader title="Incomes" />
      {children}
      <PageFooter />
    </Box>
  )
}

PageTemplate.displayName = 'PageTemplate'
