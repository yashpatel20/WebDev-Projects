import {average, min, max, getLength} from '../src/arrays'

test('average',()=>{
    expect(average([1,2,3])).toBe(2)
})

test('min',()=>{
    expect(min([1,2,3])).toBe(1)
})

test('max',()=>{
    expect(max([1,2,3])).toBe(3)
})

test('length',()=>{
    expect(getLength([1,2,3])).toBe(3)
})