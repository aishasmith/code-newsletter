
// Getting elements from the index, this is for the full name and email
const fullName = document.getElementById('fullName');
const fullNameMsg = document.getElementById('fullNameValidationMsg');


const email = document.getElementById('email');
const emailMsg = document.getElementById('emailValidationMsg');

//Runs on submit button click
function validateForm(myForm) {

    /*  Full Name Validation */
   const getFullName = fullName.value;  //get input box value
   let fullNameIsValid = false; // bool used later, set to false by default or when input

//if the input box is empty
if(getFullName === '' || getFullName == null) {
    fullNameMsg.innerText = "Full name can't be empty."; // message to display
    fullNameMsg.classList.add('invalid-msg'); // css class to apply
    fullNameMsg.classList.remove('valid-msg'); // we remove this just in case it was added  when the input
    fullName.style.borderColor = 'rgb(204, 102, 144)'; //input box indicative colour
    fullNameIsValid = false; // not valid so this remains false
    // console.log('no message);
}
else {
    fullNameMsg.innerText = "Looks right!"; // message to display
    fullNameMsg.classList.add('valid-msg'); // css class to apply
    fullNameMsg.classList.remove('invalid-msg'); // we remove this just in case it was added  when the input
    fullName.style.borderColor = 'rgb(56, 204, 137)'; //input box indicative colour
    fullNameIsValid = true; // valid, so now set to true
}

/* Email Validation */
const getEmail = email.value; //get input box value
const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'); // regex expression to verify parts of the email
const checkEmail = emailRegex.test(getEmail); //test the email input againt the regex
let emailIsValid = false; // bool used later, set to false by default or when input in

// if the iput box is empty
if(getEmail === '' || getEmail == null) {
    emailMsg.innerText = "Email can't be empty.";
    emailMsg.classList.add('invalid-msg'); // css class to apply
    emailMsg.classList.remove('valid-msg'); // we remove this just in case it was added  when the input
    email.style.borderColor = 'rgb(204, 102, 114)'; //input box indicative colour
    emailIsValid = false; // not valid so this remains false
}
else {
// if the input doesn't match the email format
if (checkEmail == false) {
    emailMsg.innerText = "Email is not correct.";
    emailMsg.classList.add('invalid-msg'); // css class to apply
    emailMsg.classList.remove('valid-msg'); // we remove this just in case it was added  when the input
    email.style.borderColor = 'rgb(204, 102, 114)'; //input box indicative colour
    emailIsValid = false; // not valid so this remains false
}
else {
        emailMsg.innerText = "Looks right!"; // message to display
        emailMsg.classList.remove('invalid-msg'); // css class to apply
        emailMsg.classList.add('valid-msg'); // we remove this just in case it was added  when the input
        email.style.borderColor = 'rgb(56, 204, 137)'; //input box indicative colour
        emailIsValid = true; // valid, so now set to true
    }

}

if(fullNameIsValid == true && emailIsValid == true) {
    //as both inputs have been verified now, we are good to go!
    const greet = document.getElementById('greet');
    greet.innerText =`Thanks for signing up, ${getFullName}!`;
    console.log(`Full name: ${getFullName}`);
    console.log(`Email: ${getEmail}`);
    console.log(`Preferred language (optional): ${myForm.languages.value}`);
    console.log(`------------------------`);
 }
   
}

