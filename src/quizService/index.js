const qBank = [
  {
    question: "Which of these was introduced first?",
    answers: ["var", "let"],
    correct: "var",
    questionId: "1",
    tips: "Var was introduced since the very beginning of Javascript.",
  },
  {
    question: "Which of these is block scoped?",
    answers: ["var", "let"],
    correct: "let",
    questionId: "2",
    tips: "let is block scoped and pays attention to nearest {} curly braces. ",
  },
  {
    question: "Which of these is function scoped?",
    answers: ["var", "let"],
    correct: "var",
    questionId: "3",
    tips:
      "var is function scoped and only really pays attention to the function is was declared in.",
  },
  {
    question: "Which of the following compares types?",
    answers: ["=", "==", "==="],
    correct: "===",
    questionId: "4",
    tips:
      "= is a declaration. == compares values. === compares values AND type. ",
  },
  {
    question: "const does not allow you to change types(T or F)",
    answers: ["true", "false"],
    correct: "true",
    questionId: "5",
    tips: "Once a variable is declared with const, its type cannot change. ",
  },
  {
    question: "const c; c=1; Is this valid?",
    answers: ["true", "false"],
    correct: "false",
    questionId: "6",
    tips:
      "c is initialized to undefined at the start. c=1 would attempt to change its value which isn't allowed. ",
  },
  {
    question: "const c = [1,2]; c.push(3); Is this valid?",
    answers: ["true", "false"],
    correct: "true",
    questionId: "7",
    tips: "Pushing doesn't change the type of c at all so it is allowed.",
  },
  {
    question:
      "Empty declarations like the following are set equal to what? const c; ",
    answers: ["null", "undefined"],
    correct: "undefined",
    questionId: "8",
    tips: "c is initialized to undefined automatically by Javascript.",
  },
  {
    question: "Should you ever set variables equal to undefined?",
    answers: ["yes", "no"],
    correct: "no",
    questionId: "9",
    tips:
      "Javascript automatically sets uninitialized variables to undefined. You should avoid doing this yourself!",
  },
  {
    question: "Do all objects inherit properties and methods from a prototype?",
    answers: ["yes", "no"],
    correct: "yes",
    questionId: "10",
    tips:
      "All Javascript objects inherit from a prototype. For example, Array objects inherit from Array.prototype",
  },
  {
    question:
      "An inner function being able to access variables outside the function it was declared in is an example of ?",
    answers: ["inheritance", "closure"],
    correct: "closure",
    questionId: "11 ",
    tips:
      "A closure is the combination of a function and the lexical environment within which that function was declared.",
  },
  {
    question:
      "The `this` keyword behaves the same in strict mode and non-strict mode.",
    answers: ["true", "false"],
    correct: "false",
    tips:
      "In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called.",
  },
  {
    question: "Given: let num = 5; num += ''; What will occur?",
    answers: [
      "Program will break",
      "Num is cast to a string",
      "Nothing happens",
    ],
    correct: "Num is cast to a string",
    tips:
      "Adding an empty string is a fast and easy way to cast a number to a string!",
    questionId: "13",
  },
  {
    question: "What does the expression NaN + 5 evaluate to?",
    answers: ["5", "NaN", "undefined"],
    correct: "NaN",
    questionId: "14",
    tips:
      "NaN is toxic and will always evaluate to NaN. To check if a value is NaN you can use isNaN(val)",
  },
  {
    question: "Which of the following evaluate to false?",
    answers: [
      "false, 0, ''",
      "false, 0, '', NaN",
      "false, 0, '', NaN, null",
      "false, 0, '', NaN, null, undefined",
    ],
    correct: "false, 0, empty string, nan, null and undefined",
    questionId: "15",
    tips:
      "false, 0, empty string, nan, null and undefined all evaluate to false. ANY other values besides these evaluate to true!",
  },
  // {
  //   question: "",
  //   answers: ["", ""],
  //   correct: "",
  //   questionId: "",
  //   tips: "",
  // },
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
