//For of
let a= "Dipesh"

let c=[1,2,3,4,5,6]

for(let b of c)
{
    console.log(b)
}

//string for of


//Map usage in for of
const map= new Map()
map.set("jiph","klo")
map.set(1,"nelfenl")
map.set(true,"klo")
map.set("-0","klo")

for(let [a,b] of map)
{
    console.log(a + ":-" + b)
}

for(let [a] in map)
{
    console.log(a)
}

//object for wiyth key

const obj={
    name: "singhul",
    id: "kuch bhi",
    gender: "smax"
}

for(let a in obj)
{
    console.log(obj[a])
}

// object for in


// array with foraech

const arrr=["a","d","c","r","t","s"]

arrr.forEach(
    (a)=> {
        console.log(a)
    }
)