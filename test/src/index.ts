interface IPerson4 {
    name: string
    age?: number
}

class Person implements IPerson4 {
    constructor(public name: string, public age: number) {}
}

abstract class AbstractPerson5 {
    abstract name: string
    constructor(public age?: number) {}
}

class Person5 extends AbstractPerson5 {
    constructor(public name: string, age?: number) {
        super(age)
    }
}

class A {
    static initValue: number = 1
}

let initVal = A.initValue


