import React, { FC } from 'react'

import { PageHeader, PageFooter } from '../shared-components'

import { CategoriesContainer } from './CategoriesContainer'
import { CategoryFormContainer } from './CategoryFormContainer'

export const CategoriesPage: FC = () => {
  return (
    <main>
      <PageHeader title="Categories" />
      <br />
      <CategoriesContainer />
      <br />
      <CategoryFormContainer />
      <br />
      <PageFooter />
    </main>
  )
}

CategoriesPage.displayName = 'CategoriesPage'
