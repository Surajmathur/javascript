//for of 
 //    ==========  For Of loop is not applicable for Objcts ==========//
// ["","",""]
// [{},{},{}]

const arr =[1,2,3,4,5]
for (const  num of arr) {
    // console.log(num)
    
}

const greeting= "hello world"
for (const greet of greeting) {
    // console.log(`each character in  :${greet}`)
    
}

//  Map           /.

const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATE  OF AMERICA")
map.set('FR',"FRANCE")
map.set('IN',"INDIA")

console.log(map)

for (const [key,value] of map) {
    console.log(key, ':-', value);
    
}

