import React, { FC, useState, FormEvent, ChangeEvent, MouseEvent } from 'react'

import { useExpenses, useCategories, useIncomes } from '../hooks'
import { Category } from '../interfaces'

export const ExpenseFormContainer: FC = () => {
  const { submitExpense } = useExpenses()
  const { submitIncome } = useIncomes()
  const { categories } = useCategories()
  const [expense, setExpense] = useState({
    description: '',
    amount: '',
    category: '',
    date: new Date().toISOString().substring(0, 10)
  })

  const onChangeExpense = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value
    })
  }

  const clearForm = () => {
    setExpense({
      description: '',
      amount: '',
      category: '',
      date: new Date().toISOString().substring(0, 10)
    })
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submitExpense({
      ...expense,
      amount: Number(expense.amount),
      id: ''
    })
    clearForm()
  }

  const addIncome = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    submitIncome({
      description: expense.description,
      amount: Number(expense.amount),
      date: expense.date
    })
    clearForm()
  }

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>Add Expense</legend>
        <aside>
          <label>
            <input
              id="outlined-basic"
              placeholder="Description"
              name="description"
              type="text"
              value={expense.description}
              onChange={onChangeExpense}
              required
            />
          </label>
          <label>
            <input
              id="outlined-basic"
              placeholder="Amount"
              name="amount"
              type="number"
              value={expense.amount}
              onChange={onChangeExpense}
              required
            />
          </label>
        </aside>
        <aside>
          <label>
            <select name="category" value={expense.category} onChange={onChangeExpense} placeholder="Category" required>
              <option value="" disabled>
                Choose the Category...
              </option>
              {categories.map(({ label, value }: any) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label>
            <input
              type="date"
              name="date"
              value={expense.date}
              onChange={onChangeExpense}
              placeholder="date"
              required
            />
          </label>
        </aside>
        <aside>
          <button type="submit">Add Expense</button>
          <button onClick={addIncome}>Add Income</button>
        </aside>
      </fieldset>
    </form>
  )
}

ExpenseFormContainer.displayName = 'ExpenseFormContainer'
