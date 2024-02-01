/*
Question:
Instructions

Raindrops is a slightly more complex version of the FizzBuzz challenge, a classic interview question.

Your task is to convert a number into its corresponding raindrop sounds.

If a given number:

    is divisible by 3, add "Pling" to the result.
    is divisible by 5, add "Plang" to the result.
    is divisible by 7, add "Plong" to the result.
    is not divisible by 3, 5, or 7, the result should be the number as a string.

Examples

    28 is divisible by 7, but not 3 or 5, so the result would be "Plong".
    30 is divisible by 3 and 5, but not 7, so the result would be "PlingPlang".
    34 is not divisible by 3, 5, or 7, so the result would be "34".

*/

/*
Answer:
Super simple
Thoughts to make it faster? Thought check if divisible by 7 and then using the remainder check if divisible by 5 and then 3
That wouldn't get it in the right order because it has a very specific order

Anyways decided to go with the quick and easy solution
but added my divisible number to an array so I am not doing multiple if statements

Multiple if statements are annoying plus in a function like this I would pull out divisible into a init
variable in a class and then use it in the function

With my testing I have realized that I need to add a check for 0.

Also we could make this a reduce function.
*/

export function rainDrop (num: number): string {
  if (num === 0) return '0'

  let result = ''
  const divisible = [
    { divisor: 3, sound: 'Pling' },
    { divisor: 5, sound: 'Plang' },
    { divisor: 7, sound: 'Plong' }
  ]

  divisible.forEach((divsible) => {
    result += num % divsible.divisor === 0 ? divsible.sound : ''
  })

  return result === '' ? num.toString() : result
}
