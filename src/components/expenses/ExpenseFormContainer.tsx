import React, { FC, useState, FormEvent, ChangeEvent, MouseEvent } from 'react'
import { Input, Heading, Select, Button, Stack } from '@chakra-ui/core'

import { useExpenses, useCategories, useIncomes } from 'src/hooks'

const DEFAULT_EXPENSE = {
  id: '',
  description: '',
  amount: '',
  category: '',
  date: new Date().toISOString().substring(0, 10)
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
      <Stack spacing={'8px'}>
        <Heading size="md">Add Expense</Heading>
        <Input
          id="outlined-basic"
          placeholder="Description"
          name="description"
          type="text"
          value={expense.description}
          onChange={onChangeExpense}
          isRequired
        />
        <Input
          id="outlined-basic"
          placeholder="Amount"
          name="amount"
          type="number"
          value={expense.amount}
          onChange={onChangeExpense}
          isRequired
        />
        <Select
          name="category"
          value={expense.category}
          onChange={onChangeExpense}
          placeholder="Choose Category"
          isRequired
        >
          {categories.map(({ label, value }: any) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
        <Input
          type="date"
          name="date"
          value={expense.date}
          onChange={onChangeExpense}
          placeholder="date"
          isRequired
        />
        <Button type="submit">Add Expense</Button>
        <Button onClick={addIncome}>Add Income</Button>
      </Stack>
    </form>
  )
}

ExpenseFormContainer.displayName = 'ExpenseFormContainer'
