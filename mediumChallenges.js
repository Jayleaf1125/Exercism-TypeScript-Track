"use strict";
// Binary Search
function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let middleIndex = Math.floor((start + end) / 2);
        if (target === array[middleIndex]) {
            return middleIndex;
        }
        if (target > array[middleIndex]) {
            console.log("Searching the right side of Array");
            start = middleIndex + 1;
        }
        if (target < array[middleIndex]) {
            console.log("Searching the left side of array");
            end = middleIndex - 1;
        }
    }
    return 'Target not found';
}
// console.log(binarySearch([1, 2], 0))
// Wordy
/*
Create a function called recite that will take in two number parameters and returns a string

Create a recital that has an object containing the words of the song corresponding to a number
*/
function recite(begin, end) {
    const recital = {
        '1': `On the first day of Christmas my true love gave to me: a Partridge in a Pear Tree.\n`,
        '2': `On the second day of Christmas my true love gave to me: two Turtle Doves, and a Partridge in a Pear Tree.\n`,
        '3': `On the third day of Christmas my true love gave to me: three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n`,
        '4': `On the fourth day of Christmas my true love gave to me: four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n`,
        '5': `On the fifth day of Christmas my true love gave to me: five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n`,
        '6': `On the sixth day of Christmas my true love gave to me: six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n`,
        '7': `On the seventh day of Christmas my true love gave to me: seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n`,
        '8': `On the eighth day of Christmas my true love gave to me: eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n`,
        '9': `On the ninth day of Christmas my true love gave to me: nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n`,
        '10': `On the tenth day of Christmas my true love gave to me: ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n`,
        '11': `On the eleventh day of Christmas my true love gave to me: eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n`,
        '12': `On the twelfth day of Christmas my true love gave to me: twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n`
    };
    let lyrics = "";
    if (begin === end) {
        let selection = begin.toString();
        return recital[selection];
    }
    for (let i = begin; i <= end; i++) {
        let selection = i.toString();
        lyrics += recital[selection];
    }
    return lyrics;
}
console.log(recite(1, 12));
