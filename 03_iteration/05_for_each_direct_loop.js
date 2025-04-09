const coding=["js","ruby","java","java script","pyton","cpp"]

// coding.forEach( function (item){
//     console.log(item);
// })


// coding.forEach( (val)=>{
//     console.log(val);
// })


// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)



// coding.forEach((val,index,arr)=>{
//     console.log(val,index,arr);

// })

const mycoding =[
    {languageName: "java script",
        languageFileName: "js"
  
    },
    {
      languageName: "pyton",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
]

mycoding.forEach( (item) => {
    console.log(item.languageName)
})
