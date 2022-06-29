import { HtmlGreeter } from "../src/htmlGreeter";

describe("htmlGreeter Class", () => {
    test("htmlGreeting 1", () => {
        const greeting = new HtmlGreeter('Hello');
        const name = 'Ian';
        expect(greeting.greet(name)).toBe('<h1>Hello, Ian!</h1>');
    });

    test("htmlGreeting 2", () => {
        const tagName = 'div';
        const greeting = new HtmlGreeter('Greetings', tagName);
        const name = 'Kristina';
        expect(greeting.greet(name)).toBe(`<${tagName}>Greetings, Kristina!</${tagName}>`);
    });

    test("htmlGreeting 3", () => {
        const tagName = 'h4';
        const greeting = new HtmlGreeter('Salutations', tagName);
        const name = 'Kevin';
        expect(greeting.greet(name)).toBe(`<${tagName}>Salutations, Kevin!</${tagName}>`);
    });
});