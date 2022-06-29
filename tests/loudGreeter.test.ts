import { LoudGreeter } from "../src/loudGreeter";

describe("loudGreeter Class", () => {
    test("without addVolume", () => {
        const greeting = new LoudGreeter('Hello');
        const name = 'Ian';
        expect(greeting.greet(name)).toBe('Hello, Ian!!');
    });

    test("with addVolume", () => {
        const greeting = new LoudGreeter('Greetings');
        const name = 'Kristina';
        greeting.addVolume();
        expect(greeting.greet(name)).toBe('Greetings, Kristina!!!');
    });

    test("with addVolume multiple times", () => {
        const greeting = new LoudGreeter('Greetings');
        const name = 'Kristina';
        greeting.addVolume();
        greeting.addVolume();
        greeting.addVolume();
        expect(greeting.greet(name)).toBe('Greetings, Kristina!!!!!');
    });
});