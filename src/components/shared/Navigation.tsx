import React, { FC } from 'react'
import { Box } from '@chakra-ui/core'
import { AiOutlineHome } from 'react-icons/ai'
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi'
import { RiSettings4Line } from 'react-icons/ri'
import { HiOutlineDocumentReport } from 'react-icons/hi'

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
      <AiOutlineHome />
    </NavigationLink>
    <NavigationLink
      activeStyle={{
        fontWeight: 'bold'
      }}
      to="/expenses"
    >
      <GiPayMoney />
    </NavigationLink>
    <NavigationLink
      activeStyle={{
        fontWeight: 'bold'
      }}
      to="/incomes"
    >
      <GiReceiveMoney />
    </NavigationLink>
    <NavigationLink
      activeStyle={{
        fontWeight: 'bold'
      }}
      to="/report"
    >
      <HiOutlineDocumentReport />
    </NavigationLink>
    <NavigationLink
      activeStyle={{
        fontWeight: 'bold'
      }}
      to="/categories"
    >
      <RiSettings4Line />
    </NavigationLink>
  </Box>
)

Navigation.displayName = 'Navigation'
