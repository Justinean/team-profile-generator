const Engineer = require("../lib/engineer")

describe("engineer class", () => {
    it("Assigns the name correctly", () => {
        const engineer = new Engineer("Justin", 1, "justin@gmail.com", "justinean");

        expect(engineer.name).toEqual("Justin");
    })
    it("Assigns the id correctly", () => {
        const engineer = new Engineer("Justin", 1, "justin@gmail.com", "justinean");

        expect(engineer.id).toEqual(1);
    })
    it("Assigns the email correctly", () => {
        const engineer = new Engineer("Justin", 1, "justin@gmail.com", "justinean");

        expect(engineer.email).toEqual("justin@gmail.com");
    })
    describe("getName", () => {
        it("Returns name of the object", () => {
            const engineer = new Engineer("Justin", 1, "justin@gmail.com", "justinean");
            expect(engineer.getName()).toEqual("Justin")
        })
    })
    describe("getId", () => {
        it("Returns id of the object", () => {
            const engineer = new Engineer("Justin", 1, "justin@gmail.com", "justinean");
            expect(engineer.getId()).toEqual(1)
        })
    })
    describe("getEmail", () => {
        it("Returns email of the object", () => {
            const engineer = new Engineer("Justin", 1, "justin@gmail.com", "justinean");
            expect(engineer.getEmail()).toEqual("justin@gmail.com")
        })
    })
    describe("getRole", () => {
        it("Returns 'engineer'", () => {
            const engineer = new Engineer("Justin", 1, "justin@gmail.com", "justinean");
            expect(engineer.getRole()).toEqual("Engineer")
        })
    })
    describe("getGithub", () => {
        it("Returns github username", () => {
            const engineer = new Engineer("Justin", 1, "justin@gmail.com", "justinean");
            expect(engineer.getGithub()).toEqual("justinean")
        })
    })
})