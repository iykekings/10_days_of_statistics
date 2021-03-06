import { getInput } from "./helper.ts";

export default function interQuartileRange(input: string) {
  let [len, values, freq] = getInput(input);
  const exValues = (values as number[])
      .flatMap((el, i) => Array.from({length: freq[i]}, () => el))
      .sort((a, b) => a - b);
      len = exValues.length;
      const [slen, blen] = [len * (1 / 4), len * (3 / 4)];
  const lowerQt =
      len % 4 === 0 || (len - 1) % 4 === 0
        ? (exValues[Math.floor(slen - 1)] + exValues[Math.floor(slen)]) / 2
        : exValues[Math.floor(slen)];
  const upperQt =
      len % 4 === 0 || (len - 1) % 4 === 0
        ? (exValues[Math.round(blen - 1)] + exValues[Math.round(blen)]) / 2
        : exValues[Math.floor(blen)];
  return Number(upperQt - lowerQt).toFixed(1);
}