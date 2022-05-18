let array = [1,-1,2,-2,3,-3,4,-4];
let result = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        result += array[i];
    }
}
console.log(result);