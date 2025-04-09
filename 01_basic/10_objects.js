// objects  literals

const mysymbol = Symbol("key1")
const jsobject = {
    name: "suraj",
    "full name": "surajmathur",
    age: 20,
    [mysymbol]: "mykey",
    location: "haryana",
    email: "surajmathur@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["monday","saturday"],

}
console.log(  jsobject.email);
//console.log( jsobject["email"]);
//console.log( typeof jsobject["full name"])
//console.log( typeof jsobject[mysymbol])

jsobject.email= "vijaymathur@gmail.com"
Object.freeze(jsobject)
jsobject.email ="mathursuraj@gmail.com"

console.log(jsobject);


//as a function

jsobject.greeting = function(){
    console.log("hello js user");
}
console.log(jsobject.greeting)