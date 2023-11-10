/*
Question:
How would you design a stack which, in addition to push and pop, has a function min that returns the minimum element?
push, pop, and min should all operate in 0(1) time?
*/

/*
Answer:
Create a class that has a a min array in addition to the storage array
*/

export class Stack {
  private readonly array: number[]
  private readonly minArray: number[]

  constructor (array: number[]) {
    this.array = array
    this.minArray = []
  }

  push (value: number): void {
    if (this.minArray.length === 0) {
      this.minArray.push(value)
    } else if (this.minArray[this.minArray.length - 1] >= value) {
      this.minArray.push(value)
    }

    this.array.push(value)
  }

  pop (): number | undefined {
    if (this.array.length === 0) {
      throw new Error('Array is empty')
    }

    if (this.array[this.array.length - 1] === this.minArray[this.minArray.length - 1]) {
      this.minArray.pop()
    }

    return this.array.pop()
  }

  min (): number {
    if (this.minArray.length === 0) {
      throw new Error('Array is empty')
    }
    return this.minArray[this.minArray.length - 1]
  }
}
