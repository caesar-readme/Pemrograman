class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
  
    }

    sayHello(name) {
        const x = `${this.firstName} ${this.lastName}`
        console.info(`Hallo Pak ${name}, Nama Saya ${x} Umur Saya ${this.age}`);
    }

}

const iqbal = new Person('Iqbal', 'Caesar', 21);
iqbal.sayHello('Eko Khannedy');