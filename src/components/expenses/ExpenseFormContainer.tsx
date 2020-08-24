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
    <form onSubmit={onSubmit}>
      <h3>Add Expense</h3>
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
      <div className="form-group">
        <select
          className="custom-select"
          value={expense.category}
          onChange={onChangeExpense}
          required
        >
          {categories.map(({ label, value }: any) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
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
      <button className="btn btn-primary" type="submit">
        Add Expense
      </button>
      <button className="btn btn-outline-secondary" onClick={addIncome}>
        Add Income
      </button>
    </form>
  )
}

ExpenseFormContainer.displayName = 'ExpenseFormContainer'
