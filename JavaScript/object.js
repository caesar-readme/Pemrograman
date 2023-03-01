const Person = {
    name : 'Iqbal Caesar',
    age : 21,
    addres: {
        country : 'Indonesia',
        city : 'Tangerang',
        zip : 15560
    }
}


const json = JSON.stringify(Person);
const js = JSON.parse(json);
console.info(json);
console.info(js);