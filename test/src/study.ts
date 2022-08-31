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
