/*
Question:
Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life,
we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks
that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds
capacity. SetOfStacks.push() and setOfStacks.pop() should behave identically to a single stack (that is .pop() should return
the same values as it would if there were just a single stack). Follow up: Implement function popAt(int, index) which performs
a pop operation on a specific sub-stack
*/

/*
Comment:
The additional Follow up question changes the way I would design this. Normally I would not have cared what size the stacks are
in the middle, because I would just expect them to be the max stack size. With the popAt() function I am either going to have to
reshuffle all the stacks of plates, or I am not going to track stack sizes at all and if a stack has a couple less then the last
stack I wont fill it.

Or I could when I push I could add it to the closest stack that hasn't reached max stack size. If I do that though I ruin the fact
push and pop should work just like a normal stack.

I will have to reshuffle plates on stacks each time I do a popAt() it is the only way to keep the same functionality throughout

Later note: This is some recursive BS. Where you pop the specific one and then you have to call popAt() for each next
stack index 0 until you reach the last stack.

/*
Comment: You could create a plate object but I am just going to use numbers to simulate plates.
It could be changed out later.

class Plate {
    private color: "string";
    private name: "string";
    private material: "string";
}

*/

class Stack {
  readonly array: number[]
  public length: number

  constructor () {
    this.array = []
    this.length = 0
  }

  push (value: number): void {
    this.array.push(value)
    this.length++
  }

  pop (): number | undefined {
    if (this.length <= 0) {
      return undefined
    }
    this.length--
    return this.array.pop()
  }
}

export class SetOfStacks {
  private readonly plateStacks: Stack[]
  private readonly maxStackSize: number
  public length: number

  constructor (maxStackSize: number) {
    this.plateStacks = [new Stack()]
    this.maxStackSize = maxStackSize
    this.length = 0
  }

  push (value: number): void {
    if (
      this.plateStacks[this.plateStacks.length - 1].length === this.maxStackSize
    ) {
      const newStack = new Stack()
      newStack.push(value)
      this.plateStacks.push(newStack)
    } else {
      this.plateStacks[this.plateStacks.length - 1].push(value)
    }
    this.length++
  }

  pop (): number | undefined {
    if (this.length <= 0) {
      return undefined
    }

    const popValue = this.plateStacks[this.plateStacks.length - 1].pop()
    this.length--

    if (this.plateStacks[this.plateStacks.length - 1].length === 0) {
      this.plateStacks.pop()
    }
    return popValue
  }

  popAt (stackIndex: number, index: number): number | undefined {
    const holdingStack: Stack = new Stack()
    if (this.length <= 0 || stackIndex > this.length) {
      return undefined
    }

    const stack = this.plateStacks[stackIndex]

    if (typeof stack === 'undefined' || index > stack.length) {
      return undefined
    }

    while (stack.length - 1 !== index) {
      const i = stack.pop()
      if (i != null) {
        holdingStack.push(i)
      }
    }

    const popValue = stack.pop()

    while (holdingStack.length !== 0) {
      const j = holdingStack.pop()
      if (j != null) {
        stack.push(j)
      }
    }

    const value = this.popAt(stackIndex + 1, 0)
    if (value != null) {
      stack.push(value)
    }

    return popValue
  }
}
