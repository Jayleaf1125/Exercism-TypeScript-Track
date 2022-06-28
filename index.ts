// 8 Easy
function hello(): string {
    return "Hello World!";
}

// console.log('Easy Problem One:', hello());

function twoFer(name = 'you'): string {
    return `One for ${name}, one for me`;
}

// console.log('Easy Problem Two:', twoFer());

function decodedValue(colors: string[]): number {
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
    const [color1, color2] = colors;
    // return parseInt(resistorColorBand, 10)
    const resistorColorBand = ResistorColors[color1].concat(ResistorColors[color2]);
    return parseInt(resistorColorBand, 10);
}

console.log('Easy Problem Three:', decodedValue(['brown', 'black']))