function myfunName(){
    console.log("s")
    console.log("s")
    console.log("r")
    console.log("a")
    console.log("j")
}    
// myfunName()

function addtoNum(num1, num2){
 //console.log(num1+num2)
//   let sum = num1+num2
//   return sum

  return num1+num2
  console.log("suraj")

}
  const sum =addtoNum(3,5)
  //console.log( "result",sum);


  // some othser method to take some values

  function loginuserMessage(userName ="sam"){
    if(!userName){
        // console.log("please ente a user name");
        return
    }
    return `${userName} just logged in`
  }
//    console.log(loginuserMessage("suraj"))
  //  console.log(loginuserMessage("suraj mathur"))



  //====================== restoperator++++++++++==============//

  function calculateCartPrice(val1,val2,...num1){
   return num1
  }
  // console.log(calculateCartPrice(2,65,64,90))


  //++++++++++++++++++++ how to  pass objet in function++++++++++++++++++//

  const user= {
    usernamem: "surajmathur",
    price: 999,

  }
  function handleObject(anyuser){
    // console.log(`user name is ${anyuser.usernamem} and price is ${anyuser.prices}`)

  }
  //  (handleObject(user));


  const arraynew =[34,53,64,775]

  function arrayhandle(array){
    return array[2]
  }
  console.log(arrayhandle(arraynew));

