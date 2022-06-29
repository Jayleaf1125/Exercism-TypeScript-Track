"use strict";
class CircularBuffer {
    constructor(size) {
        this.size = size;
        this.initial = new Array();
    }
    // Error Handlings
    bufferIsEmpty() {
        throw new Error('Buffer is empty');
    }
    bufferIsFull() {
        throw new Error('Buffer is full');
    }
    // CircularBuffer's Behaviors
    write(value) {
        if (this.initial.length === this.size) {
            this.bufferIsFull();
        }
        this.initial.push(value);
    }
    read() {
        if (this.initial.length === 0) {
            this.bufferIsEmpty();
        }
        return this.initial.shift();
    }
    forceWrite(value) {
        if (this.initial.length === this.size) {
            this.read();
        }
        this.write(value);
    }
    clear() {
        this.initial = new Array();
    }
}
const buffer = new CircularBuffer(5);
buffer.write('1');
buffer.write('2');
buffer.write('3');
buffer.read();
buffer.read();
buffer.write('4');
buffer.read();
buffer.write('5');
buffer.write('6');
buffer.write('7');
buffer.write('8');
buffer.forceWrite('A');
buffer.forceWrite('B');
console.log(buffer.read());
console.log(buffer.read());
console.log(buffer.read());
console.log(buffer.read());
console.log(buffer.read());
console.log(buffer.read());
