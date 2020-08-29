import React, { FC } from 'react'

import { useOverview, useCategories } from 'src/hooks'

import { CategoryItem } from './CategoryItem'

export const CategoriesContainer: FC = () => {
  const { overview, totalBalance } = useOverview()
  const { deleteCategory } = useCategories()

  return (
    <div className="container flex-fill overflow-auto">
      <div className="d-flex justify-content-between mb-2 bg-facebook px-3 py-2 rounded-lg">
        <p className="m-0 text-light">This month</p>
        <h3 className="lead m-0 font-weight-normal text-white text-monospace">{totalBalance}</h3>
      </div>
      <ul className="list-group">
        {overview.map(({ id, label, treshold, spent }) => (
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
