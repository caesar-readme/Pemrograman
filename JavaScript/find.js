const source = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.info(source.find(x => x > 5));
console.info(source.findIndex(v => v > 0));
console.info(source.includes(15));

console.info(source.filter((y => y > 10)));