// use filter in array
let aarra1=[1,2,3,4,5,6,7,8]

console.log(aarra1.filter((item)=> item>4))


// console.log(out)
//map

console.log(aarra1.map((item)=> item>7))

const arr= aarra1.map((item)=> item*7).map((i) => i-7).filter((d) => d>14)

console.log(arr)


//.map.map.filter


//reduce
const a=0
const b= arr.reduce((acc,intia)=> 
{console.log(`${acc} and ${intia}`)
return acc+intia},a)

console.log(b)