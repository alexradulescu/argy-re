import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { PageHeader, PageFooter } from 'src/components'

interface Props {
  title: string
  children: ReactNode
}

export const PageTemplate: FC<Props> = ({ title, children }) => {
  return (
    <Main className="d-flex flex-column vh-100 bg-light">
      <PageHeader title={title} />
      {children}
      <PageFooter />
    </Main>
  )
}

PageTemplate.displayName = 'PageTemplate'

const Main = styled.main`
  padding-bottom: 86px;
`
