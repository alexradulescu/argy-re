import { useEffect, useState } from 'react'

import { database } from '../firebase'
import { Expense } from '../interfaces'

export const useExpenses = (
  year = new Date().toISOString().substring(0, 4),
  month = new Date().toISOString().substring(5, 7)
) => {
  const [expenses, setExpenses] = useState<Expense[]>([])

  useEffect(() => {
    const expensesConnection = database
      .collection('expenses')
      .where('date', '>=', `${year}-${month}-01`)
      .where('date', '<=', `${year}-${month}-31`)
      .onSnapshot((snapshot) => {
        const fetchedExpenses = snapshot.docs.map(
          (document) =>
            ({
              id: document.id,
              ...document.data()
            } as Expense)
        )
        setExpenses(fetchedExpenses)
      })
    return () => {
      expensesConnection()
    }
  }, [month, year])

  const submitExpense = async (expense: Expense) => {
    await database.collection('expenses').add(expense)
  }

  const deleteExpense = async (expenseId: string) => {
    try {
      await database.collection('expenses').doc(expenseId).delete()
    } catch (error) {
      alert(error)
    }
  }

  return { expenses, submitExpense, deleteExpense }
}
