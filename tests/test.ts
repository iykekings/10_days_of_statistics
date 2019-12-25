import {test, assertEquals} from '../mod.ts';
import { weightedMean, standardDeviation, meanMedianMode, quartiles, interQuartileRange } from "../mod.ts";

test("weighted mean", () => {
  assertEquals(weightedMean(`5
  10 40 30 50 20
  1 2 3 4 5`),
  32.0)
})

test("standard deviation", () => {
  assertEquals(standardDeviation(`5
  10 40 30 50 20`), 14.1)
})

test("mean median mode", () => {
  assertEquals(meanMedianMode("10\n64630 11735 14216 99233 14470 4978 73429 38120 51135 67060"), "43900.6\n44627.5\n4978")
})

test("Quartiles1", () => { assertEquals(
  quartiles(`9
3 7 8 5 12 14 21 13 18`),
  "6\n12\n16")
});

test("Quartiles2", () => { assertEquals(
  quartiles(`12
  4 17 7 14 18 12 3 16 10 4 4 12`),
  "4\n11\n15")
});

test("Inter quartile1", () => {
  interQuartileRange(`6
6 12 8 10 20 16
5 4 3 2 1 5`), "9.0"
})

test("Inter quartile2", () => {
  interQuartileRange(`5
10 40 30 50 20
1 2 3 4 5`), "30.0"
})