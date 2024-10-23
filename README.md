# Odin Calculator

Final exercise for the project [Calculator from Odin](https://www.theodinproject.com/lessons/foundations-calculator#project-solution) made to combine everything we learned in the [Foundations](https://www.theodinproject.com/paths/foundations/courses/foundations) course.

## Assigment

1. Create a calculator with functions for all of the basic math operators like add, subtract, multiply, divide and testing them in the browser's console.
2. A calculator operation will consist of a number, and operator and another number. Create a variable for the first number, the operator, and the secondo number. These variables will be use to update the display later.
3. Create a new function ``operate`` that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
4. Create a basic HTML calculator with buttons for each digit, each of the above functions and an "Equals" key. There should also be a display for the calculator and add a clear button.
5. Create a function that populate the display when you click the number buttons. Store the "display value" in a variable somewhere for use later.
6. Store the first number and the second number that are input into the calculator, utilize the operator that the user selects, and the ``operate()`` on the two numbers when the user presses the "=" key. When ``operate()`` has been called update the display with the "solution" to the operation.
7. The calculator should not evaluate more than a single pair of numbers at a time.
8. Round answers with long decimals so that they don't overflow the screen.
9. Make sure the user is really starting fresh after pressing "clear".
10. Display a snarky error message if the user tries to divide by 0.

## Extra credit

- Users can get floating point numbers if they do the math required to get one, add a ``.`` button and let users input decimals make sure you don't let them type more that one though.
- Make it look nice!
- Add a "backspace" button, so the user can undo if they click the wrong number.
- Add keyboard support.
