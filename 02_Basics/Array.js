// array
const myArr = [0, 1,2,3,4, 5,6,7,8,9]
const myHeros = ["Doremon", "Giyan" , "Shaktiman"]
const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[1])
// ********************************Array Methods 

// myArr.push(6)
// myArr.push(25)
// myArr.pop()
// myArr.unshift(89)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.includes(91));
const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// ******************* Slice , splice*****************
console.log("A", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,3)
console.log("c", myArr)
console.log(myn2) ;

