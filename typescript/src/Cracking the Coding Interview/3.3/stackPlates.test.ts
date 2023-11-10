import { SetOfStacks } from './stackPlates'

describe('Stack of plates', () => {
  test('can initialize a stack', () => {
    const plateStacks = new SetOfStacks(2)

    expect(typeof plateStacks).not.toEqual('undefined')
  })
  describe('can push', () => {
    test('multiple values', () => {
      const plateStacks = new SetOfStacks(2)
      const testArray: number[] = []

      const lengthOfArray = Math.round(Math.random() * 20)

      for (let i = 0; i < lengthOfArray; i++) {
        const j = Math.round(Math.random() * 100)
        plateStacks.push(j)
        testArray.push(j)
      }

      expect(plateStacks.length).toEqual(testArray.length)
    })
  })
  describe('can pop', () => {
    test('multiple values', () => {
      const testArray: number[] = [2, 2, 3, 6, 1, 4, 6, 9, 4, 7, 8]

      const plateStacks = new SetOfStacks(2)

      for (let i = 0; i < testArray.length; i++) {
        plateStacks.push(testArray[i])
      }

      for (let i = testArray.length - 1; i >= 0; i--) {
        expect(plateStacks.pop()).toEqual(testArray[i])
      }
    })
    describe('at', () => {
      test('stack 0, index 1', () => {
        const testArray: number[] = [2, 2, 3, 6, 1, 4, 6, 9, 4, 7, 8]

        const plateStacks = new SetOfStacks(3)

        for (let i = 0; i < testArray.length; i++) {
          plateStacks.push(testArray[i])
        }

        testArray.splice(1, 1)
        expect(plateStacks.popAt(0, 1)).toEqual(2)

        for (let i = testArray.length - 1; i >= 0; i--) {
          expect(plateStacks.pop()).toEqual(testArray[i])
        }
      })

      test('stack 3, index 1', () => {
        const testArray: number[] = [2, 2, 3, 6, 1, 4, 6, 9, 4, 7, 8]

        const plateStacks = new SetOfStacks(3)

        for (let i = 0; i < testArray.length; i++) {
          plateStacks.push(testArray[i])
        }

        testArray.splice(10, 1)
        expect(plateStacks.popAt(3, 1)).toEqual(8)

        for (let i = testArray.length - 1; i >= 0; i--) {
          expect(plateStacks.pop()).toEqual(testArray[i])
        }
      })

      test('stack 2, index 0', () => {
        const testArray: number[] = [2, 2, 3, 6, 1, 4, 6, 9, 4, 7, 8]

        const plateStacks = new SetOfStacks(4)

        for (let i = 0; i < testArray.length; i++) {
          plateStacks.push(testArray[i])
        }

        testArray.splice(8, 1)
        expect(plateStacks.popAt(2, 0)).toEqual(4)

        for (let i = testArray.length - 1; i >= 0; i--) {
          expect(plateStacks.pop()).toEqual(testArray[i])
        }
      })

      test('stack 0, index 0', () => {
        const testArray: number[] = [2, 2, 3, 6, 1, 4, 6, 9, 4, 7, 8]

        const plateStacks = new SetOfStacks(4)

        for (let i = 0; i < testArray.length; i++) {
          plateStacks.push(testArray[i])
        }

        testArray.splice(0, 1)
        expect(plateStacks.popAt(0, 0)).toEqual(2)

        for (let i = testArray.length - 1; i >= 0; i--) {
          expect(plateStacks.pop()).toEqual(testArray[i])
        }
      })
    })
  })
})
