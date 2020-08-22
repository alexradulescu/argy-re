import React, { FC } from 'react'

import { ExpenseFormContainer, IncomesContainer } from 'src/components'

import { PageTemplate } from './PageTemplate'
/**
 * 1. Header --> Title + settings, profile
 * 2. Month & year selector - current month by default
 * 2. All Incomes - for seleted time frame
 * 3. Plus floating button for incomes quick modal
 * 4. Footer
 */
export const IncomesPage: FC = () => (
  <PageTemplate title="Incomes">
    <IncomesContainer />
    <ExpenseFormContainer />
  </PageTemplate>
)

IncomesPage.displayName = 'IncomesPage'
