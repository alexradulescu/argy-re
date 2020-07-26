import React, { FC } from 'react'

import { PageHeader, PageFooter } from '../shared-components'
import { ExpenseFormContainer } from '../expenses'

import { IncomesContainer } from './IncomesContainer'

export const IncomesPage: FC = () => {
  return (
    <main>
      <PageHeader title="Incomes" />
      <br />
      <IncomesContainer />
      <br />
      <ExpenseFormContainer />
      <br />
      <PageFooter />
    </main>
  )
}

IncomesPage.displayName = 'IncomesPage'
