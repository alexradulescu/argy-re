import React, { FC, ReactNode } from 'react'

import { PageHeader, PageFooter } from 'src/components'

interface Props {
  title: string
  children: ReactNode
}

export const PageTemplate: FC<Props> = ({ title, children }) => {
  return (
    <main className="d-flex flex-column vh-100 bg-light pb-5">
      <PageHeader title={title} />
      {children}
      <PageFooter />
    </main>
  )
}

PageTemplate.displayName = 'PageTemplate'
