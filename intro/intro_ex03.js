/***
 * Excerpted from "Modern Asynchronous JavaScript",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit https://pragprog.com/titles/fkajs for more book information.
 ***/
const promise = fetch('https://eloux.com/async_js/examples/1.json');

promise.then((response) => {
    // process
    return response.json();
}, (error) => {
    console.log(error)
}).then(function (data) {
    console.log(data);
});

