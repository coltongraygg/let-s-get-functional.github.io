// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');





/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

/**
 * I: FUNCTION RECEIVES AN ARRAY OF CUSTOMERS
 * O: FUNCTION RETURNS THE LENGTH OF AN ARRAY REPRESENTING THE NUMBER OF MALE CUSTOMERS
 * C: MUST USE _.FILTER
 * E: N/A
 */

var maleCount = function(array) {
    // initialize males array
        // use filter  to iterate through array 
    let males = _.filter(array, function(customer) {
        // if customer's gender is male add to males array
        return customer.gender === 'male';
    });
    // return array length
    return males.length;
};

/**
 * I: FUNCTION RECEIVES AN ARRAY OF CUSTOMERS
 * O: FUNCTION RETURNS THE NUMBER OF FEMALE CUSTOMERS
 * C: MUST USE REDUCE
 * E: N/A
 * 
 */

var femaleCount = function(array) {
    return _.reduce(array, function(acc, curr) {
        //if current gender in array is female add 1 to acc 
        if (curr.gender == 'female') {
            acc += 1;
        }
        // return acc
        return acc;
    }, 0) // set acc to 0 
};

/**
 * I: FUNCTION RECEIVES AN ARRAY
 * O: FUNCTION RETURNS A STRING OF THE OLDEST CUSTOMER'S NAME IN ARRAY
 * C: NONE
 * E: N/A
 */

var oldestCustomer = function(customers) {
    // initialize oldestCustomer variable with first element in array (will be used to test against)
    let oldestCustomer = customers[0];
    // iterate through the customers
        // start at 1,  oldestCustomer is [0]
    for (let i = 1; i < customers.length; i++) {
        // if current element is older than oldestCustomer...
        if (customers[i].age > oldestCustomer.age) {
            // assign customers[i] to oldestCustomer
            oldestCustomer = customers[i];
        }
    }
    // return oldestCustomer's name
    return oldestCustomer.name;
}

/**
 * I: FUNCTION RECEIVES AN ARRAY
 * O: FUNCTION RETURNS A STRING OF THE YOUNGEST CUSTOMER'S NAME IN ARRAY
 * C: NONE
 * E: N/A
 */

var youngestCustomer = function(customers) {
    // initialize youngestCustomer variable w/ first element in array (test against this)
    let youngestCustomer = customers[0];
    // iterate through array of customers
        // start at 1, youngestCustomer is initialized with [0] index
    for (let i = 1; i < customers.length; i++) {
        // if current element is younger than youngestCustomer...
        if (customers[i].age < youngestCustomer.age) {
            // reassign customers[i] to youngestCustomer
            youngestCustomer = customers[i];
        }
    }
    // return youngestCustomer's name
    return youngestCustomer.name;
}

/**
 * I: FUNCTION RECEIVES AN ARRAY OF CUSTOMERS
 * O: FUNCTION RETURNS THE AVERAGE BALANCE OF CUSTOMERS AS A NUMBER
 * C: FUNCTION MUST CONVERT BALANCE FROM STRING TO NUMERICAL DATA TYPE
 * E: N/A
 */

var averageBalance = function(customers) {
    // initialize count variable
    let count = 0;
    // initialize total balance variable
    let totalBal = 0;
    // initialize newBal variable
    let newBal;
    // iterate through the array
    for (let i = 0; i < customers.length; i++) {
        // check if customer has a balance property
        if (customers[i].balance) {
            // remove $ and , from string
            newBal = customers[i].balance.replace(/[$,]/g, '');
            // increase count
            count++;
            // convert string to numerical data type, add and assign it to totalBal
            totalBal += Number(newBal);
        }
    }
    // return average balance
    return totalBal / count;
}

/*
I: FUNCTION RECEIVES AN ARRAY REPRESENTING CUSTOMER NAMES AND A LETTER REPRESENTING THE BEGINNING OF A CUSTOMER NAME. 
O: FUNCTION OUTPUTS A NUMBER OF HOW MANY CUSTOMER'S NAMES START WITH LETTER
C: NONE
E: N/A
*/

var firstLetterCount = function(array, letter) {
    // initialize count variable
    let count = 0;
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // mutate customer[i].name to uppercase
        let capName = customers[i].name.toUpperCase();
        let capLetter = letter.toUpperCase();
        // if first char of customers.name === letter then increment count
        if (capName.charAt(0) === capLetter) {
            count++;
        }
    }
    return count;
}

var friendFirstLetterCount = function(customers, customerName, letter) {
    let count = 0;
    // Iterate through customers array
    for (let i = 0; i < customers.length; i++) {
        // Find the customer by name
        if (customers[i].name === customerName) {
            // Iterate through  customer's friends
            for (let j = 0; j < customers[i].friends.length; j++) {
                // Check if the friend's name starts with the given letter
                if (customers[i].friends[j].name[0].toLowerCase() === letter.toLowerCase()) {
                    count++;
                }
            }
            break; // Exit the loop once the customer is found and processed
        }
    }
    return count;
};
   
/*


/**
 * I: FUNCTION RECEIVES AN ARRAY OF CUSTOMERS AND A NAME REPRESENTING A GIVEN CUSTOMER'S NAME IN THEIR FRIENDS LIST
 * O: FUNCTION RETURNS AN ARRAY CONTAINING CUSTOMER NAMES THAT ARE FRIENDS WITH NAME PARAM
 * C: NONE
 * E: N/A
 */


var friendsCount = function(array, name) {
    // initialize result array
    let friendsList = [];
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // iterate through friends list
        for (let j = 0; j < array[i].friends.length; j++) {
            // if name is found in that friends list
            if (array[i].friends[j].name === name) 
                // push name of customer to friendsList
                friendsList.push(array[i].name);
        }
    }
    return friendsList;
}




var genderCount = function(array) {
    // initialize result object assigned to....
                // use reduce to iterate through array
    let result =_.reduce(customers, function(acc, curr) {
        // if current customer's gender already exists in acc...
        if (acc.hasOwnProperty(curr.gender)) {
            // add 1 to the count for current gender
            acc[curr.gender] += 1;
        // otherwise...if current customer's gender doesn't exist in acc...
        } else {
            // add new gender property and assign it the value of 1
            acc[curr.gender] = 1;
        }
        // next iteration
        return acc;
    }, {}); // set seed as an object 
    // return result when completed
    return result;
};

/**
 * I: FUNCTION RECEIVES AN ARRAY OF CUSTOMERS
 * O: FUNCTION RETURNS AN ARRAY OF THE THREE MOST COMMON TAGS AMONGST ALL CUSTOMERS
 * C: NONE
 * E: N/A
 */
var topThreeTags = function(array) {
    // initalize variable to store key value pairs of tags : # times found 
    let tagsObj = {};
    // iterate through array of customers
    for (let i = 0; i < array.length; i++) {
        // iterate through tags 
        for (let j = 0; j < array[i].tags.length; j++) {
            // initialize currentTag variable
            let currentTag = array[i].tags[j];
            // if current tag already exists in tagsObj
            if (tagsObj.hasOwnProperty(currentTag)) {
                // increment value
                tagsObj[currentTag] += 1;
            // otherwise, initialize new tag in tagsObj with value of 1
            } else {
                tagsObj[currentTag] = 1;
            }
        }
    }
    
    // initialize tags array
    let tagsArr = [];
    //iterate through tagsObj
    for (let key in tagsObj) {
        tagsArr.push([key, tagsObj[key]]);
    }
    tagsArr.sort(function(a, b) {
        return b[1] - a[1];
    });
    
    // slice first three 
    let topThree = tagsArr.slice(0, 3);

    // add tag names
    let result = [];
    for (let i = 0; i < topThree.length; i++) {
        result.push(topThree[i][0]);
    }
    return result;
}


/*


/**
 * I: FUNCTION RECEIVES AN ARRAY
 * O: FUNCTION RETURNS AN OBJECT SUMMARIZING THE GENDERS AND THE COUNT OF HOW MANY USERS ARE EACH GENDER
 * C: MUST USE REDUCE
 * E: N/A
 */

var genderCount = function(array) {
    // initialize result object assigned to....
                // use reduce to iterate through array
    let result =_.reduce(customers, function(acc, curr) {
        // if current customer's gender already exists in acc...
        if (acc.hasOwnProperty(curr.gender)) {
            // add 1 to the count for current gender
            acc[curr.gender] += 1;
        // otherwise...if current customer's gender doesn't exist in acc...
        } else {
            // add new gender property and assign it the value of 1
            acc[curr.gender] = 1;
        }
        // next iteration
        return acc;
    }, {}); // set seed as an object 
    // return result when completed
    return result;
};



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
