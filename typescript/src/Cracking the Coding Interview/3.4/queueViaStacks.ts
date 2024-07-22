/* Question: Implement a MyQueue class which implements a queue using two stacks. */
// 3.4 Queue via Stacks: implement a MyQueue class which implements a queue using two stacks

class MyQueue<T> {
  private readonly stack1: T[]
  private readonly stack2: T[]

  constructor () {
    this.stack1 = []
    this.stack2 = []
  }

  enqueue (item: T): void {
    this.stack1.push(item)
  }

  dequeue (): T | undefined {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop() as T)
      }
    }
    return this.stack2.pop()
  }
}
