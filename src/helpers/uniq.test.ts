import { uniq } from './uniq'

test('basic test', () => {
  const startArray = [1, 1, 1, 2, 3, 5, 5, 6, 7]
  const expectedArray = [1, 2, 3, 5, 6, 7]
  expect(expectedArray).toEqual(uniq(startArray))
})
