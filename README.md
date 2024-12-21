# MongoDB $inc operator error with string value

This repository demonstrates a common error when using the `$inc` operator in MongoDB updates.  The `$inc` operator is designed to increment numeric fields.  Attempting to increment a field with a string value will result in an error.

## Bug
The `bug.js` file contains the incorrect usage of the `$inc` operator, leading to a MongoDB error.

## Solution
The `bugSolution.js` file demonstrates the correct usage of the `$inc` operator, ensuring that only numeric values are used for incrementing.