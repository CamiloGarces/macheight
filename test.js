const [numsInput, sumInput] = process.argv.slice(2);

function findPairs(nums, sum) {
  const pairs = [];
  const numsMap = {};

  for (const num of nums) {
    const diff = sum - num;

    if (numsMap[diff]) {
      pairs.push([diff, num]);
    } else {
      numsMap[num] = 1;
    }
  }

  return pairs;
}

const resultPairs = findPairs(
  numsInput.split(',').map(Number),
  Number(sumInput)
);

console.log('Found pairs:');

for (const pair of resultPairs) {
  console.log(pair.join(', '));
}
