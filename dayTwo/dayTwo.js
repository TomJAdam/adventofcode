const fs = require("fs");
const input = fs.readFileSync(`${__dirname}/input.txt`, "utf-8").split("\n");

const reformatArray = (arr) => {
  let re = /[.*+\-?:$ {}()|[\]\\]/g;
  return arr.map((item) => item.split(re));
};

// part one
function policyCheckOne(data) {
  let totalCount = 0;

  reformatArray(data).forEach((item) => {
    const password = item[4];
    let count = 0;
    for (let i = 0; i < password.length; i++) {
      if (password[i] === item[2]) {
        count += 1;
      }
    }
    if (count >= item[0] && count <= item[1]) {
      totalCount += 1;
    }
  });
  console.log("totalCount :", totalCount);
}

policyCheckOne(input);

// part two
function policyCheckTwo(data) {
  let totalCount = 0;

  reformatArray(data).forEach((item) => {
    const password = item[4];

    if (
      password[item[0] - 1] === item[2] &&
      password[item[1] - 1] === item[2]
    ) {
      null;
    } else if (password[item[1] - 1] === item[2]) {
      totalCount += 1;
    } else if (password[item[0] - 1] === item[2]) {
      totalCount += 1;
    }
  });

  console.log("totalCount :", totalCount);
}

policyCheckTwo(input);
