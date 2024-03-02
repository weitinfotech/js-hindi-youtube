
//check type in "", without, string convert Number and "33abc", check bool, 
// check 1 convert to bool, -1, "", "dipesh"
//convert number to string

let score = "ae12"
let d= Number(score)
//33 => numbre
//"33"=> number
//"33md"=> number magar print NAN
// console.log(d);
// console.log(typeof d)
// console.log(typeof (d))
//bool
//0 is false
// apart from this everything is true
let entry= -1
let val= Boolean(entry)

// console.log(val);
// console.log(typeof val)
// console.log(typeof (val))

//string

let numb= -1

let strnum= String(numb);

// console.log(strnum)
// console.log(typeof strnum)


//////////////////operation///////////

//-ve op

let a=5
let b=-5

console.log(b)

console.log(2+2)
console.log(2-2)
console.log(4%2)
console.log(2/3)
console.log(2**2)

// let h= "col "
// let e ="jillo"
//  console.log(h+e)

//  console.log(1+2)
//  console.log("1"+2 +2+2)
//  console.log(1+2 +2+"2")
// //string first hai to string ho jayega / verna jo pehl hai
// let num1,num2,num3

// num1=num2=num3=8

//  console.table([num1,num2,num3])

 //compare "" with number, "" with bool, nyumber with bool, null with num ==,>,>=, check undefined

 console.log("2">0)
 console.log("abc">0)

 console.log(0>true)
 
 console.log(null>1)
 console.log(null == 1)
 //> conert null to 0
 console.log(null >= 0)

 //symbol kabhi bhi same nahi hote

 let ab= Symbol('123')
 let bc= Symbol('123')

 console.log(ab===bc)

 let obj={
    name: 'dipesh',
    age: 32
 }

 //// stack(value type)- copy of value // Heap(ref)- refrene of orignal value

 const game = new String('Dipesh')

 console.log(game)

 console.log(game[0])

 console.log(game.__proto__)
