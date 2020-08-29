import { useEffect, useState } from 'react'

import { database } from 'src/firebase'
import { Expense, ApiExpense, ApiCategory } from 'src/interfaces'
import { getThisYear, getThisMonth } from 'src/utils'

import { useCategories } from './useCategories'

export const useExpenses = ({ year, month } = { year: getThisYear(), month: getThisMonth() }) => {
  const [expenses, setExpenses] = useState<ApiExpense[]>([])
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
              } as ApiExpense)
          )
          .map((expense) => ({
            ...expense,
            categoryLabel:
              categories.find((category: ApiCategory) => category.id === expense.category)?.label ||
              expense.category
          }))
        setExpenses(fetchedExpenses as ApiExpense[])
      })
    return () => {
      expensesConnection()
    }
  }, [month, year, categories])

  const submitExpense = async (expense: Expense) => {
    await database.collection('expenses').add(expense)
  }

  const deleteExpense = async (expenseId: string) => {
    if (window.confirm(`Are you sure you want to delete the expense: ${expenseId}?`)) {
      try {
        await database.collection('expenses').doc(expenseId).delete()
      } catch (error) {
        alert(error)
      }
    }
  }

  return { expenses, submitExpense, deleteExpense }
}
