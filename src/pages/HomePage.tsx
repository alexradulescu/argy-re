import React, { FC } from 'react'

import { ExpenseFormContainer } from 'src/components'

import { PageTemplate } from './PageTemplate'

/**
 * 1. Header --> Title + settings, profile
 * 2. Active Categories, scrollable
 * 3. Income & expense form
 * 4. Footer navigation
 */
export const HomePage: FC = () => (
  <PageTemplate title="Home">
    {/* <OverviewContainer /> */}
    <ExpenseFormContainer />
  </PageTemplate>
)

HomePage.displayName = 'HomePage'
