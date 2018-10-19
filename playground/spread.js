// function add (a, b) {
//    return a + b;
// }

// console.log(add(3,1));

// var toAdd = [9, 5]
// console.log(add(...toAdd));

// var groupA =['Jen', 'Cory'];

// var groupB =['Vikram']; 

// var final = [...groupA, ...groupB]

// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greeting (name, age) {
    console.log('Hi '+ name + ' you are ' + age );

}

greeting(...person);
greeting(...personTwo);

var names = ['mike', 'dave'];
var final = ['Ben', ...names]

final.forEach(e => {
    console.log('Hi ' + e);
});