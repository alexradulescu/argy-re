import React, { FC, useState, ChangeEvent, FormEvent } from 'react'

import { useCategories } from 'src/hooks'
import { Category } from 'src/interfaces'

const DEFAULT_CATEGORY = { label: '', treshold: '' }

export const CategoryFormContainer: FC = () => {
  const [category, setCategory] = useState<Category>(DEFAULT_CATEGORY)

  const { submitCategory } = useCategories()

  const onChangeCategory = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value
    })
  }

  const clearForm = () => {
    setCategory(DEFAULT_CATEGORY)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submitCategory(category)
    clearForm()
  }

  return (
    <div className="container">
      <form className="card" onSubmit={onSubmit}>
        <div className="card-body">
          <legend className="small text-uppercase">Add Category</legend>

          <div className="d-flex justify-content-between">
            <div className="form-group flex-fill mr-3 mb-2">
              <input
                className="form-control form-control-sm"
                placeholder="Title"
                name="label"
                type="text"
                value={category.label}
                onChange={onChangeCategory}
                required
              />
            </div>

            <div className="form-group flex-fill mb-2">
              <input
                className="form-control form-control-sm"
                placeholder="Max Amount"
                name="treshold"
                type="number"
                value={category.treshold}
                onChange={onChangeCategory}
                required
              />
            </div>
          </div>

          <button className="btn btn-sm btn-block btn-primary" type="submit">
            Add Category
          </button>
        </div>
      </form>
    </div>
  )
}

CategoryFormContainer.displayName = 'CategoryFormContainer'
