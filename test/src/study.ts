// 잔여연산자 - 나머지 속성들을 하나에 변수에 저장하고 싶다면 잔여연산자(...)를 이용하여 만듬
let address: any = {
    country: 'Korea',
    city: 'Seoul',
    address1: 'Gangnam-gu',
    address2: 'Sinsa-dong 123-456',
    address3: '789 street, 2 Floor '
}

const {country, city, ...detail} = address
console.log(detail)

// 전개연산자 - 여러개의 오브젝트를  전개연산자(...)를 이용하여 하나의 오브젝트로 만듬
let part1 = {name: 'jane'},  part2 = {age: '22'},  part3 = {city: 'seoul', country: 'kr'}
let merged = {...part1, ...part2, ...part3}
console.log(merged)




interface INameable {
    name: string
}

let person: object = {name: "jack"};
// person.name 
// 위의 문법 오류 person의 타입이 object인데 object타입은 name속성을 가지지 않기 때문
// 아래와 같이 type casting 해주거나 인터페이스를 만들어 해결
(<{name: string}>person).name 

let name2 = (<INameable>person).name


//타입스크립트에서의 함수 선언
function add(num1: number, num2: number): number {
    return num1 + num2;
}

//함수 시그니처 잘못된 매개변수나 반환타입으로 함수를 만드는것을 미연에 방지
let printMe: (string, number) => void = function (name: string, age: number): void {}

// type키워드로 타입 별칭
type stringNumberFunc = (string, number) => void

let f: stringNumberFunc = function(name: string, age: number): void {}


//undefined 관련 주의사항
//undefined 타입은 타입계층도에서 모든 타입 중 최하위 타입이다.
//그렇기에 getName()함수의 매개변수에 undefined를 넣어도 
//INameable을 상속하는 자식 타입으로 간주하기 때문에 구문 오류가 발생하지 않음
interface INameable {
    name: string
}

function getName(o: INameable) {
    return o != undefined ? o.name : 'unknown name'
}

let n = getName(undefined)
console.log(n)
console.log(getName({name:'jack'}))

//만일 인터페이스에 선택 속성이 있다면 다음과 같이 구현
interface IAgeable {
    age?: number
}

function getAge(o: IAgeable) {
    return o?.age ?? 0
}

console.log(getAge(undefined))
console.log(getAge(null))
console.log(getAge({age:32}))