// For in loop  

//  =============  iteration can not be conse in Map through   (FOR IN LOOP)

const myobj= {
    js: "java script",
    cpp: "c++",
    rb: "ruby",
    swift:"swift"
}
for (const key in myobj) {
    // console.log(  `${key} is shortcut of ${myobj[key]}`)
    
    
}


// for in  for arrays

const prog = [ "c","c++","java","java script","python"]
for (const key in prog) {
    console.log(prog[key])
}