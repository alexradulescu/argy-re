import React, { FC } from 'react'
import { Box } from '@chakra-ui/core'

import { NavigationLink } from './NavigationLink'

export const Navigation: FC = () => (
  <Box
    as="nav"
    display="grid"
    gridGap="4px"
    gridAutoFlow="column"
    gridAutoColumns="1fr"
    // position="fixed"
    // bottom="4px"
    // left="4px"
    // right="4px"
    // border="1px solid gray.200"
  >
    <NavigationLink
      exact
      activeStyle={{
        fontWeight: 'bold'
      }}
      to="/"
    >
      Home
    </NavigationLink>
    <NavigationLink
      activeStyle={{
        fontWeight: 'bold'
      }}
      to="/categories"
    >
      Categories
    </NavigationLink>
    <NavigationLink
      activeStyle={{
        fontWeight: 'bold'
      }}
      to="/incomes"
    >
      Incomes
    </NavigationLink>
  </Box>
)

Navigation.displayName = 'Navigation'
