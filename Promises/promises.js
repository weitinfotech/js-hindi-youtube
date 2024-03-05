// promiseone with var and without var settime out

const prom= new Promise(function(resolve,reject){

    setTimeout(() => {
        console.log("inside promise")
        resolve()
    }, 2000);
})

prom.then(function(){
    console.log("Hello outside")
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve()
        console.log("second promise")
    },2000)
}).then(()=> console.log("hello from second"))


// resolve main data pass kro
const prom2= new Promise(function(resolve,reject){
    setTimeout(()=>{
      console.log("Hello from prom2")
      resolve({"id":2,"name":"Dipesh"})
    },4000)
})

prom2.then(function(user){
console.log(user)

})

//use resolev and reject both
const prom3= new Promise(function(resolve,reject){
    setTimeout(function(){
        var error=false
        if(!error)
        {
          resolve({"id":4,"name":"Dipesh"})
        }
        else
        {
            reject("Error: not getting reolve")
        }
    },5000)
})

prom3
.then((user)=>{
   console.log("first then")
   return user.name
})
.then((username)=> console.log(`second the ${username}`))
.catch((e)=>console.log(e))
.finally(()=> console.log("final;ly resolved"))

//do async await and promise

const prom5= new Promise(function(resolve,reject){
    setTimeout(function(){
        var error=false
        if(!error)
        {
          resolve({"id":4,"name":"Dipesh"})
        }
        else
        {
            reject("Error: not getting reolve")
        }
    })
},2000)

async function ConsumePromise(){
    const cons= await prom5
    console.log(cons)
}

ConsumePromise();

//async await with fetch

