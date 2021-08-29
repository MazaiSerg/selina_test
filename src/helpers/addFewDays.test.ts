import { addFewDays } from './addFewDays'

const startDate = new Date(2021, 0, 10)

test('start date doesnt modify', () => {
  addFewDays(startDate, 2)
  expect(startDate).toEqual(startDate)
})

test('month doesnt change', () => {
  const expectedDate = new Date(2021, 0, 12)
  expect(expectedDate).toEqual(addFewDays(startDate, 2))
})

test('month change ', () => {
  const expectedDate = new Date(2021, 1, 10)
  expect(expectedDate).toEqual(addFewDays(startDate, 31))
})
