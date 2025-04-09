
for(let i=0; i<=10; i++){
    const ele= i;
    if(ele == 5){
        // console.log("num 5 is best ");
    }
    // console.log(ele);
}


for(let i=1; i<=10; i++){
    console.log(`outer loop value: ${i}`);
    for(j=1; j<=10; j++){
        // console.log(`inner loop value: ${j}`)
        console.log(i+"*"+j+ '='+ i*j);
    }
}

