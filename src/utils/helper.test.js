import { describe, expect, it } from 'vitest'
import { formatPrice, trimInput } from './helper'

describe('formatPrice', () => {
  it.each([
    [49.99, '$49.99'],
    [19.5, '$19.50'],
    [189, '$189.00'],
    [0, '$0.00'],
    [1234.5, '$1,234.50'],
  ])('formats %s as %s', (value, expected) => {
    expect(formatPrice(value)).toBe(expected)
  })
})

describe('trimInput', () => {
  it.each([
    ['', ''],
    ['   ', ''],
    ['  Ankur ', 'Ankur'],
    ['Ankur Bag', 'Ankur Bag'],
    ['  Ankur   Bag ', 'Ankur Bag'],
  ])('turns %j into %j', (value, expected) => {
    expect(trimInput(value)).toBe(expected)
  })
})
