export interface Category {
  label: string
  treshold: number | string
}

export interface ApiCategory extends Category {
  id: string
}
