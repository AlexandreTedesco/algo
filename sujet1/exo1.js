const hasPairWithSum = (arr, k) => {
  const difference = new Set();

  for (let num of arr) {
    if (difference.has(num)) {
      console.log(`${num} se trouve dans l'ensemble!`);
      console.log(`Ensemble des différences: [${Array.from(difference)}]`);
      return true;
    }
    difference.add(k - num);
  }
  console.log(`Aucune paire dont la somme donne ${k} n'as été trouvée`)
  console.log(`Ensemble des différences: [${Array.from(difference)}]`);
  return false;
};

module.exports = { hasPairWithSum };
