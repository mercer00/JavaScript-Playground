class Employee {
    constructor(first , last , pay , raiseAmt = 1.05) {
        this.first = first
        this.last = last
        this.pay = pay
        this.raiseAmt = raiseAmt
    }
    get fullname() {
        return `${this.first} ${this.last}`
    }
    get email() {
        return `${this.first}.${this.last}@company.com`
    }
    set fullname(name) {
        let [first , last] = name.split(" ")
        this.first = first
        this.last = last
    }
    applyRaise() {
        this.pay = this.pay * this.raiseAmt
    }
    static isWorkday(date = new Date()) {
        if (date.getDay() == 0 || date.getDay() == 6) {
            console.log("Not a workday")
        }
        else {
            console.log("Is a workday")
        }
    }
}

class Developer extends Employee {
    constructor(first , last , pay , progLang) {
        super(first , last , pay)
        this.progLang = progLang
    }
}

class Manager extends Employee {
    constructor(first , last , pay , manages = null) {
        super(first , last , pay)
        if (manages == null) {
            this.manages = []
        } else {
            this.manages = manages
        }
    }

    addEmployee(emp) {
        if (!this.manages.includes(emp)) {
            this.manages.push(emp)
        }
    }
    removeEmployee(emp) {
        if (this.manages.includes(emp)) {
            this.manages.pop(emp)
        }
    }
    allEmployees() {
        for (const emp of this.manages) {
            console.log(`${emp.fullname} ==> ${emp.email}`)
        }
    }
}

employee1 = new Employee("Scooby" , "Doo" , 10000)
developer1 = new Developer("John" , "Doe" , 20000 , "Python")

manager1 = new Manager("Jane" , "Doe" , 100000 , [employee1])
manager1.addEmployee(developer1)

manager1.allEmployees()