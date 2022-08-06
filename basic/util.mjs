import util from "util";

const name = "Fahmi";

console.info(`Name ${name}`);
console.info(util.format("Hi %s", name));

const person = {
  firstName: "Fahmi",
  lastName: "Idris",
}

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
