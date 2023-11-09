//Question: Three in One: Describe how you could use a single array to implement three stacks.

/*Answer: I have lots of ways to complete this. I think this question was developed more for C as
I remember doing something similar in College but these days with garbage collection and dynamic arrays
I wouldn't bother trying to preserve memory like this. Memory is cheap. */


/*
Solution 1: Have a preallocated array of some size, Initialize it similar to something in C so say
a array of length 75 filling all 75 with 0's. Then use an offset to keep track of each stack. 
Stack1: 0-24
Stack2: 25-49
Stack3: 50-74

Problems: This is no longer dynamic ruining the entire point of having dynamic arrays in the first place.
It is a waste of initial memory, and I would only do it when I know for sure that I will only have a max
25 items for each Stack.
*/

/*Solution 2: Have a an initialized array of []. Each stack uses a offset of 3 when plugging in data.
So stack 1 would be 0,3,6,9,12,15,18,21,24
Stack 2 would be 1,4,7,10,13,16,19,22,25
Stack 3 would be 2,5,8,11,14,17,20,23,26

Pushing to each stack will fill the undefined amounts, and then push the correct value

Problem: I can only have 3 stacks. If I want to add a 4th stack I would have to reinitialize the array.
*/
export class Stack {
    private offset: number;
    private stackCount: number;
    private array: (number | undefined)[];
    constructor(offset: number, stackCount: number, array: (number | undefined)[]) {
        this.offset = offset;
        this.stackCount = stackCount;
        this.array = array;
    }

    push(value: number): void {
        this.array[this.offset] = value;
        this.offset += this.stackCount;
    }

    pop(): number | undefined {
        this.offset -= this.stackCount;
        const value = this.array[this.offset];
        this.array[this.offset] = undefined;
        return value;
    }

    peek(): number | undefined {
        return this.array[this.offset - this.stackCount];
    }

    length(): number {
        return Math.floor(this.offset / this.stackCount);
    }
}

/*
Fast Solution: Add 3 arrays to each 0,1,2 of the array respectably [[], [], []]

*/
