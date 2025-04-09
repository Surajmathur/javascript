let a =100
// const b=20
//  
if(true){
    let a =10
    const b=20
    // console.log("inerr",a)
 
}
// console.log(a);
// console.log(b);
// console.log(c);


//=============== nested function ===============//

function one(){
    const username ="surajmathur"
    function two(){
        const wevsite ="youtube.com"
        console.log(username);
    } //console.log(wevsite);  // thie gives error because child access their parent detail 
    two()

}one()

