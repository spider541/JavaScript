// for loop

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value ${j} and outer loop ${i}`);
        // console.log(i +" * "+ j +" = "+ i*j);
    }
}

// basic array fetch by for loop
let myArray = ["IronMan", "SpiderMan", "Thor"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// learning about break and continue 

// for (let i = 1; i <= 20; i++) {
//     if(i === 5){
//         console.log("Detected 5");
//         break // terminate the loop instantly
//     }
//     console.log(`Value of i is ${i}`);
    
// }

for (let i = 1; i <= 20; i++) {
    if(i === 5){
        console.log("Detected 5");
        continue // skip this step and continue from next
    }
    console.log(`Value of i is ${i}`);
    
}