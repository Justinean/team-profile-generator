const Manager = require("../lib/manager")

describe("manager class", () => {
    it("Assigns the name correctly", () => {
        const manager = new Manager("Justin", 1, "justin@gmail.com", 15);

        expect(manager.name).toEqual("Justin");
    })
    it("Assigns the id correctly", () => {
        const manager = new Manager("Justin", 1, "justin@gmail.com", 15);

        expect(manager.id).toEqual(1);
    })
    it("Assigns the email correctly", () => {
        const manager = new Manager("Justin", 1, "justin@gmail.com", 15);

        expect(manager.email).toEqual("justin@gmail.com");
    })
    describe("getName", () => {
        it("Returns name of the object", () => {
            const manager = new Manager("Justin", 1, "justin@gmail.com", 15);
            expect(manager.getName()).toEqual("Justin")
        })
    })
    describe("getId", () => {
        it("Returns id of the object", () => {
            const manager = new Manager("Justin", 1, "justin@gmail.com", 15);
            expect(manager.getId()).toEqual(1)
        })
    })
    describe("getEmail", () => {
        it("Returns email of the object", () => {
            const manager = new Manager("Justin", 1, "justin@gmail.com", 15);
            expect(manager.getEmail()).toEqual("justin@gmail.com")
        })
    })
    describe("getRole", () => {
        it("Returns 'manager'", () => {
            const manager = new Manager("Justin", 1, "justin@gmail.com", 15);
            expect(manager.getRole()).toEqual("Manager")
        })
    })
    describe("offNum", () => {
        it("Returns the office number", () => {
            const manager = new Manager("Justin", 1, "justin@gmail.com", 15);
            expect(manager.getOfficeNum()).toEqual(15)
        })
    })
})