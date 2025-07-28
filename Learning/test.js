// -- Variables
// `const` are not reassigneable

const a = 1;
const b = 2;
const c = 3;

console.log("These are some consts: ", String(a), String(b), String(c))

// BUT objects and arrays declared with const can still be changed!
// That’s because const protects the binding, not the content.
// Example:

const somelist = ["blue", "green", "yellow"];

console.log("\n\nThis is the list before '.push' :", String(somelist))
somelist.push("red")
console.log("\nAnd this is after: ", String(somelist))

// `let` are reassigneable
let number = 42;

console.log("\n\nThis is the number before being modified / reassigned: ", String(number))
number = number + 5;
console.log("\nThis is the number after: ", String(number));

// Also:
// const a; - Won't work but..
// list a; - Would work.
// `list` doesn't need a value assigned immediately, while `const` does

// -- Functions (and loops)

console.log("\n")

// - for loop
// `let i = 0`: Start at 0
// `i < 5`: Keep going as long as `i` is less than 5
// `i++`: increase `i` by 1 each time

for(let i = 0; i < 5; i++){
    console.log("For loop:", String(i));
}

console.log("\n");

// - while loop
// Checks the condition first (`f < 5`) before running the loop
let f = 0;
while(f < 5) {
    console.log("While Loop", f);
    f++;
}

console.log("\n")

// - do...while loop
// Runs at least once, even if the condition is false at the start.
let p = 0;
do {
    console.log("Do While", p)
    p++;
} while (p < 5);

console.log("\n")

// - for...of (loop over arrays)
// "Do this thing for every item in this list."
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}

console.log("\n")

// - for...in (loop over object keys)
let user = { name: "James", age: 18};

for(let key in user) {
    console.log(key, user[key]);
}

console.log("\n")

// - Combining a bit
function Hello(name, number) {
    for(let i = 0; i < number; i++) {
        console.log("Hello " + name + "!", String(i + 1));
    }
}

// Calling the function + passing arguments
let input = "James";
let times = 5;
console.log("Calling the function 'Hello' with input: '" + input + "' for", times, "times.");
Hello(input, times);
