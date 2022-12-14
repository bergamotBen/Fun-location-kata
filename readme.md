### Location, Location, Location ###

This function will be called with an array of objects, each object representing a student on the Northcoders bootcamp. 
## function ([{student:1},{student:2,location:Manchester},{student:3}])

Some of the students have a specified location property which is a string of the office they will be attending during their time on the course, but for some students that property is missing.


Your function should return a *new array*, where all objects that were missing a location have been updated so that they now have a location property with a value of "remote". All other properties should remain as they were.

## output = [[{student:1,location:remote},{student:2,location:Manchester},{student:3,location:remote}]] ##

This function must be a *pure function*, i.e. it should have no side effects, and your test suite should reflect this.

```js
updateRemoteStudents([
  { name: 'Hypatia', age: 31, location: 'leeds' },
  { name: 'Ramanujan', age: 22 },
  { name: 'Tao', age: 47, location: 'manchester' }
]);
```
## should return ##
```js
[
  { name: 'Hypatia', age: 31, location: 'leeds' },
  { name: 'Ramanujan', age: 22, location: 'remote' },
  { name: 'Tao', age: 47, location: 'manchester' }
];
```