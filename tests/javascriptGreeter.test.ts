import { JavaScriptGreeter } from "../src/javascriptGreeter";

describe("JavaScriptGreeter Class", () => {
    test("greet ian", () => {
        const greeting = new JavaScriptGreeter('Hello');
        const name = 'Ian';
        expect(greeting.greet(name)).toBe('console.log(Hello, Ian!)');
    });

    test("greet kristina", () => {
        const greeting = new JavaScriptGreeter('Greetings');
        const name = 'Kristina';
        expect(greeting.greet(name)).toBe('console.log(Greetings, Kristina!)');
    });
});