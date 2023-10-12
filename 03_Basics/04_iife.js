// Immediately Invoked Function Expression (IIFE)

// to avoid global scope polutioin and immediately run

// This is called a named iife
(function chai(){
    console.log(`DB CONNECTED`);
})(); // Now here put a semicolon to stoop this.

// chai()

// This is simple iife
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("rohit");