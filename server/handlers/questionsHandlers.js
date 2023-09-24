const questions = require("../constants/questions");

let index = 0;

module.exports = {
  getQuestion: () => questions[index],
};
