import Validator from "../app";

describe("orderByProps function:", () => {
    test("should return false", () => {
        expect(Validator.validateUserName("Полукровка")).toBe(false);
        expect(Validator.validateUserName("Half3685blood")).toBe(false);
        expect(Validator.validateUserName("35Half-blood")).toBe(false);
        expect(Validator.validateUserName("Half-blood35")).toBe(false);
        expect(Validator.validateUserName("#Half-blood")).toBe(false);
        expect(Validator.validateUserName("Half-blood#")).toBe(false);
        expect(Validator.validateUserName("_Half-blood")).toBe(false);
        expect(Validator.validateUserName("Half-blood-")).toBe(false);

    });

    test("should return true", () => {
        expect(Validator.validateUserName("Half-blood")).toBe(true);
        expect(Validator.validateUserName("half-blood")).toBe(true);
        expect(Validator.validateUserName("Half_blood")).toBe(true);
    });
});