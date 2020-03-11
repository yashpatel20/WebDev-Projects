import {capitalizeString, reverseString} from '../src/strings'

test('capitalize string', () => {
    expect(capitalizeString("yash")).toBe("YASH")
});

test('reverseString', () => {
    expect(reverseString("yash")).toBe("hsay")
});

