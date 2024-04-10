// // @ts-nocheck
// tslint:disable
const foo: string = 'foo'
const bar: number = 1
const baz: boolean = true
const qux: string[] = ['bar', 'baz', 'qux']

const n: null = null

let a: null | undefined
a = null

const b: string | null = Math.random() > 0.5 ? null : 'bar'
// OK: b = null

const l: number | undefined = b?.length

if (b !== null) {
  const l = b.length
  console.log(l)
}

function sum(a: number, b: number = 1): number {
  return a + b
}

const result = sum(2).toFixed(4)
console.log(result)

const subtract = (a: number, b: number = 1): number => a + b
const result2 = subtract(3)
console.log(result2)

function concatenate(a: string, b: string | null): string {
  if (b !== null) {
    return a.concat(b)
  }

  return a
}

const x = concatenate('Hello', null)
const y = concatenate('Hello ', 'world')

// Objects
const foo2: {
  name: string
  bar: number
  baz: number | string
} = { name: 'bar', bar: 1, baz: 2 }

type Foo3 = {
  name: string
  bar: number
  baz: number | string
}
const foo3: Foo3 = { name: 'bar', bar: 1, baz: 2 }

type Employee = {
  age: number
  name: string
  job?: string
  pet: string | undefined
}

const people: Employee[] = [
  { age: 42, name: 'Sonia', job: 'Autentia', pet: undefined },
  { age: 32, name: 'Paul', pet: 'lizard' },
]
const ages = people.reduce((a, b) => a + b.age, 0)
console.log(ages)

type Cat = {
  age: number
  name: string
  favouriteToy: string
}

const cat: Cat = {
  age: 1,
  name: 'Tobby',
  favouriteToy: 'Ball',
}

function getNameOfCat(cat: Cat): string {
  return cat.name
}

getNameOfCat(cat)

export {}
