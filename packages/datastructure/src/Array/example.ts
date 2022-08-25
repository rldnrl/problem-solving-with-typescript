const array = [1, 2, 3, 'JavaScript'];
array.push(4);
array.unshift(0);
console.log(array[0]);
array.pop();
array.shift();
console.log(array[0]);

console.log('======================');

for (const item of array) {
  console.log(item);
}
