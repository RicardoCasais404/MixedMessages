// Storing the game data.
const subjects = [
  "Your creativity",
  "Your determination",
  "Your positive attitude",
  "Your hard work",
];

const verbs = ["will lead to", "will inspire", "will create", "will unlock"];

const outcomes = [
  "amazing opportunities",
  "great success",
  "positive changes",
  "new beginnings",
];

// Assigning the random indexes to new variables.
const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
const randomVerbs = verbs[Math.floor(Math.random() * verbs.length)];
const randomOutcomes = outcomes[Math.floor(Math.random() * outcomes.length)];

// DEBUG STATEMENT - console.log(randomSubject);
// DEBUG STATEMENT - console.log(randomOutcomes);
// DEBUG STATEMENT - console.log(randomVerbs);

// Creating the "finalMessage" variable to hold the joined sentences.
const finalMessage = `${randomSubject} ${randomVerbs} ${randomOutcomes}.`;
console.log(finalMessage);
