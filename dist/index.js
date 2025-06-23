"use strict";
;
const oneUser = {
    username: "sobhan",
    age: 12,
    email: "ajdsofj@gmial.com",
    password: "1234"
};
function updatedUser(data) {
    oneUser.age = data.age;
    oneUser.password = data.password;
    oneUser.username = data.username;
    console.log(oneUser);
}
updatedUser({
    age: 12,
    username: "sobhan sahoo",
    password: "aosdjf"
});
