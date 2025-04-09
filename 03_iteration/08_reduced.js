const mynum= [1,2,3]
// const newnum=mynum.reduce(function (accumulator,currentvalue) { return accumulator+currentvalue},intialvalue)
// console.log(newnum);

// const newnum=mynum.reduce(function ( acc,curval)  { 
//  console.log(`valu of acc:${acc} and value of curval:${curval}`) 
//  return acc+curval 
// } ,0)
  
 
// console.log(newnum);

// ================  in arrow function =============

const newnum=mynum.reduce( (acc,currval) =>acc+currval,0 )
console.log(newnum);



