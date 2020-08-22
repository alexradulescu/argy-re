export const getToday = (): string => new Date().toISOString().substring(0, 10)

export const getThisYearMonth = (): string => new Date().toISOString().substring(0, 7)

export const getThisYear = (): string => new Date().toISOString().substring(0, 4)

export const getThisMonth = (): string => new Date().toISOString().substring(5, 7)

export const getSeparateMonthYear = (date: string) => {
  if (date.length !== 7) return

  const [year, month] = date.split('-')
  return {
    year,
    month
  }
}
