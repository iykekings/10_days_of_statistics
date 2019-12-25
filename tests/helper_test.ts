import {test, assertEquals} from '../mod.ts';
import { factorial, permutation, combination } from '../mod.ts';

test("factorial", () => {
  assertEquals(factorial(3), 6);
  assertEquals(factorial(4), 24);
  assertEquals(factorial(5), 120);
})

test("permutation", () => {
  assertEquals(permutation(10, 2), 90);
  assertEquals(permutation(10, 5), 30240);
})

test("combination", () => {
  assertEquals(combination(10, 2), 45);
  assertEquals(combination(10, 5), 252);
})