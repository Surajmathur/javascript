const tinder =new Object()

const tinderuser = {}
 tinderuser.di ="12s1m"
 tinderuser.name= "suraj",
 tinderuser.isLoggedIn = true
// console.log(tinder);
// console.log(tinderuser);


const regularUser ={
    email: "surajmathur@gmail.com",
    fullName:{
        userFullname:{
            firstName: "suraj",
            lastname:"mathur",
        }
    }
}
// console.log(regularUser.fullName.userFullname.firstName);


const obj1 ={ 1:"qw",2:"er"}
const obj2 ={3:"as", 4: "sm"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {...obj1,...obj2}
// console.log(obj3)

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('di'))


//++++++++================= Object de structure ===============+++++++++++///


const course = {
    courseName: "js in hindi",
    fees: 999,
    courseInstructor: "surajmathur"
}

const {courseName:cou,fees } = course
console.log(cou);
console.log(fees);