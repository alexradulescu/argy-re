import React, { FC } from 'react'

import { ExpensesContainer, ExpenseFormContainer } from 'src/components'

import { PageTemplate } from './PageTemplate'

/**
 * 1. Header --> Title + settings, profile
 * 2. Active Categories, scrollable
 * 3. Income & expense form
 * 4. Footer
 */
export const HomePage: FC = () => (
  <PageTemplate title="Home">
    <ExpensesContainer />
    <ExpenseFormContainer />
  </PageTemplate>
)

HomePage.displayName = 'HomePage'
