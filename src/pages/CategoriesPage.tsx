import React, { FC } from 'react'

import { CategoriesContainer, CategoryFormContainer } from '../components'

import { PageTemplate } from './PageTemplate'

export const CategoriesPage: FC = () => (
  <PageTemplate title="Categories">
    <CategoriesContainer />
    <CategoryFormContainer />
  </PageTemplate>
)

CategoriesPage.displayName = 'CategoriesPage'
