export function pickRandomItems<T>(array: T[], length = 1): T[] {
  if (length >= array.length) return array
  if (length <= 0) return [] as T[]

  const result = [] as T[]
  for (let i = 0; i < length; i++) {
    // Quick decision. It's possible to pick the same element few times
    result.push(array[getRandomIndex(array.length)])
  }
  return result
}

function getRandomIndex(maxLength: number) {
  return Math.floor(Math.random() * maxLength)
}
