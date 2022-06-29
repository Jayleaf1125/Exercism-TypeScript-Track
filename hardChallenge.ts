class CircularBuffer<Type> {
    protected size: number;
    protected initial: Type[];

    constructor(size: number) {
        this.size = size;
        this.initial = new Array<Type>();
    }

    // Error Handlings
    private bufferIsEmpty(): void {
        throw new Error('Buffer is empty')
    }

    private bufferIsFull(): void {
        throw new Error('Buffer is full')
    }

    // CircularBuffer's Behaviors
    write(value: Type) {
        if (this.initial.length === this.size) {
            this.bufferIsFull();
        }

        this.initial.push(value)
    }

    read(): Type {
        if (this.initial.length === 0) {
            this.bufferIsEmpty()
        }
        return this.initial.shift()
    }

    forceWrite(value: Type): void {
        if (this.initial.length === this.size) {
            this.read()
        }
        this.write(value)
    }

    clear(): void {
        this.initial = new Array<Type>();
    }
}

const buffer = new CircularBuffer<string>(5)
buffer.write('1')
buffer.write('2')
buffer.write('3')
buffer.read()
buffer.read()
buffer.write('4')
buffer.read()
buffer.write('5')
buffer.write('6')
buffer.write('7')
buffer.write('8')
buffer.forceWrite('A')
buffer.forceWrite('B')
console.log(buffer.read())
console.log(buffer.read())
console.log(buffer.read())
console.log(buffer.read())
console.log(buffer.read())
console.log(buffer.read())

