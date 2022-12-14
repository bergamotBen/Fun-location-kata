function updateLocation(arr) {
const output = []
    if  (arr.length === 0) { 
        return [];
    }  

for (let i = 0; i < arr.length; i ++) {
if (arr[i].hasOwnProperty('location')){
    output.push(arr[i])

} else {
    arr[i].location = "remote"
    output.push(arr[i])
}
} 
return output
} 
module.exports = {updateLocation};
