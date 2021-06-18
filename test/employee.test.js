const Employee = require('../lib/employee');

describe("Employee class", () => {
    it("Assigns the name correctly", () => {
        const employee = new Employee("Justin", 1, "justin@gmail.com");

        expect(employee.name).toEqual("Justin");
    })
    it("Assigns the id correctly", () => {
        const employee = new Employee("Justin", 1, "justin@gmail.com");

        expect(employee.id).toEqual(1);
    })
    it("Assigns the email correctly", () => {
        const employee = new Employee("Justin", 1, "justin@gmail.com");

        expect(employee.email).toEqual("justin@gmail.com");
    })
    describe("getName", () => {
        it("Returns name of the object", () => {
            const employee = new Employee("Justin", 1, "justin@gmail.com");
            expect(employee.getName()).toEqual("Justin")
        })
    })
    describe("getId", () => {
        it("Returns id of the object", () => {
            const employee = new Employee("Justin", 1, "justin@gmail.com");
            expect(employee.getId()).toEqual(1)
        })
    })
    describe("getEmail", () => {
        it("Returns email of the object", () => {
            const employee = new Employee("Justin", 1, "justin@gmail.com");
            expect(employee.getEmail()).toEqual("justin@gmail.com")
        })
    })
    describe("getRole", () => {
        it("Returns 'employee'", () => {
            const employee = new Employee("Justin", 1, "justin@gmail.com");
            expect(employee.getRole()).toEqual("Employee")
        })
    })
})