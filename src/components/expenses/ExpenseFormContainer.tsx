import React, { FC, useState, FormEvent, ChangeEvent, MouseEvent } from 'react'

import { useExpenses, useCategories, useIncomes } from 'src/hooks'
import { getToday } from 'src/utils'

const DEFAULT_EXPENSE = {
  id: '',
  description: '',
  amount: '',
  category: '',
  date: getToday()
}

export const ExpenseFormContainer: FC = () => {
  const { submitExpense } = useExpenses()
  const { submitIncome } = useIncomes()
  const { categories } = useCategories()
  const [expense, setExpense] = useState(DEFAULT_EXPENSE)

  const onChangeExpense = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value
    })
  }

  const clearForm = () => {
    setExpense(DEFAULT_EXPENSE)
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await submitExpense({
      ...expense,
      amount: Number(expense.amount)
    })
    clearForm()
  }

  const addIncome = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    await submitIncome({
      ...expense,
      amount: Number(expense.amount)
    })
    clearForm()
  }

  return (
    <div className="bg-light pb-2 pt-2">
      <form className="container" onSubmit={onSubmit}>
        <legend className="lead">Add Expense</legend>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Description"
            name="description"
            type="text"
            value={expense.description}
            onChange={onChangeExpense}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Amount"
            name="amount"
            type="number"
            value={expense.amount}
            onChange={onChangeExpense}
            required
          />
        </div>
        <div className="d-flex justify-content-between">
          <div className="form-group flex-fill mr-3">
            <select
              className="custom-select"
              name="category"
              value={expense.category}
              onChange={onChangeExpense}
              required
            >
              <option value="">Choose Category...</option>
              {categories.map(({ label, id }: any) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group flex-fill">
            <input
              className="form-control"
              type="date"
              name="date"
              value={expense.date}
              onChange={onChangeExpense}
              placeholder="date"
              required
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-danger d-block flex-fill mr-3" type="submit">
            Add Expense
          </button>
          <button className="btn btn-outline-success d-block flex-fill" onClick={addIncome}>
            Add Income
          </button>
        </div>
      </form>
    </div>
  )
}

ExpenseFormContainer.displayName = 'ExpenseFormContainer'
