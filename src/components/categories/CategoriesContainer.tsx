import React, { FC } from 'react'

import { useOverview, useCategories } from 'src/hooks'

import { CategoryItem } from './CategoryItem'

export const CategoriesContainer: FC = () => {
  const { overview, totalBalance } = useOverview()
  const { deleteCategory } = useCategories()

  return (
    <div className="container flex-fill overflow-auto">
      <div className="d-flex justify-content-between">
        <h3>Overview</h3>
        <h3>{totalBalance}</h3>
      </div>
      <ul className="list-group">
        {overview.map(({ id, label, treshold, spent }: any) => (
          <CategoryItem
            key={id}
            id={id}
            label={label}
            spent={spent}
            treshold={treshold}
            deleteCategory={deleteCategory}
          />
        ))}
      </ul>
    </div>
  )
}

CategoriesContainer.displayName = 'CategoriesContainer'
