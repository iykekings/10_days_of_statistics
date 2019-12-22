export default function meanMedianMode(input: string): string {
  let fInput: number[] = input.split("\n")[1].trim().split(/\s+/).map(m => parseInt(m, 10));
  let freq: {[key: number]: number} = {}
  let mode;
  let sum = 0;
  for(let data of fInput) {
      if(data in freq) {
          freq[data] += 1
      } else {
          freq[data] = 1
      }
      sum += data;
  }
  let det = -Infinity;
  for(let [key, val] of Object.entries(freq)) {
      if(val > det) {
          det = val
          mode = key
      }
  }
  let len = fInput.length
  let mean = sum / len;
  let sortedInput = fInput.sort((a, b) => a - b);
  let median = len % 2 === 0 ? (sortedInput[len/2 - 1] + sortedInput[len/2]) / 2: sortedInput[len/2];
  return `${mean}\n${median}\n${mode}`;
} 
