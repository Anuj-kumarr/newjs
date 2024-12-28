// const num=100
// const num1=new Number(100)
// console.log(typeof num)
// console.log(typeof num1)
//to string propery of a object number

// console.log(num1.toString())
// console.log(typeof num1)

/*primitive ke andar properties nhi hoti kyuki wo object nahi hote lekin agar hum unme properties
define karte hai to js unko Number ke andar wrap kar deta hai taaki properties lag sake aur baad me unwrap 
karke phir se primitive me badal deta hai*/



// console.log(Number.MAX_VALUE)
//to precision ,to localestring bhi ddekh lunga ..aur bhi hai
// const marks=123.44
// console.log(marks.toPrecision(3))





//&&&&&&&&&&&&&&&&&&&&&&&&   MATHS   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


console.log( Math)
console.log(Math.ceil(3.8))
console.log(Math.floor(3.8))
console.log(Math.max(3,8,11,4))
console.log(Math.min(3,8,11,4))

//math.random() ye hume 0 and 1 ke beech me value generate karke deta hai

console.log(Math.random())
console.log((Math.random()*10) +1)
console.log(Math.floor(Math.random()*10)+1)

//agar min aur max value defined ho to neeche kia hai mne
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)//isko yaad rakhna hai formula










