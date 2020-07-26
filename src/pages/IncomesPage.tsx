import React, { FC } from 'react'

import { ExpenseFormContainer, IncomesContainer } from '../components'

import { PageTemplate } from './PageTemplate'

export const IncomesPage: FC = () => (
  <PageTemplate title="Incomes">
    <IncomesContainer />
    <ExpenseFormContainer />
  </PageTemplate>
)

IncomesPage.displayName = 'IncomesPage'
