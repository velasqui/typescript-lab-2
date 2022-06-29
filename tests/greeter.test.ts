import { Greeter } from "../src/greeter";

describe("Greeter Class", () => {
    test("greet ian", () => {
        const greeting = new Greeter('Hello');
        const name = 'Ian';
        expect(greeting.greet(name)).toBe('Hello, Ian!');
    });

    test("greet kristina", () => {
        const greeting = new Greeter('Greetings');
        const name = 'Kristina';
        expect(greeting.greet(name)).toBe('Greetings, Kristina!');
    });
});