
// makes sure username and password are the same if not run incorect alert....
var loggedIn = false;

while(!loggedIn) {
let userName = prompt('Username');
let passWord = prompt('Password');
// makes sure username and password are the same if not run incorect alert....
    if (userName == 'sammy123' && passWord == '12345') {
        alert('Welcome back, ' + userName);
        loggedIn = true;
   } else {
    alert('Incorrect username or password.');
   }
}