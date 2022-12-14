const {updateLocation} = require("../index");

/* the function will:
return an array when passed an array
return objects without a location to a new array
if it does not, add 'location : remote'
no other properties are changed
not mutate the original array */

describe("updateLocation", () => {
    test("returns an empty array when passed an empty array", () =>{
        expect(updateLocation([])).toEqual([])
    })
    test("adds 'location : remote' to students without a location", () => {
        const actual = updateLocation([
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location : 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' } ])

        const expected = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location : 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }]
            
        expect(actual).toEqual(expected)
    })
    test("returns all students with a location property", () => {
        const actual = updateLocation([
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location : 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' } ])

        const expected = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location : 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }]
            
        expect(actual).toEqual(expected)
    })
    test("the original array remains unchanged", () => {
        const input = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location : 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' } ]

        updateLocation(input);
        expect(input).toEqual([
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location : 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' } ])
    })
})