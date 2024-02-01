import { reverseString } from './reverseString'

describe('Rain Drop', () => {
  test('stressed to desserts', () => {
    expect('desserts').toEqual(reverseString('stressed'))
  })
  test('strops to sports', () => {
    expect('sports').toEqual(reverseString('strops'))
  })
  test('racecar to racecar', () => {
    expect('racecar').toEqual(reverseString('racecar'))
  })
  test('hello to olleh', () => {
    expect('olleh').toEqual(reverseString('hello'))
  })
  test('Able was I ere I saw Elba to ablE was I ere I saw elbA', () => {
    expect('Able was I ere I saw Elba').toEqual(reverseString('ablE was I ere I saw elbA'))
  })
  test('empty', () => {
    expect('').toEqual(reverseString(''))
  })
})
