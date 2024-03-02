// create fiunction with... (it will create array as input).. Create func with val para and ...



function func1(par1,par2,...anyarray)
{
  return console.log(anyarray)  

}

// console.log(func1(1,2,3,4))



//pass objct in fuctio and pass objet direct into function
const obj1={
    name:"Dipesh"
}


function func2(anyobj){
  return `Lets get the value ${anyobj.name} and ${anyobj.gender}`
}

// console.log(func2(obj1))

// console.log(func2({name:"jillu", gender:"male"}))




//pass array


// create arrow function

const a =(a,b) => (a+b)

console.log(a(3,5))