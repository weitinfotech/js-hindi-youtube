//declare function with cont and without const

function add(){
    let ursernam="dipesh"
    return console.log(this.ursernam)

}

// add()

const func4= () => {
    let ursernam="dipesh"
    return console.log(this.ursernam)
}

func4()

const add1= function(){

    return console.log("fromm add1")
}