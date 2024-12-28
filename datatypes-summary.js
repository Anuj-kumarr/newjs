//data kese memory me store hota hai ar kese access kiajjata  hai uske basis par do  types ke datatype hote hai..primitive and nonprimitive
//jaise c++ me call by value aur caal by refeence hote hai wse hi


// #primitive datatypes
//1.call by value hota hai ye
//2.7 types ka hota hai jaise ki .....number,string,null,undefined,boolean,symbol(kisi bhi value ko unique banane ke lie use hota hai),bigint



//# Nonprimitive data types(Reference type)
// arrays,objects,functions


// const id=Symbol('123')
// const dosriid=Symbol('123')
// console.log(id)
// console.log(dosriid)
// console.log(id===dosriid)

//ab nonprimitive ke examples padhenge

const myfunc=["anuj","kumar","rajput"]
const anuj={
    name:"anu",
    age:22
}
console.log(anuj)
const vari=function()
{
    console.log("anuj is a millionare");
    console.log("haa bhai anuj is a millionare")
}
vari()
//har kisi nonprimitive ka data type object hi hota hai ...function ka objectfunction hota hai





