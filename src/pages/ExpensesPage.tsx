import React, { FC } from 'react'

import { ExpensesContainer, ExpenseFormContainer } from 'src/components'

import { PageTemplate } from './PageTemplate'

/**
 * 1. Header --> Title + settings, profile
 * 2. Month & year selector - current month by default
 * 3. All expense - for seleted time frame
 * 4. Plus floating button for expense quick form - redirect to home
 * 5. Footer navigation
 */
export const ExpensesPage: FC = () => (
  <PageTemplate title="Home">
    <ExpensesContainer />
    <ExpenseFormContainer />
  </PageTemplate>
)

ExpensesPage.displayName = 'ExpensesPage'
