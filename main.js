#! /usr/bin/env node
// Q2.print hello world.
console.log("hello world");
// Q3 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var personName1 = 'Anila';
var message1 = ",Hello,Anila, would you like to learn python today?";
console.log(personName1, message1);
// #! /usr/bin/env node
"use strict";
// Q4 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Anila Ahmed ";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));
// #! /usr/bin/env node    Q5
"use strict";
let famousName = "Albert Inestine";
let message = "once said, “A person who never made a mistake never tried anything new.”";
console.log(famousName, message);
// #! /usr/bin/env node
"use strict";
// Q6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let whitespaceName = "\n\tAnila Ahmed\t\n";
console.log(whitespaceName);
let withoutwhitespaceName = whitespaceName.trim();
console.log(withoutwhitespaceName);
// #! /usr/bin/env node
"use strict";
// Q7 and 8 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
// 
console.log(4 + 4);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);
// #! /usr/bin/env node
"use strict";
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favNum = 10;
let message2 = "this is my fav number";
console.log(message2, favNum);
// #! /usr/bin/env node
"use strict";
// Q10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// addition
console.log(4 + 4);
// sub
console.log(12 - 4);
// multiply
console.log(4 * 2);
// divide
console.log(16 / 2);
// #! /usr/bin/env node
"use strict";
// Q 11 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
let friendsName1 = ["anila", "afshan", "adil"];
friendsName1.forEach(friendname => console.log(friendname));
// #! /usr/bin/env node
"use strict";
// Q 12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let friendsName = ["Ali", "Ana", "asim", "ansa"];
friendsName.forEach(friendName => console.log(`hello ${friendName} how can i help you`));
// #!/usr/bin/env node
"use strict";
// Q13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportationModes = ["car", "bike", "bus", "van"];
transportationModes.forEach(transportName => console.log(`i would like to own a ${transportName}`));
// #!/usr/bin/env node
"use strict";
// Q14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestList1 = ["ali", "usama", "sana", "anum"];
guestList1.forEach(oneGuest => console.log(`assalamoalikum ${oneGuest},please come to dinner with me`));
// #!/usr/bin/env node
"use strict";
// Q15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// // • Print a second set of invitation messages, one for each person who is still in your list.
let guestList = ["ali", "hamza", "ana", "sana"];
let dontCome = guestList[0];
console.log(dontCome, "i will not Come");
guestList.splice(0, 0, "anus");
guestList.forEach(guest => console.log(`salam ${guest},please come on dnner`));
// #!/usr/bin/env node
// Q 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// creating a new guest  list in array.
let guestList2 = ["ali", "hamza", "ana", "sana"];
// making variable of those guest who will not come.0 means index 0 per jo guest ha wo.
let dontCome2 = guestList[0];
console.log(dontCome2, "is not able to come");
// add or remove value from guest list of array by using function of splice firrst 0 show at zero index we add new guest name while at 2nd 1 index show there is  remove of guest name who is now index 1 jo phele zero index per tha ab 1 per ha.
guestList.splice(0, 1, "anus");
console.log("Good new ! we have a big table for dinner");
// use  un shift function for adding value add at starting of array of guest list
guestList.unshift("sataj");
// use push function for adding value add at ending of array of guest list
guestList.push("zain");
// add one new guest at middle index,there is no builden funtion for middle index there fore we use logic
// so in guest list abpove 4 name is there and we add1 name in start and 1 in end so we have to divide with 2 to get middle index.
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "usaman");
console.log("list of new guest");
guestList.forEach(guest => console.log(`salam ${guest},please come on dnner`));
// #!/usr/bin/env node
// Q17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// solution from Q16.
// creating a new guest  list in array.
let guestList3 = ["ali", "hamza", "ana", "sana"];
// making variable of those guest who will not come.0 means index 0 per jo guest ha wo.
let dontCome3 = guestList3[0];
console.log(dontCome, "is not able to come");
// add or remove value from guest list of array by using function of splice firrst 0 show at zero index we add new guest name while at 2nd 1 index show there is  remove of guest name who is now index 1 jo phele zero index per tha ab 1 per ha.
guestList3.splice(0, 1, "anus");
console.log("Good new ! we have a big table for dinner");
// use  un shift function for adding value add at starting of array of guest list
guestList3.unshift("sataj");
// use push function for adding value add at ending of array of guest list
guestList3.push("zain");
// add one new guest at middle index,there is no builden funtion for middle index there fore we use logic
// so in guest list abpove 4 name is there and we add1 name in start and 1 in end so we have to divide with 2 to get middle index.
let middleIndex3 = Math.floor(guestList3.length / 2);
guestList3.splice(middleIndex3, 0, "usaman");
console.log("list of new guest");
guestList3.forEach(guest => console.log(`salam ${guest},please come on dnner`));
// inform that only 2 guest invited for dinner.
console.log("unfortunately,the new dinner table is cancel and i just invite only 2 people");
// use while loop jub tak 2 guest na rah jaye sab ko remove kar do
while (guestList3.length > 2) {
    let removedGuest = guestList3.pop();
    console.log(`sorry,${removedGuest}i cant invite you in dinner`);
}
console.log("invitation to last 2 guest");
guestList3.forEach(lastTwo => console.log(`luckily${lastTwo},you are still invited for dinner`));
// last 2 name remove from guest list.
guestList3.pop();
guestList3.pop();
console.log("empty list:", guestList3);
// #!/usr/bin/env node
//  Q18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// make an array of countries to visit
let countriesToVisit = ["china", "America", "Brazile", "London", "France"];
console.log("orignal order", countriesToVisit);
// make copy of array of country to vist with out change/modifying orignal array list
// sort function use to with changing orignal array covert in to alphabatical order
console.log("alphabetical order:", [...countriesToVisit].sort());
console.log("still in orignal order:", countriesToVisit);
// print the array in reversed order with out modifying the orignal aray by using builden function .reversed and ... use for copy of any  array.
console.log("reversed order:", [...countriesToVisit].reverse());
console.log("still in orignal order:", countriesToVisit);
// we have  changed orignal order now.
console.log("orignal array reversed:", countriesToVisit.reverse());
console.log("back to orignal order :", countriesToVisit.reverse());
console.log("sorted in alphabetical order:", countriesToVisit.sort());
// we have again changed orignal order now.tsc main.ts
console.log("orignal array reversed again:", countriesToVisit.reverse());
// #!/usr/bin/env node
// Q19 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestList0 = ["ali", "usama", "sana", "anum"];
let lengthGuest = guestList0.length;
console.log(`we are inviting total ${lengthGuest} guest`);
// #!/usr/bin/env node
// Q20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let countriesName = ["pak", "india", "china", "america"];
// print the message of list
console.log("list of countries");
// print the values of array in the forms of list
countriesName.forEach(names => console.log(names));
// #!/usr/bin/env node
"use strict";
//  Q21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let itCourse = {
    courseName: "typescript",
    location: "governor house",
    onsiteStudent: "yes"
};
console.log(itCourse);
// #!/usr/bin/env node
"use strict";
// Q22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let errorArray = ["ali", "sana", "nimra", "saba"];
// errorArray index come bz we have just 4index not 5
// // console.log(errorArray[5]);
console.log(errorArray[3]);
// array index solve and answer come saba
// #!/usr/bin/env node
"use strict";
// // Q 23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// check statement is true
let five = 5;
let ten = 10;
console.log("test 1: five is equal to 5");
console.log(five == 5);
console.log("test 2: ten is equal to 10");
console.log(ten == 10);
console.log("test 3: five is less than 10");
console.log(five < 10);
console.log("test 4: ten is greater than 5 ");
console.log(five > 5);
console.log("test 5: five is not equal to 10");
console.log(five != 5);
// check false statement
console.log("test 6: five is not equal to 5");
console.log(five != 5);
console.log("test 7: ten is not equal to 10");
console.log(ten != 10);
console.log("test 8: five is not greater than 10");
console.log(five > 10);
console.log("test 9: ten is less than 5 ");
console.log(five > 5);
console.log("test 10: five is not equal to 10");
console.log(five != 5);
// #!/usr/bin/env node
// Q 24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// define variable
let apple = "apple";
let uppercaseApple = "APPLE";
let teen = 10;
let twenty = 20;
// making an arrray
let fruits = ["apple", "banana", "orange"];
// test for equality  with string
console.log("is apple is equal to equal");
console.log(apple == "apple");
// test for unequality with string
console.log("is apple not equal to equal");
console.log(apple != "apple");
// test using the lower case function.
console.log("is APPLE is equal to apple after converting to lower case");
console.log(uppercaseApple.toLocaleLowerCase() == "apple");
// numerical tests
// equality
console.log("\n is ten is equal to twenty");
console.log(teen == twenty);
// unequality
console.log("\n is ten is equal to twenty");
console.log(teen != twenty);
// greater than
console.log("\n is ten is greater than zero");
console.log(teen > 0);
// not greater than
console.log("\n is twenty is not greater than zero");
console.log(twenty > 0);
// greater than and equal to
console.log("ten is greaterthan and equal to 5?");
console.log(teen >= 5);
// less than and equal to
console.log("ten is greaterthan and equal to 5?");
console.log(twenty <= 5);
// using a'and" ,or operator
// using and
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > teen);
// 
console.log("\n 20 is greater than 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// test whether an items is include in array
console.log("it orange include in my array");
console.log(fruits.includes("orange"));
// test whether an items is not include in array
console.log("it orange not include in my array");
console.log(!fruits.includes("orange"));
// #!/usr/bin/env node
// Q25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alienColor = "green";
if (alienColor === "green") {
    console.log("player earned 5 points.");
}
if (alienColor === "blue") {
    console.log("player earned 5 points.");
}
// #!/usr/bin/env node
"use strict";
// Q26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alienColor1 = "green";
if (alienColor1 === "green") {
}
else {
    console.log("player just earned 10 points.");
}
// second version
if (alienColor1 === "blue") {
    console.log("i am come from if statement");
}
else {
    console.log("i am come from else statement");
}
// #!usr/env/bin node 
// q27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien
let alienColor0 = "green";
if (alienColor0 === "green") {
    console.log("you shot down green alien you have earned 5 point");
}
else if (alienColor0 === "red") {
    console.log("you shot down red alien you have earned 10 point");
}
else if (alienColor0 === "blue") {
    console.log("you shot down blue alien you have earned 15 point");
}
// version 2
let alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("you shot down green alien you have earned 5 point");
}
else if (alienColor2 === "yellow") {
    console.log("you shot down yellow alien you have earned 10 point");
}
else if (alienColor2 === "blue") {
    console.log("you shot down blue alien you have earned 15 point");
}
// version 3
let alienColor3 = "blue";
if (alienColor3 === "green") {
    console.log("you shot down green alien you have earned 5 point");
}
else if (alienColor3 === "yellow") {
    console.log("you shot down yellow alien you have earned 10 point");
}
else if (alienColor3 === "blue") {
    console.log("you shot down blue alien you have earned 15 point");
}
// #!/usr/bin/env node
"use strict";
//  Q28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// Object.defineProperty(exports, "__esModule", { value: true });
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
// creating a variable
let age = 66;
if (age < 2) {
    console.log("you are a baby");
}
else if (age >= 2 && age < 4) {
    console.log("you are a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("you are a kid");
}
else if (age >= 13 && age < 20) {
    console.log("you are a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("you are a adults");
}
else if (age >= 65) {
    console.log("you are a elders");
}
// #!usr/env/bin node
// Q29 Favorite Fruit: Make a array of your favorite fruits, 
// and then write a series of independent if statements that 
// check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it
//  favorite_fruits.
// • Write five if statements. Each should check whether a 
// certain kind of fruit is in your array. If the fruit is in 
// your array, the if block should print a statement, 
// such as You really like bananas!
// creating an array
let favouriteFruit = ["apple", "mango", "orange"];
// 1st condition
if (favouriteFruit.includes("mango")) {
    console.log("i really likes mango");
}
// 2nd condition
if (favouriteFruit.includes("apple")) {
    console.log("i really likes apple");
}
// 3rd condition
if (favouriteFruit.includes("orange")) {
    console.log("i really likes orange");
}
// 4th condition
if (favouriteFruit.includes("banana")) {
    console.log("i really likes banana");
} // 5th condition
if (favouriteFruit.includes("chikoo")) {
    console.log("i really likes chikoo");
}
// #!/usr/env/bin node
// //Q30  Hello Admin: Make a array of five or more usernames, 
// including the name 'admin'. Imagine you are writing code
//  that will print a greeting to each user after they log in
//   to a website. Loop through the array, and print a greeting 
//   to each user:
// // • If the username is 'admin', print a special greeting, 
// such as Hello admin, would you like to see a status report?
// // • Otherwise, print a generic greeting, such as Hello Eric, 
// thank you for logging in again.
let userName = ["sam", "sani", "admin", "sad", "shan"];
// using for each loop on array
userName.forEach(oneUser => {
    if (oneUser === "admin") {
        console.log(`Hello ${oneUser},would you like to see status report`);
    }
    else {
        console.log(`Hello ${oneUser},thank you for logging in again`);
    }
});
"use strict";
// //Q 31  No Users: Add an if test to Exercise 28 to make sure the 
// list of users is not empty.
// // • If the list is empty, print the message We need to 
// find some users!
// // • Remove all of the usernames from your array, 
// and make sure the correct message is printed.
let userName4 = ["mahad", "sad", "sani", "fawad", "khan", "admin"];
// userName=[];
if (userName4.length === 0) {
    console.log("your array is empty we need find some users!");
}
else {
    userName4.forEach(oneUser => {
        if (oneUser === "admin") {
            console.log(`Hello ${oneUser},would you like to see status report`);
        }
        else {
            console.log(`Hello ${oneUser},thank you for logging in again`);
        }
    });
}
userName4 = [];
"use strict";
// //  Q32 No Users: Add an if test to Exercise 28 to make sure the 
// list of users is not empty.
// // • If the list is empty, print the message We need to 
// find some users!
// // • Remove all of the usernames from your array, 
// and make sure the correct message is printed.
let userName9 = ["mahad", "sad", "sani", "fawad", "khan", "admin"];
// userName=[];
if (userName.length === 0) {
    console.log("your array is empty we need find some users!");
}
else {
    userName9.forEach(oneUser => {
        if (oneUser === "admin") {
            console.log(`Hello ${oneUser},would you like to see status report`);
        }
        else {
            console.log(`Hello ${oneUser},thank you for logging in again`);
        }
    });
}
userName9 = [];
// #!usr/env/bin node
// Q33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// Store the numbers 1 through 9 in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
numbers.forEach(number => {
    let ordinalEnding;
    // Determine the ordinal ending
    if (number === 1) {
        ordinalEnding = 'st';
    }
    else if (number === 2) {
        ordinalEnding = 'nd';
    }
    else if (number === 3) {
        ordinalEnding = 'rd';
    }
    else {
        ordinalEnding = 'th';
    }
    // Print the number with its ordinal ending
    console.log(`${number}${ordinalEnding}`);
});
// #!usr/env/bin node
//Q34  Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// Store the names of three favorite pizzas in an array
let favoritePizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
// Loop through the array and print the name of each pizza with a sentence
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}
// Add a line at the end stating how much you like pizza
console.log("I really love pizza!");
// #!/usr/bin/env node
// Q35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// Store the names of three animals in an array
let animals = ['Dog', 'Cat', 'Rabbit'];
// Loop through the array and print the name of each animal with a sentence
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
// Add a line at the end stating what these animals have in common
console.log("Any of these animals would make a great pet!");
// #! /usr/bin/env node
// Q36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// Function to summarize the size and message on a shirt
function make_shirt(size, message) {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
}
// Calling the function with example arguments
make_shirt('Large', 'I love TypeScript!');
make_shirt('Medium', 'Code is poetry.');
make_shirt('Small', 'Stay curious, keep learning.');
//   #! /usr/bin/env node
// // Q37 Large Shirts: Modify the make_shirt()
//  function so that shirts are large by default with 
//  a message that reads I love TypeScript. 
//  Make a large shirt and a medium shirt with the 
//  default message, and a shirt of any size with a different
//   message.
function make_shirt1(size = "Large", message = "I love TypeScript") {
    console.log(`The shirt size is: ${size} and it has the message: "${message}" printed on it.`);
}
// Example usage:
// Create a large shirt with the default message
make_shirt1();
// Create a medium shirt with the default message
make_shirt1("Medium");
// Create a shirt of any size with a different message
make_shirt1("Small", "TypeScript is awesome!");
make_shirt1("Extra Large", "Coding is fun!");
// #! /usr/bin/env node
// // Q38 Cities: Write a function called describe_city() 
// that accepts the name of a city and its country. 
// The function should print a simple sentence, such as 
// Karachi is in Pakistan. Give the parameter for the country a 
// default value. Call your function for three different cities, 
// at least one of which is not in the default country.
// Function to describe a city and its country
function describe_city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}
// Calling the function for three different cities
describe_city('Karachi');
describe_city('Lahore');
describe_city('New York', 'USA');
//   #! /usr/bin/env node
// Q39 City Names: Write a function called city_country() that takes 
// in the name of a city and its country. 
// The function should return a string 
// formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three 
// city-country pairs, and print the value 
// that’s returned.
// Function to describe a city and its country
function describe_city1(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}
// Calling the function for three different cities
describe_city1('Karachi');
describe_city1('Lahore');
describe_city1('New York', 'USA');
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Example usage:
const album1 = make_album("Artist One", "Album One");
const album2 = make_album("Artist Two", "Album Two");
const album3 = make_album("Artist Three", "Album Three", 10);
console.log(album1);
console.log(album2);
console.log(album3);
// Making a new function call that includes the number of tracks
const album4 = make_album("Artist Four", "Album Four", 15);
console.log(album4);
//   #! /usr/bin/env node
// // Q41 Magicians: Make a array of magician’s 
// names. Pass the array to a function called show_magicians(), which prints the name of each 
// magician in the array.
// Array of magician's names
let magicians = ['Harish', 'Daood', 'faris', 'Taslim', 'Danish'];
// Function to print the name of each magician in the array
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Call the function with the array of magician's names
show_magicians(magicians);
// #! /usr/bin/env node
//Q 42 Great Magicians: Start with a copy of 
// your program from Exercise 39. Write a 
// function called make_great() that modifies
//  the array of magicians by adding the
//   phrase the Great to each magician’s name. 
//   Call show_magicians() to see that the 
//   list has actually been modified.
// Array of magician's names
let magicians1 = ['Harish', 'Daood', 'faris', 'Tanveer', 'Danial'];
// Function to print the name of each magician in the array
function show_magicians1(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Function to add 'the Great' to each magician's name
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
// Call make_great to modify the array
make_great(magicians);
// Call show_magicians to see the modified list
show_magicians(magicians);
// #! /usr/bin/env node
//  Q 43 Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of 
// magicians’ names. Because the original array will be 
// unchanged, return the new array and store it in a separate 
// array. Call show_magicians() with each array to show that you 
// have one array of the original names and one array with the 
// Great added to each magician’s name.
// Array of magician's names
let magicians2 = ['Hadi', 'farooq', 'sad', 'Tasleem', 'Danial'];
// Function to print the name of each magician in the array
function show_magicians2(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Function to add 'the Great' to each magician's name and return a new array
function make_great0(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
// Call show_magicians with the original array
console.log("Original Magicians:");
show_magicians2(magicians);
// Create a modified array using make_great
let great_magicians = make_great0([...magicians]);
// Call show_magicians with the modified array
console.log("\nGreat Magicians:");
show_magicians2(great_magicians);
// Verify that the original array is unchanged
console.log("\nUnchanged Original Magicians:");
show_magicians2(magicians);
// #! /usr/bin/env node
// Q44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times,
//  using a different number of arguments each time.
function makeSandwich(...items) {
    console.log("Your sandwich includes the following items:");
    items.forEach(item => console.log(`- ${item}`));
    console.log("Enjoy your sandwich!\n");
}
// Calling the function three times with different numbers of ingredients
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Bacon", "Avocado");
makeSandwich("Peanut Butter", "Jelly");
function createCar(manufacturer, model, ...options) {
    // Initialize the car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional properties to the car object
    for (let [key, value] of options) {
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional name-value pairs
let myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2021], ['sunroof', true]);
// Print the object to ensure all information is stored correctly
console.log(myCar);
export {};
