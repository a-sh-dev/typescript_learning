import { describe, expect, test } from 'vitest';
import { decodedResistorValue } from './decodedResistorValue';

describe('Resistor Colours', () => {
  test('Orange and Orange and Black -> 33 ohms', () => {
    expect(decodedResistorValue(['orange', 'orange', 'black'])).toEqual(
      '33 ohms',
    );
  });
});
