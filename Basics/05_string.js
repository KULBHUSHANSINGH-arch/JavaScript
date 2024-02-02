const name = "kulbhushan"
const repoCount = 50

// console.log(name + repoCount + "value")

// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)


const gameName = new String('hiteshh')

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toLocaleUpperCase())


// console.log(gameName.charAt(4))
// console.log(gameName.indexOf('h'))

// ################# divide in substrings ########################
const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-8, 3)
// console.log(anotherString)



// **************************************** --------  Trim Method ------------ *****************
// trim()

const newStringOne = "      hitesh          "

// console.log(newStringOne)
// console.log(newStringOne.trim())


// **************************************** -------- Replace  Method ------------ *****************

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20' , '--'))
// ----------- check the value in tha variable  ((((((--------- true -------))))))
// console.log(url.includes('hitesh'))


// ----------- check the value in tha variable          ((((((--------- false -------))))))
// console.log(url.includes('saurabh'))


console.log(gameName.split('-'))