# object-tie
  [![Build Status](https://travis-ci.org/chemdrew/object-tie.svg?branch=master)](https://travis-ci.org/chemdrew/object-tie)
  [![Coverage Status](https://coveralls.io/repos/chemdrew/object-tie/badge.svg?branch=master)](https://coveralls.io/r/chemdrew/object-tie?branch=master)

## Usage

### Installation

``` shell
$ npm install object-tie
```

### Purpose

This module was created as a way to link an object to a file and automatically update that file anytime the object is changed or modified so that you will never lose your data. This works great for an object that handles dynamic data that is continually changing and you wish to keep the file up to date through the process of your program.

### Functionality and Examples

When using this to save an object to a file it will automatically save to `saved_object.json` in the current working directory. This functionality leverages the use of `Object.defineProperty` employing getters and setters, leaving your object alone but tied to the file on any change. One adverse effect of this is when you print the object using `console.log( obj )` it will return the values as `[Getter/Setter]` and to see the actual object as you would like just use `console.log( JSON.stringify( obj, null, 4 ) )`.

The following examples are only showing an object with depth of one, but any depth object behaves similarly, with all keys bound to the file.

Adding object-tie to a file

```javascript
// /yourFile.js
var object_tie = require('object-tie');
```

tying and object to the file

```javascript
// /yourFile.js
var object_tie = require('object-tie');

var greetings = {
    english: 'hello',
    spanish: 'hola',
    chinese: 'ni hao'
};

object_tie.newLink( greetings );

```

the object `greetings` is now linked to a new file named `saved_object.json` in the current working directory. By changing any of the greetings it will update the file to display the new greeting.

So by running the line `greetings.english = 'hey'` the object in the file and the object will look like:

```javascript
// /yourFile.js

console.log( JSON.stringify( greetings, null, 4 );
// {
//     english: 'hey',
//     spanish: 'hola',
//     chinese: 'ni hao'
// }
```

and

```json
// /saved_object.json
greetings = {
    english: 'hey',
    spanish: 'hola',
    chinese: 'ni hao'
}
```

Now what if you want to add a key to the object? Unfortunately I have not figured out a way to do this with JavaScript native style but there is a function for that

```javascript
// /yourFile.js

object_tie.addKey( greetings, { korean: 'annyeonghaseyo' } );

console.log( JSON.stringify( greetings, null, 4 );
// {
//     english: 'hey',
//     spanish: 'hola',
//     chinese: 'ni hao',
//     korean: 'annyeonghaseyo'
// }
```

On a future release I hope to not require this method, and on a sooner release I hope to add this as a prototype method to the object so that it can be called as `obj.addKey( keysToBeAdded )`.

This will now update the file to the addition made and will also allow the same functionality for `korean` as the other keys in the object have, where the file will be updated on any change made in standard JavaScript practice.
When adding a key like this, you can also add multi-level objects and each key/value of that object will be linked to the file.

Now let's say you want to delete a key, unfortunately, it's the same scenario as addKey, and my plans to change it are the same as they are with addKey. But for now, this is how it's done

```javascript
// /yourFile.js

object_tie.deleteKey( greetings, 'english' );

console.log( JSON.stringify( greetings, null, 4 );
// {
//     spanish: 'hola',
//     chinese: 'ni hao',
//     korean: 'annyeonghaseyo'
// }
```

And the file will now be updated to match this.

Now let's pretend you want to stop watching this object and watch a new, already existing object

```javascript
// /yourFile.js

object_tie.unlink( greetings );

greetings.english = 'hi!';
// this change is made to greetings, but the file will not have recorded it

var newGreetings = object_tie.retrieve( 'filepath/my_greetings.json' );
console.log( JSON.stringify( newGreetings, null, 4 );
// {
//     english: 'how are you?'
//     spanish: 'como estas?',
//     chinese: 'ni hao ma?'
// }
```

This object now has all the same functionality as before but instead of being updated to `saved_object.json` it will be updated in whatever the supplied file was.

## What to expect next

New features currently being worked on

* optimization
* asynchronous ability
* ability to name the file you are saving to
* addKey and deleteKey added onto the linked object as prototype methods

Features for the more distant future

* removal of addKey/deleteKey methods

## Contact Me

* Email: [chemdrew1@gmail.com](mailto:chemdrew1@gmail.com?Subject=Hi!%20I%20saw%20your%20npm%20module!)
* LinkedIn: [Andrew Pratt](http://linkedin.com/in/chemdrew)
* [chemdrew.com](http://chemdrew.com)