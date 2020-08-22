import React, { FC } from 'react'

import { CategoriesContainer, CategoryFormContainer } from 'src/components'

import { PageTemplate } from './PageTemplate'

/**
 * 1. Header --> Title + settings, profile
 * 2. All existing categories
 * 3. Plus floating button for expense quick modal
 * 4. Footer
 */

export const CategoriesPage: FC = () => (
  <PageTemplate title="Categories">
    <CategoriesContainer />
    <CategoryFormContainer />
  </PageTemplate>
)

CategoriesPage.displayName = 'CategoriesPage'
