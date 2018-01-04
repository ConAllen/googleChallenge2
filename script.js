/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement
var number = 2;

if ( number % 2 === 0) {
    console.log("even");

} else {
console.log("odd");
}

/////////////////////////////////////////////////////////////////////////////

/*
 * Programming Quiz: Musical Groups (3-3)
 */


var musicians = 20;
if (musicians === 1) {
    console.log("solo");
}// your code goes here
else if (musicians === 2) {
    console.log("duet");
}// your code goes here
else if (musicians === 3) {
    console.log("trio");
}// your code goes here
else if (musicians === 4) {
    console.log("quartet");
}// your code goes here
else if (musicians > 4) {
    console.log("this is a large group");
}// your code goes here

else {
    console.log("not a group");
}

/////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code

var room = "gallery";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;

    if (room === "gallery") {
       weapon = "trophy";
          if (suspect === "Ms. Van Cleve") {
          solved = true;
        }
    } else if (room === "dining room") {
        weapon = "knife";
          if (suspect === "Mr. Parkes") {
          solved = true;
          }
    } else if (room === "billiards room") {
        weapon = "pool stick";
          if (suspect = "Mrs. Sparr") {
          solved = true;
          }
    } else {
       weapon = "poison";
          if (suspect === "Mr. Kalehoff") {
          solved = true;
          }
        }

       if (solved) {
  	       console.log(suspect +" did it in the "+ room + " with the "+ weapon +"!");
  }
  /////////////////////////////////////////////////////////////////////////////

  /*
   * Programming Quiz - Checking Your Balance (3-5)
   */

  // change the values of `balance`, `checkBalance`, and `isActive` to test your code
  var balance = 325.00;
  var checkBalance = true;
  var isActive = false;

  if (!checkBalance) {
      console.log("Thank you. Have a nice day!");
  } else if (isActive && balance > 0) {
      console.log("Your balance is $" + balance.toFixed(2) + ".");
  } else if (!isActive) {
      console.log("Your account is no longer active.");
  } else if (balance === 0) {
      console.log("Your account is empty.");
  } else if (balance < 0) {
       console.log("Your balance is negative. Please contact bank.")
  }

  /////////////////////////////////////////////////////////////////////////////

  /*
   * Programming Quiz: Ice Cream (3-6)
   *
   * Write a single if statement that logs out the message:
   *
   * "I'd like two scoops of __________ ice cream in a __________ with __________."
   *
   * ...only if:
   *   - flavor is "vanilla" or "chocolate"
   *   - vessel is "cone" or "bowl"
   *   - toppings is "sprinkles" or "peanuts"
   *
   * We're only testing the if statement and your boolean operators.
   * It's okay if the output string doesn't match exactly.
   */

  // change the values of `flavor`, `vessel`, and `toppings` to test your code
  var flavor = "strawberry";
  var vessel = "cone";
  var toppings = "cookies";

  // Add your code here

  if (((flavor === "vanilla" || flavor === "chocolate") &&
      (vessel === "cone" || vessel === "bowl") &&
      (toppings === "sprinkles" || toppings === "peanuts"))){
          console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
      }

/////////////////////////////////////////////////////////////////////////////

/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 24;
var shirtLength = 30;
var shirtSleeve = 8.71;

// your code goes here
if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
  console.log("S");
}else if (((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength< 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63))){
  console.log("M");
}else if (((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength< 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88))){
  console.log("L");
}else if (((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength< 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63))){
  console.log("XL");
}else if (((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength< 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13))){
  console.log("2XL");
}else if (((shirtWidth >= 28 ) && (shirtLength >= 34) && (shirtSleeve >= 10.13))){
  console.log("3XL");
} else {
    console.log("N/A");
}
/////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - var color;
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

// var category = eatsPlants && eatsAnimals ? "omnivore" : eatsPlants ? "herbivore" : eatsAnimals ? "carnivore" : undefined;

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : undefined);

console.log(category);

// conditional ? (if condition is true) : (if condition is false)

/////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
var education = "an Associate's degree";

// set the value of this based on a person's education
var salary;

// your code goes here


switch (education) {
 case "no high school diploma":
   salary ="$25,636";
   break;
  case "a high school diploma":
    salary = "$35,256";
   break;
  case "an Associate's degree":
    salary = "$41,496";
     break;
  case "a Bachelor's degree":
    salary ="$59,124";
     break;
  case "a Master's degree":
    salary ="$69,732";
     break;
  case "a Professional degree":
    salary ="$89,960";
     break;
  case "a Doctoral degree":
    salary = "$84,396";

}
            // In 2015, a person with __________ earned an average of __________/year.
console.log("In 2015, a person with " + education + " earned an average of " + salary + "/year.")

////////////////////////////// IF ELSE /////////////////////////////////////////////



var option = 3;

if (option === 1) {
  console.log("you selected 1");
} else if (option === 2) {
  console.log("you selected 2");
} else if (option === 3) {
  console.log("you selected 3");
}

if (option === 1) {
  console.log("You selected option 1.");
} else if (option === 2) {
  console.log("You selected option 2.");
} else if (option === 3) {
  console.log("You selected option 3.");
}



///////////////////////// Switch statements /////////////////////////////////////




switch (option) {
  case 1:
    console.log("You selected option 1.");
  case 2:
    console.log("You selected option 2.");
  case 3:
    console.log("You selected option 3.");
  case 4:
    console.log("You selected option 4.");
  case 5:
    console.log("You selected option 5.");
  case 6:
    console.log("You selected option 6.");
}



var option = 3;

switch (option) {
  case 1:
  console.log("you selected 1");
    break;
  default:
switch (option) {
  case 2:
  console.log("you selected 2")
    break;
switch (option) {
  case 3:
  console.log("you selected 3")
    break;

}

var option = 2;

switch (option) {
  case 1:
console.log("you selected 1");
    break;
  case 2:
console.log("you selected 2");

case 3:
console.log("you selected 3");



var x = 1;
while (x < 10) {
  x = x + 1;
console.log(x);
}

///////////////////////// FIZZ Buzz //////////////////////////////////////////

var x =1;

while ( x <= 25){

if (( x % 3 === 0 ) && (y % 5 === 0)) {
  console.log( "conzbuzz");
} else if (x % 3 === 0) {
    console.log("conz");
  } else if (x % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(x);
  }

  x = x + 1;
}


///////////////////////////////  //////////////////////////////////////////


/*
 * Programming Quiz: Find my Seat (4-8)
 *
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0
 * The last row-seat combination will be 25-99
 *
 * Things to note:
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here

for(var x = 0; x<=25; x++){
    for(var y = 0; y <=99; y ++){
        console.log(x+"-"+y);
    }
}


/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement
var number = 2;

if ( number % 2 === 0) {
    console.log("even");

} else {
console.log("odd");
}

/////////////////////////////////////////////////////////////////////////////

/*
 * Programming Quiz: Musical Groups (3-3)
 */


var musicians = 20;
if (musicians === 1) {
    console.log("solo");
}// your code goes here
else if (musicians === 2) {
    console.log("duet");
}// your code goes here
else if (musicians === 3) {
    console.log("trio");
}// your code goes here
else if (musicians === 4) {
    console.log("quartet");
}// your code goes here
else if (musicians > 4) {
    console.log("this is a large group");
}// your code goes here

else {
    console.log("not a group");
}

/////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code

var room = "gallery";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;

    if (room === "gallery") {
       weapon = "trophy";
          if (suspect === "Ms. Van Cleve") {
          solved = true;
        }
    } else if (room === "dining room") {
        weapon = "knife";
          if (suspect === "Mr. Parkes") {
          solved = true;
          }
    } else if (room === "billiards room") {
        weapon = "pool stick";
          if (suspect = "Mrs. Sparr") {
          solved = true;
          }
    } else {
       weapon = "poison";
          if (suspect === "Mr. Kalehoff") {
          solved = true;
          }
        }

       if (solved) {
  	       console.log(suspect +" did it in the "+ room + " with the "+ weapon +"!");
  }
  /////////////////////////////////////////////////////////////////////////////

  /*
   * Programming Quiz - Checking Your Balance (3-5)
   */

  // change the values of `balance`, `checkBalance`, and `isActive` to test your code
  var balance = 325.00;
  var checkBalance = true;
  var isActive = false;

  if (!checkBalance) {
      console.log("Thank you. Have a nice day!");
  } else if (isActive && balance > 0) {
      console.log("Your balance is $" + balance.toFixed(2) + ".");
  } else if (!isActive) {
      console.log("Your account is no longer active.");
  } else if (balance === 0) {
      console.log("Your account is empty.");
  } else if (balance < 0) {
       console.log("Your balance is negative. Please contact bank.")
  }

  /////////////////////////////////////////////////////////////////////////////

  /*
   * Programming Quiz: Ice Cream (3-6)
   *
   * Write a single if statement that logs out the message:
   *
   * "I'd like two scoops of __________ ice cream in a __________ with __________."
   *
   * ...only if:
   *   - flavor is "vanilla" or "chocolate"
   *   - vessel is "cone" or "bowl"
   *   - toppings is "sprinkles" or "peanuts"
   *
   * We're only testing the if statement and your boolean operators.
   * It's okay if the output string doesn't match exactly.
   */

  // change the values of `flavor`, `vessel`, and `toppings` to test your code
  var flavor = "strawberry";
  var vessel = "cone";
  var toppings = "cookies";

  // Add your code here

  if (((flavor === "vanilla" || flavor === "chocolate") &&
      (vessel === "cone" || vessel === "bowl") &&
      (toppings === "sprinkles" || toppings === "peanuts"))){
          console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
      }

/////////////////////////////////////////////////////////////////////////////

/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 24;
var shirtLength = 30;
var shirtSleeve = 8.71;

// your code goes here
if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
  console.log("S");
}else if (((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength< 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63))){
  console.log("M");
}else if (((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength< 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88))){
  console.log("L");
}else if (((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength< 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63))){
  console.log("XL");
}else if (((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength< 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13))){
  console.log("2XL");
}else if (((shirtWidth >= 28 ) && (shirtLength >= 34) && (shirtSleeve >= 10.13))){
  console.log("3XL");
} else {
    console.log("N/A");
}
/////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - var color;
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

// var category = eatsPlants && eatsAnimals ? "omnivore" : eatsPlants ? "herbivore" : eatsAnimals ? "carnivore" : undefined;

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : undefined);

console.log(category);

// conditional ? (if condition is true) : (if condition is false)

/////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
var education = "an Associate's degree";

// set the value of this based on a person's education
var salary;

// your code goes here


switch (education) {
 case "no high school diploma":
   salary ="$25,636";
   break;
  case "a high school diploma":
    salary = "$35,256";
   break;
  case "an Associate's degree":
    salary = "$41,496";
     break;
  case "a Bachelor's degree":
    salary ="$59,124";
     break;
  case "a Master's degree":
    salary ="$69,732";
     break;
  case "a Professional degree":
    salary ="$89,960";
     break;
  case "a Doctoral degree":
    salary = "$84,396";

}
            // In 2015, a person with __________ earned an average of __________/year.
console.log("In 2015, a person with " + education + " earned an average of " + salary + "/year.")

////////////////////////////// IF ELSE /////////////////////////////////////////////



var option = 3;

if (option === 1) {
  console.log("you selected 1");
} else if (option === 2) {
  console.log("you selected 2");
} else if (option === 3) {
  console.log("you selected 3");
}

if (option === 1) {
  console.log("You selected option 1.");
} else if (option === 2) {
  console.log("You selected option 2.");
} else if (option === 3) {
  console.log("You selected option 3.");
}



///////////////////////// Switch statements /////////////////////////////////////




switch (option) {
  case 1:
    console.log("You selected option 1.");
  case 2:
    console.log("You selected option 2.");
  case 3:
    console.log("You selected option 3.");
  case 4:
    console.log("You selected option 4.");
  case 5:
    console.log("You selected option 5.");
  case 6:
    console.log("You selected option 6.");
}



var option = 3;

switch (option) {
  case 1:
  console.log("you selected 1");
    break;
  default:
switch (option) {
  case 2:
  console.log("you selected 2")
    break;
switch (option) {
  case 3:
  console.log("you selected 3")
    break;

}

var option = 2;

switch (option) {
  case 1:
console.log("you selected 1");
    break;
  case 2:
console.log("you selected 2");

case 3:
console.log("you selected 3");



var x = 1;
while (x < 10) {
  x = x + 1;
console.log(x);
}

///////////////////////// FIZZ Buzz //////////////////////////////////////////

var x =1;

while ( x <= 25){

if (( x % 3 === 0 ) && (y % 5 === 0)) {
  console.log( "conzbuzz");
} else if (x % 3 === 0) {
    console.log("conz");
  } else if (x % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(x);
  }

  x = x + 1;
}


///////////////////////////////  //////////////////////////////////////////


/*
 * Programming Quiz: Find my Seat (4-8)
 *
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0
 * The last row-seat combination will be 25-99
 *
 * Things to note:
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here

for(var x = 0; x<=25; x++){
    for(var y = 0; y <=99; y ++){
        console.log(x+"-"+y);
    }
}


/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

// your code goes here


function laugh() {
    var message = "hahahahahahahahahaha!";
    return message;
}
console.log(laugh());

/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 */

function laugh (num) {
    var ha = "";
    for(i=0; i < num; i++) {
        ha = ha + "ha"
    };
    return ha + "!";
} console.log(laugh(3));


/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement
var number = 2;

if ( number % 2 === 0) {
    console.log("even");

} else {
console.log("odd");
}

/////////////////////////////////////////////////////////////////////////////

/*
 * Programming Quiz: Musical Groups (3-3)
 */


var musicians = 20;
if (musicians === 1) {
    console.log("solo");
}// your code goes here
else if (musicians === 2) {
    console.log("duet");
}// your code goes here
else if (musicians === 3) {
    console.log("trio");
}// your code goes here
else if (musicians === 4) {
    console.log("quartet");
}// your code goes here
else if (musicians > 4) {
    console.log("this is a large group");
}// your code goes here

else {
    console.log("not a group");
}

/////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code

var room = "gallery";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;

    if (room === "gallery") {
       weapon = "trophy";
          if (suspect === "Ms. Van Cleve") {
          solved = true;
        }
    } else if (room === "dining room") {
        weapon = "knife";
          if (suspect === "Mr. Parkes") {
          solved = true;
          }
    } else if (room === "billiards room") {
        weapon = "pool stick";
          if (suspect = "Mrs. Sparr") {
          solved = true;
          }
    } else {
       weapon = "poison";
          if (suspect === "Mr. Kalehoff") {
          solved = true;
          }
        }

       if (solved) {
  	       console.log(suspect +" did it in the "+ room + " with the "+ weapon +"!");
  }
  /////////////////////////////////////////////////////////////////////////////

  /*
   * Programming Quiz - Checking Your Balance (3-5)
   */

  // change the values of `balance`, `checkBalance`, and `isActive` to test your code
  var balance = 325.00;
  var checkBalance = true;
  var isActive = false;

  if (!checkBalance) {
      console.log("Thank you. Have a nice day!");
  } else if (isActive && balance > 0) {
      console.log("Your balance is $" + balance.toFixed(2) + ".");
  } else if (!isActive) {
      console.log("Your account is no longer active.");
  } else if (balance === 0) {
      console.log("Your account is empty.");
  } else if (balance < 0) {
       console.log("Your balance is negative. Please contact bank.")
  }

  /////////////////////////////////////////////////////////////////////////////

  /*
   * Programming Quiz: Ice Cream (3-6)
   *
   * Write a single if statement that logs out the message:
   *
   * "I'd like two scoops of __________ ice cream in a __________ with __________."
   *
   * ...only if:
   *   - flavor is "vanilla" or "chocolate"
   *   - vessel is "cone" or "bowl"
   *   - toppings is "sprinkles" or "peanuts"
   *
   * We're only testing the if statement and your boolean operators.
   * It's okay if the output string doesn't match exactly.
   */

  // change the values of `flavor`, `vessel`, and `toppings` to test your code
  var flavor = "strawberry";
  var vessel = "cone";
  var toppings = "cookies";

  // Add your code here

  if (((flavor === "vanilla" || flavor === "chocolate") &&
      (vessel === "cone" || vessel === "bowl") &&
      (toppings === "sprinkles" || toppings === "peanuts"))){
          console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
      }

/////////////////////////////////////////////////////////////////////////////

/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 24;
var shirtLength = 30;
var shirtSleeve = 8.71;

// your code goes here
if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
  console.log("S");
}else if (((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength< 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63))){
  console.log("M");
}else if (((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength< 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88))){
  console.log("L");
}else if (((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength< 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63))){
  console.log("XL");
}else if (((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength< 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13))){
  console.log("2XL");
}else if (((shirtWidth >= 28 ) && (shirtLength >= 34) && (shirtSleeve >= 10.13))){
  console.log("3XL");
} else {
    console.log("N/A");
}
/////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - var color;
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

// var category = eatsPlants && eatsAnimals ? "omnivore" : eatsPlants ? "herbivore" : eatsAnimals ? "carnivore" : undefined;

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : undefined);

console.log(category);

// conditional ? (if condition is true) : (if condition is false)

/////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
var education = "an Associate's degree";

// set the value of this based on a person's education
var salary;

// your code goes here


switch (education) {
 case "no high school diploma":
   salary ="$25,636";
   break;
  case "a high school diploma":
    salary = "$35,256";
   break;
  case "an Associate's degree":
    salary = "$41,496";
     break;
  case "a Bachelor's degree":
    salary ="$59,124";
     break;
  case "a Master's degree":
    salary ="$69,732";
     break;
  case "a Professional degree":
    salary ="$89,960";
     break;
  case "a Doctoral degree":
    salary = "$84,396";

}
            // In 2015, a person with __________ earned an average of __________/year.
console.log("In 2015, a person with " + education + " earned an average of " + salary + "/year.")

////////////////////////////// IF ELSE /////////////////////////////////////////////



var option = 3;

if (option === 1) {
  console.log("you selected 1");
} else if (option === 2) {
  console.log("you selected 2");
} else if (option === 3) {
  console.log("you selected 3");
}

if (option === 1) {
  console.log("You selected option 1.");
} else if (option === 2) {
  console.log("You selected option 2.");
} else if (option === 3) {
  console.log("You selected option 3.");
}



///////////////////////// Switch statements /////////////////////////////////////




switch (option) {
  case 1:
    console.log("You selected option 1.");
  case 2:
    console.log("You selected option 2.");
  case 3:
    console.log("You selected option 3.");
  case 4:
    console.log("You selected option 4.");
  case 5:
    console.log("You selected option 5.");
  case 6:
    console.log("You selected option 6.");
}



var option = 3;

switch (option) {
  case 1:
  console.log("you selected 1");
    break;
  default:
switch (option) {
  case 2:
  console.log("you selected 2")
    break;
switch (option) {
  case 3:
  console.log("you selected 3")
    break;

}

var option = 2;

switch (option) {
  case 1:
console.log("you selected 1");
    break;
  case 2:
console.log("you selected 2");

case 3:
console.log("you selected 3");



var x = 1;
while (x < 10) {
  x = x + 1;
console.log(x);
}

///////////////////////// FIZZ Buzz //////////////////////////////////////////

var x =1;

while ( x <= 25){

if (( x % 3 === 0 ) && (y % 5 === 0)) {
  console.log( "conzbuzz");
} else if (x % 3 === 0) {
    console.log("conz");
  } else if (x % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(x);
  }

  x = x + 1;
}


///////////////////////////////  //////////////////////////////////////////


/*
 * Programming Quiz: Find my Seat (4-8)
 *
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0
 * The last row-seat combination will be 25-99
 *
 * Things to note:
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here

for(var x = 0; x<=25; x++){
    for(var y = 0; y <=99; y ++){
        console.log(x+"-"+y);
    }
}


/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

// your code goes here


function laugh() {
    var message = "hahahahahahahahahaha!";
    return message;
}
console.log(laugh());

/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 */

function laugh (num) {
    var ha = "";
    for(i=0; i < num; i++) {
        ha = ha + "ha"
    };
    return ha + "!";
} console.log(laugh(3));





/*  Prime Number Checker */



function isPrime(integer) {

     for(var x = 2; x < integer; x ++) {
          if (integer % x === 0) {
               console.log(integer + ' is divisble by ' + x );

                   return false;

          }
       return true;
     }

   }





   function addTen(x) {
  return x + 10;
}

function divideByThree(y) {
  return y / 3;
}

var result = addTen(2);
console.log(divideByThree(result));














/*Scope Librarian Example
TIP: The JavaScript language is constantly improving. One of these updates introduces a new type of scope, called Block scope. Check out our ES6 course to learn more!
Q 1 OF 2
Which of these variables a, b, c, or d, is defined in the global scope?*/

var a = 1;
function x() {
  var b = 2;
  function y() {
    var c = 3;
    function z() {
      var d = 4;
    }
    z();
  }
  y();
}

x();


// Where can you print out the value of variable c without resulting in an error?

var a = 1;
function x() {
  var b = 2;
  function y() {
    var c = 3;
    function z() {
      var d = 4;
    }
    z();
  }
  y();
}

x();



/////////////////////

function findAvg(a, b) {

var answer = (a + b ) / 2;

return answer;

}

findAvg(10,100);


function sayHi(name) {

var greeting = "hello";
console.log( greeting + " " name);

}

sayHi(con);


/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(width){
    var triangle = "";
    for(var i = 1; i <= width; i ++) {
     triangle += makeLine(i);

    }
    return triangle;
}

console.log(buildTriangle(10));

// your code goes here.  Make sure you call makeLine() in your own code.




/*
 * Programming Quiz: Reverse string function
*/


function reverseString(reverseMe) {

  var reversed = "";

  for (var i = reverseMe.lenght - 1; i >= 0; i --) {

      reversed += reverseMe[i];

  };

return reversed;

}
console.log(reverseString("ConAllen"));
reverseMe("ConAllen");

// declare
// variable the string
// loop over the string
//

/*
 * Passing functions into functions
*/

var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);


// Function expression that assigns the function displayFavorite
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");




var favoriteMovie = function displayMovie(movieName) {

      console.log( "My fav movie is "  + movieName);
};

function movies(messageFunction, name ) {
  messageFunction(name);

}

movies(favoriteMovie, "blade runner");


///////////////////////////////////    Functions as parameters      ///////////


var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);





var conSays = function(num){
  var conMsg = "";
  for(var i = 0; i < num; i++){
    conMsg += " absolute rup "
  };
  return conMsg;
}

function whatsUp(callBackFunct) {
  return "wan " + callBackFunct(4);
}

whatsUp(conSays);

/////////////////////////////////////////////// Arays //////////////////////////



var donuts = ["glazed",
              "chocolate frosted", "Boston creme",
              "glazed cruller", "cinnamon sugar",
              "sprinkled"];

donuts.push("double choco");





var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"];

donuts.pop(); // pops "powdered" off the end of the `donuts` array
donuts.pop(); // pops "sprinkled" off the end of the `donuts` array
donuts.pop(); // pops "cinnamon sugar" off the end of the `donuts` array

///////////////////////////// POP  ////////////////////////////////////////////


var donuts = ["glazed", "strawberry frosted", "powdered", "Boston creme"];

donuts.pop();
donuts.pop();
donuts.pop();
donuts.push("maple walnut");
donuts.pop();
donuts.push("sprinkled");




/////// Splice /////////////

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

myFish.splice(2, 0, 'drum'); // insert 'drum' at 2-index position
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

myFish.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
// myFish is ["angel", "clown", "mandarin", "sturgeon"]


var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]



/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// your code goes here
rainbow.splice(2,1);
rainbow.push('Yellow','Green');
rainbow.push('Purple');

console.log(rainbow);


/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

function hasEnoughPlayers(team) {
      if (team.length >= 7) {
        return true;
    } else {
        return false;
    }

}


var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));



/*
 * Programming Quiz: Joining the Crew (6-6)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

// your code goes here

crew.push(doctor, sister, shepherd);

console.log(crew);


////////////////// Loop Arrays ////////////////////////////////////////////////


var donuts = ["jelly donut", "choco donut", "Boston Cream"];


for(var i = 0; i < donuts.length; i ++) {
     donuts[i] += " Hole";
     donuts[i] = donuts[i].toUpperCase();
}

////////////////// for Loop Arrays ////////////////////////////////////////////////






var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// regular function
function printDonuts (donut) {

  donut += " hole";
  donuts[i] = donuts[i].toUpperCase();
  console.log(donut);

}
donuts.forEach(printDonuts);

// inline function
  donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});



/////////////////////////////////////////////////////////////////////////



words = ["cat", "in", "hat"];

words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});





friends = ["con", "chris", "lyn"];

friends.forEach(function( word, num, all) {
  console.log( "word " + num + " is " + all.toString() + " is " + word);
})


/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function( num, index, array ){
    if( num % 3 === 0) {
        array[index] = num += 100;
    }
});
console.log(test);

/////////////////////////// for loop //////////////////////////



var array = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

for (var i = 0; i <= array.length; i = i + 3){
  console.log(array[i]);

  if (i === 2){
    break;
  }
}


/////////////////////////// forEach loop //////////////////////////

var myArray = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

myArray.forEach(function( elem ) {
  console.log( elem );
});

/////////////////////////// map array loop //////////////////////////

var myArray = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

var newArray = myArray.map(function(elem) {

    elem = elem + 100;
    return elem;
});

console.log(newArray)




var donuts = ["jelly donut", "chocolate donut", "glazed donut"]

var newDonut = donuts.map(function( donut ) {

    donut += "HOLE";
    donut = donut.toUpperCase();

    return donut;

});

console.log(newDonut)


/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function( tip ){

    tip = tip * 0.15 + tip;

    return Number(tip.toFixed(2));
});

console.log(totals);


////////////////////// 2 D Row arrays ////////////////////////////////

var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

// here, donutBox.length refers to the number of rows of donuts
for (var row = 0; row < donutBox.length; row++) {
  console.log(donutBox[row]);
}


///////////////  rows and columns ////////////////

for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}






for ( var row = 0; row < donutBox.length; row ++){

  for (var column = 0; column < donut[row].length; column ++){
    console.log(donutBox[row][column]);
  }
}


/*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here

for(var row = 0; row < numbers.length; row++ ) {

    for(var column = 0; column < numbers[row].length; column++) {

    if(numbers[row][column] % 2 === 0){
        numbers[row][column] = "even";
    } else {
       numbers[row][column] = "odd";
    }
}
}
console.log(numbers);







///////////////////// objects ////////////////////////////////

/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: false,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    isClose: true,
    close: function () {
        if (umbrella.isClose === true) {
            return "The umbrella is already closed!";
        }else {
            umbrella.isClose = true;
            umbrella.isOpen = false;
            return "Con closes the umbrella";
        }
    },
};
console.log(umbrella);





////////////////////////////////////////


var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true
};

// two equivalent ways to use the key to return its value
sister["parents"] // returns [ "alice", "andy" ]
sister.parents // also returns ["alice", "andy"]

///////

var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

sister.paintPicture();



var myObj = {
  color: "orange",
  shape: "sphere",
  type: "food",
  eat: function() { return "yummy" }
};

myObj.eat(); // method
myObj.color; // property



/*
 * Programming Quiz: Menu Items (7-2)
 */

// your code goes here
var breakfast = {
    name: "The Lumberjack",
    price: "$9.95",
    ingredients:["eggs", "sausage", "toast", "hashbrowns", "pancakes"]

};
console.log(breakfast);




/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
   printAccountSummary: function() { return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.";}

};
console.log(savingsAccount.printAccountSummary());



/*
 * Programming Quiz: Facebook Friends (7-5)




Directions:
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
 */

// your code goes here

var facebookProfile = {

  name: "Con Allen",
  friends: 1500,
  messages: ["how are you getting on?", "whats up?", "I cant reach you"],

  postMessage(message) {
    facebookProfile.messages.push(message);
  },

  deleteMessage(index) {
    facebookProfile.messages.splice(index,1);
  },

  addFriend() {
    facebookProfile.friends += 1;
  },

  removeFriend() {
      facebookProfile.friends =  facebookProfile.friends -1 ;
  }



};

  console.log(facebookProfile.messages);
