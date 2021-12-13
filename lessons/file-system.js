const fs = require("fs/promises");

const path = require("path");

// console.log("START");

// fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Create Folder");
// });

// console.log("FINISH");
//////////////////////////  Не працює//////////////////
// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     throw err;
//   }
// });

// fs.writeFile(path.resolve(__dirname, "text.txt"), "  АБРА КАДАБРА", () => {
//   if (err) {
//     throw err;
//   }
// });

// fs.appendFile(
//   path.resolve(__dirname, "text.txt"),
//   "СПІРУЛІНУС АХУЄНІНУС  ",
//   () => {
//     if (err) {
//       throw err;
//     }
//   }
// );
const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    })
  );
};

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    })
  );
};
writeFileAsync(path.resolve(__dirname, "text.txt"), "data")
  .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "123"))
  .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "456"))
  .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "789"))
  .catch((err) => console.log(err));
