export interface Expense {
  description: string
  amount: string | number
  category: string
  categoryLabel?: string
  date: string
}

export interface ApiExpense extends Expense {
  id: string
}
