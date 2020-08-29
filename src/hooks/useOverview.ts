import { ApiCategory } from 'src/interfaces'

import { useCategories } from './useCategories'
import { useExpenses } from './useExpenses'
import { useIncomes } from './useIncomes'
import { useMemo } from 'react'

export const useOverview = () => {
  const { categories } = useCategories()
  const { expenses } = useExpenses()
  const { incomes } = useIncomes()

  const overview = categories.map((category: ApiCategory) => {
    return {
      ...category,
      spent: expenses
        .filter((expense) => expense.category === category.id)
        .reduce((accumulator, item) => accumulator + Number(item.amount), 0)
    }
  })

  const totalExpenses = useMemo(
    () => expenses.reduce((accumulator, item) => (accumulator -= Number(item.amount)), 0),
    [expenses]
  )
  const totalIncomes = useMemo(
    () => incomes.reduce((accumulator, item) => (accumulator += Number(item.amount)), 0),
    [incomes]
  )

  const totalBalance = useMemo(() => totalExpenses + totalIncomes, [totalExpenses, totalIncomes])

  return { overview, totalBalance, totalExpenses, totalIncomes }
}
