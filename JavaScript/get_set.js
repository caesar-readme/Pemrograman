class Person {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(x){
        const ress = x.split(' ');
        this.firstName = x[0];
        this.lastName = x[1];
    }

}

const name = new Person('Iqbal','Caesar');
console.info(name.fullName)
console.info(name);