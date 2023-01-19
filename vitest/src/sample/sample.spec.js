import sayHello from './sample';
import { describe, assert, expect, it } from 'vitest'

describe('sayHello', () => {

  it('should say hello for World', () => {
      const result = sayHello('World');
      expect(result).toBe('Hello, World!');
  });

});
