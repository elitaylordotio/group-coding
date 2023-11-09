import { Stack } from "./singleArrayThreeStacks";

describe("Single Array Three Stacks", () => {
    test("can initialize 3 stacks", () => {
        const array: any[] = [];

        const stack1 = new Stack(0, 3, array);
        const stack2 = new Stack(1, 3, array);
        const stack3 = new Stack(2, 3, array);

        expect(stack1.length()).toBe(0);
        expect(stack2.length()).toBe(0);
        expect(stack3.length()).toBe(0);
    });

    describe("can push", () => {
        test("to stack with no offset", () => {
            const array: any[] = [];

            const stack = new Stack(0, 3, array);

            stack.push(1);
            stack.push(2);
            stack.push(3);

            expect(stack.length()).toBe(3);
            expect(stack.peek()).toBe(3);
        });
        test("to stack with offset 1", () => {
            const array: any[] = [];

            const stack = new Stack(1, 3, array);

            stack.push(2);
            stack.push(3);
            stack.push(5);

            expect(stack.length()).toBe(3);
            expect(stack.peek()).toBe(5);
        });
        test("to stack with offset 2", () => {
            const array: any[] = [];

            const stack = new Stack(2, 3, array);

            stack.push(2);
            stack.push(3);
            stack.push(7);

            expect(stack.length()).toBe(3);
            expect(stack.peek()).toBe(7);
        });
        test("to 3 stacks without overwriting", () => {
            const array: any[] = [];

            const stack1 = new Stack(0, 3, array);
            const stack2 = new Stack(1, 3, array);
            const stack3 = new Stack(2, 3, array);

            const arrayOfStacks = [stack1, stack2, stack3];

            const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]

            let j = 0;
            arrayOfStacks.forEach((stack, index) => {
                for (let i = 0; i < 3; i++) {
                    stack.push(testArray[j++]);
                }
            });

            expect(array).toEqual([0, 3, 6, 1, 4, 7, 2, 5, 8]);
            expect(stack1.length()).toBe(3);
            expect(stack2.length()).toBe(3);
            expect(stack3.length()).toBe(3);
            expect(stack1.peek()).toBe(2);
            expect(stack2.peek()).toBe(5);
            expect(stack3.peek()).toBe(8);
        });
        test("to multiple stacks without overwriting", () => {
            const array: any[] = [];

            const arrayOfStacks = [];

            const stackSize = Math.floor(Math.random() * (10 - 1 + 1) + 1);
            const sizeOfStack = Math.floor(Math.random() * (10 - 1 + 1) + 1);

            for (let i = 0; i < stackSize; i++) {
                arrayOfStacks.push(new Stack(i, stackSize, array));
            }

            const testArray = [...Array(sizeOfStack).keys()]

            for (let i = 0; i < sizeOfStack; i++) {
                arrayOfStacks.forEach((stack, index) => {
                    stack.push(testArray[i] + index);
                });
            }

            arrayOfStacks.forEach((stack, index) => {
                expect(stack.length()).toBe(sizeOfStack);
                expect(stack.peek()).toBe(sizeOfStack - 1 + index);
            });
        });
    });

    describe("can pop", () => {
        test("from stack with no offset", () => {
            const array: any[] = [];

            const stack = new Stack(0, 3, array);

            stack.push(1);
            stack.push(2);
            stack.push(3);

            expect(stack.length()).toBe(3);
            expect(stack.pop()).toBe(3);
            expect(stack.length()).toBe(2);
        });
        test("from stack with 1 offset", () => {
            const array: any[] = [];

            const stack = new Stack(1, 3, array);

            stack.push(1);
            stack.push(2);
            stack.push(3);

            expect(stack.length()).toBe(3);
            expect(stack.pop()).toBe(3);
            expect(stack.length()).toBe(2);
        });
        test("from stack with 2 offset", () => {
            const array: any[] = [];

            const stack = new Stack(2, 3, array);

            stack.push(1);
            stack.push(2);
            stack.push(3);

            expect(stack.length()).toBe(3);
            expect(stack.pop()).toBe(3);
            expect(stack.length()).toBe(2);
        });
        test("from 3 stacks without popping from the wrong stack", () => {
            const array: any[] = [];

            const stack1 = new Stack(0, 3, array);
            const stack2 = new Stack(1, 3, array);
            const stack3 = new Stack(2, 3, array);

            const arrayOfStacks = [stack1, stack2, stack3];

            const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]

            let j = 0;
            arrayOfStacks.forEach((stack, index) => {
                for (let i = 0; i < 3; i++) {
                    stack.push(testArray[j++]);
                }
            });

            expect(array).toEqual([0, 3, 6, 1, 4, 7, 2, 5, 8]);
            expect(stack1.length()).toBe(3);
            expect(stack2.length()).toBe(3);
            expect(stack3.length()).toBe(3);
            expect(stack1.pop()).toBe(2);
            expect(stack2.pop()).toBe(5);
            expect(stack3.pop()).toBe(8);
            expect(stack1.length()).toBe(2);
            expect(stack2.length()).toBe(2);
            expect(stack3.length()).toBe(2);
            expect(stack1.peek()).toBe(1);
            expect(stack2.peek()).toBe(4);
            expect(stack3.peek()).toBe(7);
            expect(array).toEqual([0, 3, 6, 1, 4, 7]);
        });
        test("from multiple stacks", () => {
            const array: any[] = [];

            const arrayOfStacks = [];

            const stackSize = Math.floor(Math.random() * (10 - 1 + 1) + 1);
            const sizeOfStack = Math.floor(Math.random() * (10 - 1 + 1) + 1);

            for (let i = 0; i < stackSize; i++) {
                arrayOfStacks.push(new Stack(i, stackSize, array));
            }

            const testArray = [...Array(sizeOfStack).keys()]

            for (let i = 0; i < sizeOfStack; i++) {
                arrayOfStacks.forEach((stack, index) => {
                    stack.push(testArray[i] + index);
                });
            }

            arrayOfStacks.forEach((stack, index) => {
                expect(stack.length()).toBe(sizeOfStack);
                expect(stack.peek()).toBe(sizeOfStack - 1 + index);
            });
        });
    });

});


