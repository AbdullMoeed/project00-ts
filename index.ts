import inquirer from "inquirer";

const result = await inquirer.prompt([
  { message: "Enter the First Number", type: "number", name: "num1" },
  { message: "Enter the Second Number", type: "number", name: "num2" },
  {
    message: "Choose any one operator from them",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

console.log(result);

if (result.Operator === "Addition") {
  console.log(result.num1 + result.num2);
} else if (result.Operator === "Subtraction") {
  console.log(result.num1 - result.num2);
} else if (result.Operator === "Multiplication") {
  console.log(result.num1 * result.num2);
} else if (result.Operator === "Division") {
  console.log(result.num1 / result.num2);
} else {
  console.log("Enter correct Operator");
}
