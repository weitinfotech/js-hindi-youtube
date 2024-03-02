//object with literals  use normal key print, use string key prnt wit dot and with [], use symbol, check symbol object daat type, how to access symbol
const newSymbol= Symbol("Key1");

const jfrog={
    Name: "Dipesh",
    Age: 32,
    Gender: "male",
    Email: "dipsh.swami@gmail.com",
    [newSymbol] : "Hoga hi"
}

// console.log(jfrog)
// console.log(jfrog["Name"])

jfrog.newSymb= Symbol("Hota hai");
// console.log(jfrog)

// console.log(typeof jfrog.newSymbol)




// freeze the object
// Object.freeze(jfrog)

jfrog.longjump= "No"

// console.log(jfrog)

// add function in object and use this

jfrog.func1= () =>{
    console.log(`Hello from function , ${this.Name} `)
}
jfrog.func2 = function(){
    console.log(`Hello from function , ${this.Name} `)
}
// console.log(jfrog)
// console.log(jfrog.func1())
// console.log(jfrog.func2())


// create object ke ander object
const myuser ={
    Name: "Dipesh",
    Age: 32,
    ladta: "nahi hai",
    Comapany :{
            Name: "Sapint",
            Loc: "Gurgaon"
    }
}

// console.log(myuser.Comapany.Name)

// combine two objcet without ... and without ...

const myuser2={
    Name: "Seeart",
    Age: 31,
    "USP hai": "Barganing",
    Comapany :{
            Name: "CV INfo",
            Loc: "Gurgaon"
    }
}
 
// const obj1 ={1:"a"}
// const obj3= {...myuser,...myuser2}
// console.log(obj3)
//Object.assign



// array object/ get a single value/ loop it/ Object.key/objcet.value/ hasownproperty

const arry1= [
   {
    Name: "Dipesh",
    Age: 32,
    gender: "Male",
   },{
    Name: "Shama",
    Age: 32,
    gender: "SheMale",
   },{
    Name: "ghoda",
    Age: 32,
    gender: "Male",
   },{
    Name: "chidya",
    Age: 32,
    gender: "FeMale",
   },{
    Name: "Nadiyan",
    Age: 32,
    gender: "FEMale",
   }
]

// console.log(Object.values(arry1))


// Desctructure objec with name/ without name, Destrycture array

const obj15={
    name:"Hello",
    gender:"Male",
    Maze:"lelo",
    func1 : function (){ console.log("hello")}
}

const {func1: hel} = obj15

console.log(hel())

