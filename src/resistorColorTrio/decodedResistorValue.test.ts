import { describe, expect, test } from 'vitest';
import { ColourType, decodedResistorValue } from './decodedResistorValue';

describe('Resistor Colours: "decodedResistorValue function"', () => {
  test.each([
    [`Orange, Orange and Black`, `33 ohms`, ['orange', 'orange', 'black']],
    [`Blue, Grey and Brown`, `680 ohms`, ['blue', 'grey', 'brown']],
    [`Red, Black and Red`, `2 kiloohms`, ['red', 'black', 'red']],
    [`Green, Brown and Orange`, `51 kiloohms`, ['green', 'brown', 'orange']],
    [
      `Yellow, Violet and Yellow`,
      `470 kiloohms`,
      ['yellow', 'violet', 'yellow'],
    ],
    [`Blue, Violet and Blue`, `67 megaohms`, ['blue', 'violet', 'blue']],
    [`Minimum possible value`, `0 ohms`, ['black', 'black', 'black']],
    [`Maximum possible value`, `99 gigaohms`, ['white', 'white', 'white']],
    [
      `First two colours make an invalid octal number`,
      `8 ohms`,
      ['black', 'grey', 'black'],
    ],
    [
      `Ignore extra colour bands`,
      `650 kiloohms`,
      ['blue', 'green', 'yellow', 'orange'],
    ],
    [
      `Ignore extra colour bands`,
      `650 kiloohms`,
      ['blue', 'green', 'yellow', 'orange', 'violet', 'brown'],
    ],
  ])('%#. %s -> %s', (_, expectedResult, bands) => {
    expect(decodedResistorValue(bands as ColourType[])).toEqual(expectedResult);
  });
});
