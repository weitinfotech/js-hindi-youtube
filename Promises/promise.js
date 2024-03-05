
const prom5= new Promise(function(resolve,reject){
    setTimeout(function(){
        var error=true
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

async function ConsumePromise123(){
    try
    {
        const cons= await prom5
        console.log(cons);
    }
    catch(e){
      console.log(e)
    }
    
}

ConsumePromise123();


//async await with fetch

async function getallUsers(){
     const data = await fetch('https://jsonplaceholder.typicode.com/users')
     const resp= await data.json()
     console.log(resp)
     
}



// getallUsers()


fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>  data.json() )
.then((data)=> console.log(data))
.catch((e)=> console.log(e))

