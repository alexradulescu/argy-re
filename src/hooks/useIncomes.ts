import { useEffect, useState } from 'react'

import { database } from 'src/firebase'
import { Income } from 'src/interfaces'
import { getThisYear, getThisMonth } from 'src/utils'

export const useIncomes = ({ year, month } = { year: getThisYear(), month: getThisMonth() }) => {
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
    delete income.id

    database.collection('incomes').add(income)
  }

  const deleteIncome = async (incomeId: string) => {
    if (window.confirm(`Are you sure you want to delete the income: ${income.description}?`)) {
      try {
        await database.collection('incomes').doc(incomeId).delete()
      } catch (error) {
        alert(error)
      }
    }
  }

  return { incomes, submitIncome, deleteIncome }
}
