/***
 * Excerpted from "Modern Asynchronous JavaScript",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit https://pragprog.com/titles/fkajs for more book information.
 ***/
const promises = [
    fetch('https://picsum.photos/200', {mode: "cors", redirect: "follow"}),
    fetch('https://does-not-exist', {mode: "cors", redirect: "follow"}),
    fetch('https://picsum.photos/100/200', {mode: "cors", redirect: "follow"})
];

Promise.allSettled(promises).then((results) => results.forEach((result) => console.log(result)));

// logs:
// => { status: "fulfilled", value: Response }
// => { status: "rejected", reason: TypeError }
// => { status: "fulfilled", value: Response }
