// const firstName = 'Dean';
// const job = 'Webdev';
// const birthYear = 1988;
// const year = 2022;

// const dean = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';

// console.log(dean);

// const deanNew = `I'm ${firstName} a ${year - birthYear} year old ${job}`;
// console.log(deanNew);

// console.log(`dean is a string...`)

// console.log(`string
// with
// multiple
// lines`);

//Taking  decisions if/else statements//

// const age = 15;


// if(age >= 18) {
// console.log(`Sarah can start driving`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years:`)
// }

// const birthYear = 1988;

// let century;
// if(birthYear <= 2000) {
//      century = 20;

// } else {
//      century = 21;
// }

// console.log(century)

// if() {

// }
// Coding Challenge 2//

// DATA 1 //

const markHeight = 1.69;
const markWeight = 78;

const johnHeight = 1.95;
const johnWeight = 92;

const johnBmi = ( johnWeight / (johnHeight * johnHeight) );

console.log(johnBmi);

const markBmi = ( markWeight / (markHeight * markHeight));

console.log(markBmi);

const markHigherBmi = markBmi > johnBmi;

if(johnBmi >= markBmi){
    console.log(`Marks BMI ${bmiMark} is higher than John's!!`)
} else {
console.log(`Johns BMI ${johnBmi} is higher than Mark's`)
}

// DATA 2 //

const heightMark = 1.88;
const massMark = 95;

const heightJohn = 1.76;
const massJohn = 85;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

console.log(bmiMark, bmiJohn);

const higherBmiMark = bmiMark > bmiJohn;

console.log( higherBmiMark);


if(bmiJohn >= bmiMark){
    console.log(`Marks BMI ${bmiMark} is higher than John's!!`)
} else {
console.log(`Johns BMI ${johnBmi} is higher than Mark's`)
}


