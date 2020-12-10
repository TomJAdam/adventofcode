const fs = require("fs");
const input = fs.readFileSync(`${__dirname}/input.txt`, "utf-8").split("\n");

const test = [
  "3-6 s: ssdsssss",
  "17-19 f: cnffsfffzhfnsffttms",
  "8-11 c: tzvtwncnwvwttp",
];

function policyCheck(data) {
  let totalCount = 0;
  let re = /[.*+\-?:$ {}()|[\]\\]/g;

  const reformatArray = data.map((item) => {
    return item.split(re);
  });

  reformatArray.forEach((item) => {
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

policyCheck(input);
