import { Stack } from "./minStack";

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

            for(let i = 0; i < lengthOfArray; i++){
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
            const testArray: number[] = [2,2,3,6,1,4,6,9,4,7,8];

            const stack = new Stack(array);

            for(let i = 0; i < testArray.length; i++){
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
});