export interface Expense {
  id: string
  description: string
  amount: string | number
  category: string
  categoryLabel?: string
  date: string
}
