import { assertEq } from "./deno_test.ts";

function processData(input: string) {
  const [_len, values, freq] = input.split("\n").map(val =>
    val.trim().length > 1
      ? val
          .trim()
          .split(/\s+/)
          .map(n => parseInt(n, 10))
      : parseInt(val, 10)
  );
  let res = (values as number[]).reduce((a, b, i) => a + b * freq[i], 0) /
  (freq as number[]).reduce((a, b) => a + b, 0)
  return Number(res.toFixed(1));
}

assertEq(
  processData(`5
  10 40 30 50 20
  1 2 3 4 5`),
  32.0
);
