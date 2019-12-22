import { getInput } from "./helper.ts";

export default function quartiles(input: string): string {
  let [len, values] = getInput(input);
  values = (values as number[]).sort((a, b) => a - b);
  len = Number(len as number);
  const [slen, mlen, blen] = [len * (1 / 4), len / 2, len * (3 / 4)];
  let median =
    len % 2 === 0
      ? (values[Math.floor(mlen - 1)] + values[Math.floor(mlen)]) / 2
      : values[Math.floor(mlen)];
  let lowerQt =
    len % 4 === 0 || (len - 1) % 4 === 0
      ? (values[Math.floor(slen - 1)] + values[Math.floor(slen)]) / 2
      : values[Math.floor(slen)];
  let upperQt =
    len % 4 === 0 || (len - 1) % 2 === 0
      ? (values[Math.round(blen - 1)] + values[Math.round(blen)]) / 2
      : values[Math.floor(blen)];
  return `${lowerQt}\n${median}\n${upperQt}`;
}
