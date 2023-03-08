// const name = 'Iqbal Caesar';
// const reg = /iqbal/i;

// let change = name.replace(reg, 'Babag');
// console.info(change);

const name = 'Iqbal Caesar';
const regex = /iqbal/i;

let result = regex.exec(name);
console.info(result);

let test = regex.test(name);
console.info(test);