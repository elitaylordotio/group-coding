/*
Question:
A leap year (in the Gregorian calendar) occurs:

    In every year that is evenly divisible by 4.
    Unless the year is evenly divisible by 100, in which case it's only a leap year if the year is also evenly divisible by 400.

Some examples:

    1997 was not a leap year as it's not divisible by 4.
    1900 was not a leap year as it's not divisible by 400.
    2000 was a leap year!

Your task is to determine whether a given year is a leap year.

Answer:
Taking my learning from the rainDrop

"Zero is divisible by everything.
When dividing zero by any number, the result is zero, with no remainder.
Thus, by the definition of divisibility, zero is divisible by everything."

but I also learned that the Gregorian calendar does not have a year 0 it starts at 1 AD
therefore I can just again ignore my check for 0 though if I was doing this in a
production environment I would throw an error for 0 and any negative number.
*/

export function leapYear (year: number): boolean {
  if (year % 100 === 0) {
    return !!(year % 400 === 0)
  } else {
    return !!(year % 4 === 0)
  }
}
