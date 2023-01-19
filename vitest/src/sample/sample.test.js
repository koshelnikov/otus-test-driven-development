import sayHello from './sample'
import { assert, expect, test } from 'vitest'

test('sayHello should say hello for World', () => {
    const result = sayHello('World');
    expect(result).toBe('Hello, World!');
});
