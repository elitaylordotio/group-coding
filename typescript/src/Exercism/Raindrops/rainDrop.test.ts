import { rainDrop } from './rainDrop'

describe('Rain Drop', () => {
  test('3', () => {
    expect('Pling').toEqual(rainDrop(3))
  })
  test('5', () => {
    expect('Plang').toEqual(rainDrop(5))
  })
  test('7', () => {
    expect('Plong').toEqual(rainDrop(7))
  })
  test('28', () => {
    expect('Plong').toEqual(rainDrop(28))
  })
  test('30', () => {
    expect('PlingPlang').toEqual(rainDrop(30))
  })
  test('34', () => {
    expect('34').toEqual(rainDrop(34))
  })
  test('105', () => {
    expect('PlingPlangPlong').toEqual(rainDrop(105))
  })
  test('1', () => {
    expect('1').toEqual(rainDrop(1))
  })
  test('-1', () => {
    expect('-1').toEqual(rainDrop(-1))
  })
  test('0', () => {
    expect('0').toEqual(rainDrop(0))
  })
})
