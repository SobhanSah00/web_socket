interface User {
    username : string,
    age : number,
    email : string,
    password : string
};

const oneUser : User = {
    username : "sobhan",
    age : 12,
    email : "ajdsofj@gmial.com",
    password : "1234"
}

type updatedUserData = Pick<User, 'username' | 'age' | 'password' >


function updatedUser(data : updatedUserData) {
    oneUser.age = data.age
    oneUser.password = data.password
    oneUser.username = data.username

    console.log(oneUser);
    
}

updatedUser({
    age : 12,
    username : "sobhan sahoo",
    password : "aosdjf"
})