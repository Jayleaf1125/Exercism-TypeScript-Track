"use strict";
// 8 Easy Excercises
// Hello World 
function hello() {
    return "Hello World!";
}
// console.log('Easy Problem One:', hello());
// Two Fer
function twoFer(name = 'you') {
    return `One for ${name}, one for me`;
}
// console.log('Easy Problem Two:', twoFer());
// Resistor Color Duo
function decodedValue(colors) {
    const ResistorColors = {
        black: '0',
        brown: '1',
        red: '2',
        orange: '3',
        yellow: '4',
        green: '5',
        blue: '6',
        violet: '7',
        grey: '8',
        white: '9'
    };
    const [color1, color2] = colors;
    const resistorColorBand = ResistorColors[color1].concat(ResistorColors[color2]);
    return parseInt(resistorColorBand, 10);
}
// console.log('Easy Problem Three:', decodedValue(['brown', 'black']))
// Resistor Color Trio
function decodedResistorValue(colors) {
    const ResistorColors = {
        black: '0',
        brown: '1',
        red: '2',
        orange: '3',
        yellow: '4',
        green: '5',
        blue: '6',
        violet: '7',
        grey: '8',
        white: '9'
    };
    const [color1, color2, color3] = colors;
    const resistorColorBand = ResistorColors[color1].concat(ResistorColors[color2]);
    const electricalValue = resistorColorBand * Math.pow(10, parseInt(ResistorColors[color3], 10));
    const numberToString = electricalValue.toString();
    return numberToString.length === 3 || numberToString.length === 2 ? `${electricalValue} ohms` : `${(electricalValue / 1000).toString()} kiloohms`;
}
// console.log(decodedResistorValue(['yellow', 'violet', 'yellow']))
// Leap Year 
function isLeap(year) {
    return ((year > 0 && year % 4 === 0 && year % 100 != 0) || year % 400 === 0);
}
// console.log(isLeap(1960))
// Resistor Color 
function colorCode(color) {
    const ResistorColors = {
        black: 0,
        brown: 1,
        red: 2,
        orange: 3,
        yellow: 4,
        green: 5,
        blue: 6,
        violet: 7,
        grey: 8,
        white: 9
    };
    return ResistorColors[color];
}
// console.log(colorCode('orange'))
// Pangram
function isPangram(pangram) {
    const alphabetSearch = pangram.match(/[A-Z]/gi);
    const output = new Set(alphabetSearch);
    return output.size === 26;
}
// console.log(isPangram('the quick brown fox jumps over with lazy FX'))
function toRna(dna) {
    const transcribetoRNA = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    };
    let output = "";
    for (let i = 0; i < dna.length; i++) {
        const char = dna[i];
        if (char in transcribetoRNA) {
            output += transcribetoRNA[char];
        }
        else {
            return 'Invalid input DNA.';
        }
    }
    return output;
}
console.log(toRna('AXX'));
