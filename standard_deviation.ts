export default function standardDeviation(input: string) {
  const [len, values] = input.split("\n").map(val =>
    val.trim().length > 1
      ? val
          .trim()
          .split(/\s+/)
          .map(n => parseInt(n, 10))
      : parseInt(val, 10)
  );
  let mean = (values as number[]).reduce((a, b) => a + b, 0) / (len as number);
  let variance = (values as number[]).reduce((a, b) => a + ((b - mean) ** 2), 0) / (len as number);
  return +Number(Math.sqrt(variance)).toFixed(1);
} 
