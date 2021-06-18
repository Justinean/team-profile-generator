const Intern = require("../lib/intern")

describe("intern class", () => {
    it("Assigns the name correctly", () => {
        const intern = new Intern("Justin", 1, "justin@gmail.com", "Andover");

        expect(intern.name).toEqual("Justin");
    })
    it("Assigns the id correctly", () => {
        const intern = new Intern("Justin", 1, "justin@gmail.com", "Andover");

        expect(intern.id).toEqual(1);
    })
    it("Assigns the email correctly", () => {
        const intern = new Intern("Justin", 1, "justin@gmail.com", "Andover");

        expect(intern.email).toEqual("justin@gmail.com");
    })
    describe("getName", () => {
        it("Returns name of the object", () => {
            const intern = new Intern("Justin", 1, "justin@gmail.com", "Andover");
            expect(intern.getName()).toEqual("Justin")
        })
    })
    describe("getId", () => {
        it("Returns id of the object", () => {
            const intern = new Intern("Justin", 1, "justin@gmail.com", "Andover");
            expect(intern.getId()).toEqual(1)
        })
    })
    describe("getEmail", () => {
        it("Returns email of the object", () => {
            const intern = new Intern("Justin", 1, "justin@gmail.com", "Andover");
            expect(intern.getEmail()).toEqual("justin@gmail.com")
        })
    })
    describe("getRole", () => {
        it("Returns 'intern'", () => {
            const intern = new Intern("Justin", 1, "justin@gmail.com", "Andover");
            expect(intern.getRole()).toEqual("Intern")
        })
    })
    describe("getSchool", () => {
        it("Returns the office number", () => {
            const intern = new Intern("Justin", 1, "justin@gmail.com", "Andover");
            expect(intern.getSchool()).toEqual("Andover")
        })
    })
})