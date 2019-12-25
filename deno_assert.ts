function assertEq(left, right, info = '') {
  if (String(left) !== String(right)) {
    console.error(`Test Failed ❗️:
    Expected =>  ${right}
    Got => ${left}`);
  } else {
    console.log(`Test: ${info} Passed`);
  }
}
function assertDeepEqual(left, right, info = '') {
  if (!left.every((e, i) => e === right[i])) {
    console.error(`Test Failed:
    Expected =>  ${right}
    Got => ${left}\n`);
  } else {
    console.log(`\n${info}: Passed ✅\n`);
  }
}
function shouldThrow(cb, info = '') {
  let hasthrown = false;
  try {
    cb();
  } catch (error) {
    hasthrown = true;
    console.log(`\n${info}: Passed ✅\n`);
  } finally {
    if (!hasthrown) {
      console.error(`Test Failed: Didn't throw an error\n`);
    }
  }
}

export  { assertEq, assertDeepEqual, shouldThrow };
