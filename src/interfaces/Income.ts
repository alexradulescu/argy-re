export interface Income {
  description: string
  amount: string | number
  date: string
}

export interface ApiIncome extends Income {
  id: string
}
