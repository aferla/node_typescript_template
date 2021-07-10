import { toUpperCase } from "./Utils";

describe(`ToUpperCase `, () => {
  it(`should convert a string to uppser case `, () => {
    expect(toUpperCase(`Hello World`)).toBe(`HELLO WORLD`);
  });
});
