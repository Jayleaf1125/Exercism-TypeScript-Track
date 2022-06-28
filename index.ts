// 8 Easy Excercises

// Hello World 
function hello(): string {
    return "Hello World!";
}

// console.log('Easy Problem One:', hello());

// Two Fer
function twoFer(name = 'you'): string {
    return `One for ${name}, one for me`;
}

// console.log('Easy Problem Two:', twoFer());

// Resistor Color Duo
function decodedValue(colors: string[]): number {

    type Colors = {
        black: string;
        brown: string;
        red: string;
        orange: string;
        yellow: string;
        green: string;
        blue: string;
        violet: string;
        grey: string;
        white: string;

    }

    const ResistorColors: Colors = {
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
    }
    const [color1, color2] = colors;
    const resistorColorBand = ResistorColors[color1].concat(ResistorColors[color2]);
    return parseInt(resistorColorBand, 10);
}

// console.log('Easy Problem Three:', decodedValue(['brown', 'black']))

// Resistor Color Trio
function decodedResistorValue(colors: string[]): string {
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
    }

    const [color1, color2, color3] = colors;
    const resistorColorBand = ResistorColors[color1].concat(ResistorColors[color2]);
    const electricalValue = resistorColorBand * Math.pow(10, parseInt(ResistorColors[color3], 10));
    const numberToString: string = electricalValue.toString();

    return numberToString.length === 3 || numberToString.length === 2 ? `${electricalValue} ohms` : `${(electricalValue / 1000).toString()} kiloohms`
}

// console.log(decodedResistorValue(['yellow', 'violet', 'yellow']))

// Leap Year 
function isLeap(year: number): boolean {
    return ((year > 0 && year % 4 === 0 && year % 100 != 0) || year % 400 === 0);
}

// console.log(isLeap(1960))

// Resistor Color 
function colorCode(color: string): number {
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
    }
    return ResistorColors[color]
}

// console.log(colorCode('orange'))

// Pangram
function isPangram(pangram: string): boolean {
    const alphabetSearch = pangram.match(/[A-Z]/gi);
    const output = new Set(alphabetSearch)
    console.log(output.size)
    return output.size === 26
}

// console.log(isPangram('the quick brown fox jumps over with lazy FX'))

function toRna(dna: string): string {
const transcribetoRNA = {
    'G' : 'C',
    'C' : 'G',
    'T' : 'A',
    'A' : 'U'
}
let output = "";

for (let i = 0; i < dna.length; i++) {
    const char = dna[i];
    if (char in transcribetoRNA) {
        output += transcribetoRNA[char]
    } else {
        return 'Invalid input DNA.'
    }
}

return output 
}
console.log(toRna('ACGTXXXCTTAA'))