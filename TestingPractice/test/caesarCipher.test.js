import {encrypt} from '../src/caesarCipher'

//lowercase
test('encryption',()=>{
    expect(encrypt("abcd",1)).toBe("bcde")
})

test('decryption',()=>{
    expect(encrypt("bcde",-1)).toBe("abcd")
})

//uppercase

test('encryption',()=>{
    expect(encrypt("XYZ",2)).toBe("ZAB")
})

// test('decryption',()=>{
//     expect(encrypt("ZAB",-2)).toBe("XYZ")
// })

