//Bài 1 
function getStringHasMaxLength(strings) {
    let maxLength = 0;
    for (let str of strings) {
        maxLength = Math.max(maxLength, str.length);
    }
    const longestStrings = strings.filter(str => str.length === maxLength);
    return longestStrings;
}
const result = getStringHasMaxLength(['aba', 'aad', 'ad', 'c', 'vcd']);
console.log(result);

//Bài 2 
const users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
];
//Lọc các user có age > 25 và isStatus = true:
function filterUsersByAgeAndStatus(users) {
    return users.filter(user => user.age > 25 && user.isStatus === true);
}
console.log(filterUsersByAgeAndStatus(users))

//User có age tăng dần 
function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age);
}
console.log(sortByAge(users))

//Bài 3
function getCountElement(arr) {
    const count = {};
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (count[element]) {
        count[element]++;
      } else {
        count[element] = 1;
      }
    }
    return count;
  }
let element=["one", "two", "three", "one", "one", "three"];
console.log(getCountElement(element));

  