import { Greeter } from "./greeter";
import { JavaScriptGreeter } from "./javascriptGreeter";
import { LoudGreeter } from "./loudGreeter";
import { HtmlGreeter } from "./htmlGreeter";

console.log(new Greeter('Hi there.'));

console.log(new JavaScriptGreeter('Good Evening'));

console.log(new LoudGreeter('Good to see you'));

console.log(new HtmlGreeter('How are you', 'div'));