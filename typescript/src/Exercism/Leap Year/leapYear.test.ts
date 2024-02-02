import { leapYear } from './leapYear'

describe('Leap Year', () => {
  test('1997', () => {
    expect(false).toEqual(leapYear(1997))
  })
  test('1900', () => {
    expect(false).toEqual(leapYear(1900))
  })
  test('2000', () => {
    expect(true).toEqual(leapYear(2000))
  })
  test('2004', () => {
    expect(true).toEqual(leapYear(2004))
  })
  test('2008', () => {
    expect(true).toEqual(leapYear(2008))
  })
  test('2012', () => {
    expect(true).toEqual(leapYear(2012))
  })
  test('4', () => {
    expect(true).toEqual(leapYear(4))
  })
})
