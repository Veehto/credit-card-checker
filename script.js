// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];
const valid6 = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Item 7. String to convert to an array of numbers
const cardString1 = '344801968305414';
const cardString2 = '4716397705561691';

// Return true when an array contains digits of a valid credit card number and false when it is invalid.
const validateCred = inputArray => {
    const array = inputArray.map(number => number * 1);
    let cardLength = array.length;
    let lastElement = cardLength - 1;
    let sumUp = 0;
  
    for (let i = lastElement; i >= 0; i--) {
        if (i === lastElement) {
            array[i] *= 1;
        } else if (cardLength % 2 === 0 && i % 2 !== 0) {
            array[i] *= 1;
        } else if (cardLength % 2 !== 0 && i % 2 !== 0) {
            array[i] *= 2;
        } else if (cardLength % 2 === 0 && i % 2 === 0) {
            array[i] *= 2;
        };
  
        if (array[i] > 9) {
            array[i] -= 9;
        };
  
        sumUp += array[i]
        // console.log(array[i]);
    };
    
    // console.log(sumUp);
    // console.log(sumUp % 10);
  
    if (sumUp % 10 !== 0) {
        return false;
    } else {
        return true;
    };
};

// Check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
const findInvalidCards = array => {
    const badCards = array.filter(card => {
        return validateCred(card) === false;
    });

    return badCards;
};

// return an array of companies that have possibly issued these faulty numbers.
const idInvalidCardCompanies = array => {
    const invalidList = findInvalidCards(array);

    // console.log(invalidList);

    const companyList = invalidList.map(card => {
        if (card.indexOf(3) === 0) {
            return 'Amex';
        } else if (card.indexOf(4) === 0) {
            return 'Visa';
        } else if (card.indexOf(5) === 0) {
            return 'Mastercard';
        } else if (card.indexOf(6) === 0) {
            return 'Discover';
        };
    });
  
    // console.log(companyList);
  
    const guiltyOnes = [...new Set(companyList)];
    
    /* or use this:
    const guiltyOnes = [];
    companyList.forEach(company => {
      if (!guiltyOnes.includes(company)) {
          guiltyOnes.push(company);
      };
    });
    */

    return guiltyOnes;
};

// Accept a string and converts it into an array of numbers like the initially provided arrays.
const stringToNumArr = string => {
    const mysteryCard = string.split('').map(card => {
        return parseInt(card, 10);
    });

    return mysteryCard;
};

// console.log(validateCred(mystery1));
// console.log(findInvalidCards(batch));
console.log(idInvalidCardCompanies(batch));
// console.log(stringToNumArr(cardString2));
// console.log(validateCred(stringToNumArr(cardString2)));