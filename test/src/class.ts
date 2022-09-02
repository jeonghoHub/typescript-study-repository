class B {
    constructor(public value: number = 1) {}
    method(): void {
        console.log(`hi ${this.value}`)
    }
}


const a = new B(2);
a.method();


class calculator {
    constructor(public value: number = 0) {}
    add(value: number): any {
        this.value += value
        return this
    }
    mutiply(value: number): any {
        this.value *= value
        return this
    }
}

const b = new calculator(20);
b.add(10).mutiply(20);