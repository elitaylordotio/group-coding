import { Stack } from "./minStack";

function popMultiple(stack: Stack, popAmount: number) {
    for (let i = 0; i < popAmount; i++) {
        stack.pop();
    }
}

describe("Min Stack", () => {
    test("can initialize a stack", () => {
        const array: number[] = [];

        const stack = new Stack(array);

        expect(typeof stack).not.toEqual("undefined")
    });
    describe("can push", () => {
        test("multiple values", () => {
            const array: number[] = [];
            const testArray: number[] = [];

            const stack = new Stack(array);

            let lengthOfArray = Math.round(Math.random() * 20)

            for (let i = 0; i < lengthOfArray; i++) {
                let j = Math.round(Math.random() * 100)
                stack.push(j);
                testArray.push(j);
            }

            expect(array).toEqual(testArray);
        });
    });
    describe("can pop", () => {
        test("multiple values", () => {
            const array: number[] = [];
            const testArray: number[] = [2, 2, 3, 6, 1, 4, 6, 9, 4, 7, 8];

            const stack = new Stack(array);

            for (let i = 0; i < testArray.length; i++) {
                stack.push(testArray[i]);
            }

            expect(array).toEqual(testArray);
            expect(stack.pop()).toEqual(8);
            expect(array).toEqual(testArray.slice(0, -1))
            expect(stack.pop()).toEqual(7);
            expect(array).toEqual(testArray.slice(0, -2))
            expect(stack.pop()).toEqual(4);
            expect(array).toEqual(testArray.slice(0, -3))
        });
    });
    describe("can get min value", () => {
        test("multiple values", () => {
            const array: number[] = [];
            const testArray: number[] = [2, 2, 3, 6, 1, 4, 6, 9, 1, 7, 8];

            const stack = new Stack(array);

            for (let i = 0; i < testArray.length; i++) {
                stack.push(testArray[i]);
            }

            expect(array).toEqual(testArray);
            expect(stack.min()).toEqual(1);

            popMultiple(stack, 3);
            expect(stack.min()).toEqual(1);
            expect(array).toEqual(testArray.slice(0, -3));

            popMultiple(stack, 3);
            expect(stack.min()).toEqual(1);
            expect(array).toEqual(testArray.slice(0, -6));

            popMultiple(stack, 1);
            expect(stack.min()).toEqual(2);
            expect(array).toEqual(testArray.slice(0, -7));

            popMultiple(stack, 3);
            expect(stack.min()).toEqual(2);

            popMultiple(stack, 1);
            expect(array.length).toEqual(0);
        });
        test("after adding a value", () => {
            const array: number[] = [];
            const testArray: number[] = [5, 5, 3, 6, 11, 4, 6, 9, 15, 7, 8];

            const stack = new Stack(array);

            for (let i = 0; i < testArray.length; i++) {
                stack.push(testArray[i]);
            }

            expect(stack.pop()).toEqual(8);
            expect(stack.min()).toEqual(3);
            stack.push(2);
            expect(stack.min()).toEqual(2);
        });
    });
});