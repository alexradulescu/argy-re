export interface Category {
  label: string
  value: string
  treshold: number | string
}

export interface Expense {
  id: string
  description: string
  amount: string | number
  category: string
  date: string
}

export interface Income {
  id?: string
  description: string
  amount: string | number
  date: string
}
