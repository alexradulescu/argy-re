import { useEffect, useState } from 'react'

import { database } from 'src/firebase'
import { Expense, Category } from 'src/interfaces'

import { useCategories } from './useCategories'
import { getThisYear, getThisMonth } from 'src/utils'

export const useExpenses = ({ year, month } = { year: getThisYear(), month: getThisMonth() }) => {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const { categories } = useCategories()

  useEffect(() => {
    const expensesConnection = database
      .collection('expenses')
      .where('date', '>=', `${year}-${month}-01`)
      .where('date', '<=', `${year}-${month}-31`)
      .onSnapshot((snapshot) => {
        const fetchedExpenses = snapshot.docs
          .map(
            (document) =>
              ({
                id: document.id,
                ...document.data()
              } as Expense)
          )
          .map((expense) => ({
            ...expense,
            categoryLabel:
              categories.find((item: Category) => item.id === expense.category)?.label ||
              expense.category
          }))
        setExpenses(fetchedExpenses)
      })
    return () => {
      expensesConnection()
    }
  }, [month, year, categories])

  const submitExpense = async (expense: Expense) => {
    delete expense.id

    await database.collection('expenses').add(expense)
  }

  const deleteExpense = async (expenseId: string) => {
    try {
      await database.collection('expenses').doc(expenseId).delete()
    } catch (error) {
      alert(error)
    }
  }

  console.log(expenses)

  return { expenses, submitExpense, deleteExpense }
}
