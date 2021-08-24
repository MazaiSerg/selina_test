import { pickRandomItems } from './pickRandomItems'

const testArray = [1, 2, 3, 4, 5]

test('test length picked array', () => {
  expect(1).toEqual(pickRandomItems(testArray).length)
})

test('test length picked array with length attribute', () => {
  const length = 3
  expect(length).toEqual(pickRandomItems(testArray, length).length)
})

test('test length picked array with to big length attribute', () => {
  const length = 100000
  expect(testArray.length).toEqual(pickRandomItems(testArray, length).length)
})
