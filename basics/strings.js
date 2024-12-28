const name="anuj"
const val=50
// console.log(name+val)...is tarah nahi karna hota ye outdated version hai ..iski jagah backtick ka use karna hota hai
console.log(`hello my name is ${name}`)
const another=new String('anuj')//ye ek aur tareka hai string ko declare krne ke lekin ye ek object hai aur efficient nahi hota ye
// console.log(another[0])
// console.log(typeof another)
// console.log(typeof name)
// console.log(another.toUpperCase())
// console.log(name)


console.log(another.charAt(2))
console.log(another.indexOf('n'))

//slice and substring bhi dekhn hai

console.log(another.slice(-2,3))
console.log(another)
console.log(another.substring(0,3))

//usage of trim

// const value ="   anuj   "
// console.log(value)
// console.log(value.trim())

//usage of split
const naam=another.split('n')
console.log(naam);

