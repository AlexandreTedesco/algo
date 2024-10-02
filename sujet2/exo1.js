const countBuildingsWest = (buildings) => {
  let count = 0;
  let maxHeight = 0;

  for (const building of buildings) {
    if (building > maxHeight) {
      count++;
      maxHeight = building;
    }
  }

  return count;
};

console.log(countBuildingsWest([3, 7, 8, 3, 6, 1]));
console.log(countBuildingsWest([1, 4, 5, 8]));