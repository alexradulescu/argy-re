import React, { FC, useState, FormEvent, ChangeEvent, MouseEvent } from 'react'

import { useExpenses, useCategories, useIncomes } from 'src/hooks'
import { getToday } from 'src/utils'
import { Expense } from 'src/interfaces'

const DEFAULT_EXPENSE: Expense = {
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
    <div className="container">
      <form className="card" onSubmit={onSubmit}>
        <div className="card-body">
          <legend className="small text-uppercase">Add Expense</legend>
          <div className="form-group mb-2">
            <input
              className="form-control "
              placeholder="Description"
              name="description"
              type="text"
              value={expense.description}
              onChange={onChangeExpense}
              required
            />
          </div>
          <div className="form-group mb-2">
            <input
              className="form-control "
              placeholder="Amount"
              name="amount"
              type="number"
              value={expense.amount}
              onChange={onChangeExpense}
              required
            />
          </div>
          <div className="row">
            <div className="col-6 form-group mb-2">
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
            <div className="col-6 form-group mb-2">
              <input
                className="form-control "
                type="date"
                name="date"
                value={expense.date}
                onChange={onChangeExpense}
                placeholder="date"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <button className="btn btn-sm btn-danger btn-block" type="submit">
                Add Expense
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-sm btn-outline-success btn-block " onClick={addIncome}>
                Add Income
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

ExpenseFormContainer.displayName = 'ExpenseFormContainer'
