export function getInput(input: string) {
  return input.split("\n").map(val =>
    val.trim().length > 1
      ? val
          .trim()
          .split(/\s+/)
          .map(n => parseInt(n, 10))
      : parseInt(val, 10)
  );
}

export const combination = (n: number, r: number) => permutation(n, r) / factorial(r);

export const factorial = (n: number): number =>  n < 2 ? 1 : n * factorial(n - 1);

export const permutation = (n: number, r: number) => factorial(n) / factorial(n - r);