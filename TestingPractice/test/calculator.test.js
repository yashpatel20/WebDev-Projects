import {add,subtract,multiply,divide} from '../src/calculator'

test('add',()=>{
    expect(add(1,1)).toBe(2)
})

test('subtract',()=>{
    expect(subtract(1,1)).toBe(0)
})

test('multiply',()=>{
    expect(multiply(2,2)).toBe(4)
})

test('divide',()=>{
    expect(divide(6,3)).toBe(2)
})
