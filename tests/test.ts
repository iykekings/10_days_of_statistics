  
import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { weightedMean, standardDeviation, meanMedianMode } from "../mod.ts";

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