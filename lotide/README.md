# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lucasw4/lotide`

**Require it:**

`const _ = require('@lucasw4/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `middle(array)`: returns the middle value or values of an array
* `map(array, callBackFunction)`: returns a new array with the callbackfunction ran on every element of the first array
* `letterPositions(sentence)`: returns an object with the positions of every letter in a word or sentence
* `index.js`: exports every function
* `head(array)`: returns the 0th index of an array
* `flatten(array)`: returns a flattened array, from an array with nested arrays 
* `findKeyByValue(object, value)`: finds the key from a value in an object
* `findKey(object, callBackFunction`: finds the first key in an object where the parameters if the callbackfunction returns true
* `eqObjects(object1, object2)`: returns true or false, depending on if 2 objects are equal or not
* `eqArrays(array1, array2)`: returns true or false, depending on if 2 arrays are equal or not
* `countOnly(array, items)`: takes an array and an array of items and returns a count of each item in the items array that is in the array
* `countLetters(sentence)`: returns an object with a count of each letter in a sentence
* `assertObjectsEqual(actual, expected)`: logs to the console if the actual object === the expected object
* `assertEqual(actual, expected)`: returns true if actual result === expected result, and false for the inverse
* `assertArraysEqual(actual, expected)`: returns true if actual array === expected array, and false for the inverse
