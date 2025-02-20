// // STEP 1
//     var someMonth;
//     function theMonth();
//     var currentMonth;
//     var summerMonth;
//     var myLibraryFunction;

// // STEP 2
// // a numeric literal expression
//     5.6
// // a string literal expression
//     "JavaScript"
// // a Boolean literal expression
//     true
// // a null literal expression
//     null

// // STEP 3
// // two examples of complex / variable expressions
    let theLanguage = "Java" + "Script";
    window.console.log(theLanguage);
    let courseNumber = 600 + 90;
    window.console.log(courseNumber);


// // STEP 4
// /* 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You.
//    Use Camel Casing and Hungarian Notation when naming identifiers. */
//     var strFirstName, strLastName, strAddress, strCity, strState, intZipCode, intYourAge, strReferralSource, blnMayWeContactYou

// // STEP 5
// /* Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables. */
//     strFirstName = "Carrie";
//     let strCity = "Orange";
//     let strState = "CA", blnMayWeContactYou = true;

// // STEP 6
// /* Create a variable. Add a number and a string and display the coerced result in the browser’s console window. */
//     var strResult;
//     strResult = 55 + " is the speed limit here";
//     window.console.log(strResult);

// // STEP 7
// /* Create two variables. For the first variable, add a Boolean and a string and display the coerced result.
//     For the second variable, add a number and a Boolean and display the coerced result. */
//     let firstCoercedResult = false + " is the correct answer.";
//     window.console.log(firstCoercedResult);
//     let secondCoercedResult = 10 + false;    
//     window.console.log(secondCoercedResult);
//     let thirdCoercedResult = 10 + true;    
//     window.console.log(thirdCoercedResult);

// // STEP 8
// /* Is the following string literal valid? If not, how would you fix it? */
//     let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
//     window.console.log(someString);

// // STEP 9
// /* Create a variable that produces a null value in the console window. Then, create a variable that produces an undefined value in the console window. */
//     let gotAny = null;
//     window.console.log(gotAny);
//     let gotNone;  
//     alert(gotNone);       // this will produce an undefined value because x has never been assigned


// // STEP 10
// /* Use the unary typeof operator on various literals to return the following types within the console window: 
// string, number, Boolean, object, and undefined. */
//     let myCity = "Irvine";
//     window.console.log("myCity datatype is: " + typeof myCity);
//     let luckyNumber = 7;
//     window.console.log("luckyNumber datatype is: " + typeof luckyNumber);
//     let trueFalse = true;
//     window.console.log("trueFalse datatype is: " + typeof trueFalse);
//     let myCar = {make:"BMW", color:"White"};
//     window.console.log("myCar datatype is: " + typeof myCar);
//     let unknown;
//     window.console.log("unknown datatype is: " + typeof unknown);

// // STEP 11
//     let myName = "Carrie Pan";
//     alert('Hello ' + myName + ', welcome to the JavaScript class!');

// // STEP 12
// /* Declare a variable called name and set it equal to your name. Substitute your name in the previous alert string with the variable instead. */
//     var name;
//     name = "Carrie Pan";
//     alert('Hello ' + name + ', welcome to the JavaScript class!');

// // STEP 13
// /* Declare a variable called course and set it equal to “JavaScript”. Rework your alert string so that it 
// displays the string of text but using the variables as opposed to hard coded text. */
//     let aName = "Carrie Pan";
//     let course = "JavaScript";
//     alert("Hello " + aName + ", welcome to the " + course + " class!");

// // STEP 14
// /* Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
// Hello Zak Ruvalcaba.
// Welcome to the JavaScript class! */
//     alert('Hello Carrie Pan.\nWelcome to the JavaScript class!');


// // STEP 15
// /* Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable. */
//     aName = prompt("Please enter your name: ");
//     alert('Hello ' + aName + '.\nWelcome to the JavaScript class!');

// // STEP 16
// /* Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class
// they are taking. The prompt’s response will now be captured in the course variable. */
//     aClass = prompt("Please enter the name of your class:");
//     alert("Hello Carrie Pan.\nWelcome to the " + aClass + ' class!');


// // STEP 17
// /* Declare a variable called x and assign it a value of 10. Declare a variable called y and assign it a value of 20.
// Display the sum of those two numbers in the console window. */
//     let x = 10;
//     let y = 20;
//     window.console.log("x + y = ", (x + y));


// // STEP 18
// /* Declare a variable called x and assign it a value of 20. Add and assign 20 to that variable and display the result in the console window.
// The result should be 40. */
//     var x = 20;
//     x += 20;
//     window.console.log("x = " + x);


// // STEP 19
// /* Declare a variable called x and assign it a value of 20. Multiply and assign 5 to that variable and display the result in the console window.
// The result should be 100. */
//     var x = 20;
//     x *= 5;
//     window.console.log("x = " + x);

// // STEP 20
// /* Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
// Divide and assign 1 to that variable and display the result in the console window.
// The result should be 2. If you got 6.66 try again. */
//     let x = 20 % 3;
//     x /= 1;
//     window.console.log("x = " + x);

// // STEP 21
// /* Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window. */
//     let a = 10, b = 20;
//     let c = a < b;  
//     window.window.console.log("a < b is " + c);


// // STEP 22
// /* Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. 
// The application cannot use the same operators used in the previous application. */
//     let a = 10, b = '10';
//     let c = (a == b);  
//     window.window.console.log("a == b is " + c);