import React, { FC, ReactNode } from 'react'
import { Box } from '@chakra-ui/core'

import { PageHeader, PageFooter } from 'src/components'

interface Props {
  title: string
  children: ReactNode
}

export const PageTemplate: FC<Props> = ({ title, children }) => {
  return (
    <Box as="main" maxWidth="960px" width="90%" margin="auto">
      <PageHeader title={title} />
      {children}
      <PageFooter />
    </Box>
  )
}

PageTemplate.displayName = 'PageTemplate'
