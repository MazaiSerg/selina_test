export const addFewDays = (date: Date, days: number) => {
  const dateForModify = new Date(date)
  return new Date(dateForModify.setDate(dateForModify.getDate() + days))
}
