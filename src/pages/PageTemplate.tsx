import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { PageHeader, PageFooter } from 'src/components'

interface Props {
  title: string
  children: ReactNode
}

export const PageTemplate: FC<Props> = ({ title, children }) => {
  return (
    <Main className="d-flex flex-column vh-100 bg-light pb-5">
      <PageHeader title={title} />
      {children}
      <PageFooter />
    </Main>
  )
}

PageTemplate.displayName = 'PageTemplate'

const Main = styled.main`
  @media all and (max-width: 450px) {
    padding-bottom: 72px !important;
  }
`
