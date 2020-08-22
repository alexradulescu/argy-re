import React, { FC } from 'react'

import { CategoriesContainer, CategoryFormContainer } from 'src/components'

import { PageTemplate } from './PageTemplate'

/**
 * 1. Header --> Title + settings, profile
 * 2. All existing categories
 * 3. Plus floating button for expense quick form - redirect to home
 * 4. Footer navigation
 */

export const CategoriesPage: FC = () => (
  <PageTemplate title="Categories">
    <CategoriesContainer />
    <CategoryFormContainer />
  </PageTemplate>
)

CategoriesPage.displayName = 'CategoriesPage'
