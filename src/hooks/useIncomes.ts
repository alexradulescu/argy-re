import { useEffect, useState } from 'react'

import { database } from '../firebase'
import { Income } from '../interfaces'

export const useIncomes = (
  year = new Date().toISOString().substring(0, 4),
  month = new Date().toISOString().substring(5, 7)
) => {
  const [incomes, setIncomes] = useState<Income[]>([])

  useEffect(() => {
    const incomesConnection = database
      .collection('incomes')
      .where('date', '>=', `${year}-${month}-01`)
      .where('date', '<=', `${year}-${month}-31`)
      .onSnapshot((snapshot) => {
        const fetchedIncomes = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data()
        }))
        setIncomes(fetchedIncomes as Income[])
      })
    return () => {
      incomesConnection()
    }
  }, [month, year])

  const submitIncome = async (income: Income) => {
    database.collection('incomes').add(income)
  }

  const deleteIncome = async (incomeId: string) => {
    try {
      await database.collection('incomes').doc(incomeId).delete()
    } catch (error) {
      alert(error)
    }
  }

  return { incomes, submitIncome, deleteIncome }
}
