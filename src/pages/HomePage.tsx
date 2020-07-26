import React, { FC } from 'react'

import { ExpensesContainer, ExpenseFormContainer } from '../components'
import { PageTemplate } from './PageTemplate'

export const HomePage: FC = () => (
  <PageTemplate title="Dashboard">
    <ExpensesContainer />
    <ExpenseFormContainer />
  </PageTemplate>
)

HomePage.displayName = 'HomePage'
