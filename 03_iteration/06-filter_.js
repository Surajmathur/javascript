// const coding =[ "pyton","java","html","css","java script"]
//  const mycoding = coding.forEach( (item) => { 
//     // console.log(item)
//     return item
// })
// console.log(mycoding)

const mynum=[1,2,3,4,5,6,7,8,9,10]

// const newNum=mynum.filter( (num) => num >4)


//  const newNum =mynum.filter( (num) => {
//     return num >5
// })


// const newNum=[]
// mynum.forEach( (num) =>{
//     if(num > 5){
//         newNum.push(num)
//     }
// })

// console.log(newNum);


const book =[ 
    { title: 'book one',genere:'history',published:'2010',edition:'2000'  },
    { title: 'book two',genere:'since',published:'2024',edition:'2020'  },
    { title: 'book three',genere:'since-friction',published:'1988',edition:'1900'  },
    { title: 'book four',genere:'comedy',published:'2007',edition:'2000'  },
    { title: 'book five',genere:'rampage',published:'1995',edition:'1995'  },]

    let mybook=book.filter( (bk) =>bk.genere==='since' )

    mybook= book.filter( (bk) => {
          return bk.published >2000 && bk.genere ==='comedy'
        })
    console.log(mybook)