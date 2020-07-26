import React, { FC } from 'react'
import { Flex, Heading } from '@chakra-ui/core'

interface Props {
  title: string
}

export const PageHeader: FC<Props> = ({ title }) => (
  <Flex padding="8px">
    <Heading size="lg">{title}</Heading>
  </Flex>
)

PageHeader.displayName = 'PageHeader'
