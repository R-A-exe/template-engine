// TODO: Write code to define and export the Employee class
class Employee {

    constructor(name, id, email) {

        this.id = null;
        this.name = null;
        this.email = null;
        this.validate(name, id, email)
    }

    validate(name, id, email) {
        !/[^a-zA-Z]/g.test(name) || !name ? this.name = name : this.throwError("Invalid name");
        !/[^0-9]/g.test(id) || !id ? this.id = id : this.throwError("Invalid id");
        /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g.test(email) || !email ? this.email = email : this.throwError("Invalid email");
    }

    throwError(error) {
        throw new Error(error);
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }

    getRole(){
        return this.constructor.name
    }

}

module.exports = Employee;