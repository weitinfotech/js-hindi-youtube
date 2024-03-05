class User{
    constructor(username)
    {
        this.username= username
    }

    print()
    {
        console.log(`this is use ${this.username}`)
    }
}

class Emp extends User{
    constructor(user, a, b)
    {
        super(user)
        this.user=user
        this.a=a
        this.b=b
    }

    addCourse(){
        console.log(`this is from new user ${this.user}`)
    }
}


const neuser= new Emp("dipesh",1,3)

neuser.print()
neuser.addCourse()

const neuser1= new User("raja")

neuser1.print()
