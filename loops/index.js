
//  |var|      |condition|   |incrment|
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('whatever is next');
// call to function or if statement calls out even numbers only.
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let names = ['Sam', 'Tom', 'Hillary'];
// useful when we want to do something to everything in array or variable...
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

let a = 110;
// infinit loop carfull 
while (a < 10) {
    console.log(a);
    a++; //added var ++ to stop infinate loop!!!#$%&^%$
}

do {
    console.log(a);
} while (a < 10);
//for in for of loop
for (i in names) {
    console.log(i);
}
//for of loop
for (name of names) {
    console.log(name);
}
//loops usefull to repet code or do something to an array!!






while (userNumber <= 100 || userNumber <= 1) {
    console.log(userNumber);
    if (userNumber < 1 || userNumber > 101){
        console.log("Your number was not between 1 and 100.");
    }
    userNumber++;
    
    
}


function loopUntilX(){
    for (let i = 0; i <= x; i++){
        console.log(i);
        if (i >= (x - 1)){
            console.log(true);
            let x = x;
        }
    }
}

// week 3 Functions instructors code under


//do not change below, used for testing purposes
console.log(loopUntilX(x));

//write your code below
function loopUntilX(x){
    for(let i = 0; i < x; i++){
        console.log(i);
    }
    return true;
}

//do not change below, used for testing purposes
console.log(loopUntilX(x));