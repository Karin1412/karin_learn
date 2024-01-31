// defaultParameter.js

/* const Sum = (x , y) =>{
    if(y == undefined)
    {
        y = 7
    }
    return x + y
}
 */

const Sum = (x , y = 2) => x + y
console.log(Sum(2, 5))