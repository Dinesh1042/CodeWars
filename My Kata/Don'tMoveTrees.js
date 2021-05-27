// My Kata

// Don't move trees

// In the mid September students have decided to go camping.
// Camping guide says all the students stand under a tree in the forest. But the students are not standing according to their height under a tree. Your task is to rearrange the students by their heights without moving the trees. The negative values are the trees and the positive value are the height of the students.

// 0 and Strings should be ignored If number is in the typeof string that should be ignored

function sortStudents(arr) {
  
  if(!arr.length) return arr
  
  // Initialize a Empty array
  let finalArr = [];

  // Filter the students in the array sort by their heights
  const sortedStudents = [...arr]
    .filter((item) => item > 0 && typeof item === "number")
    .sort((a, b) => a - b);

  finalArr = [...sortedStudents];

  // filter the trees
  const trees = arr.reduce((acc, curVal, i) => {
    if (curVal < 0) acc[i] = curVal;
    return acc;
  }, {});
  // Trees return {"0":-5, "6":-4,} note key is the index position of the arr and value is tree

  for (let tree in trees) finalArr.splice(+tree, 0, trees[tree]);

  return finalArr;
}

const studentsAndTrees = [-1, 166, , 127, , 134, ""];
console.log(sortStudents(studentsAndTrees)); // [-1, 127, 134, 166];
