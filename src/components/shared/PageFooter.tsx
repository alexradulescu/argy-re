import React, { FC } from 'react'
import { Box } from '@chakra-ui/core'

import { Navigation } from './Navigation'

export const PageFooter: FC = () => (
  <Box as="footer">
    <Navigation />
  </Box>
)

PageFooter.displayName = 'PageFooter'
