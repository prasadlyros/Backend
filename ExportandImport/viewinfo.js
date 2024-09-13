let {username, printDetails,userDetails} = require("./userInfo")

console.log(username)
console.log(userDetails)

//if we did not return anything in fun then if we use console we wil get op and undefined 
//but we return something and use console we will not get undefined only op will come 
//if we does not return anything and call only fun without using console we will get op
console.log(printDetails())