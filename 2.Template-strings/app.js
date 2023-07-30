const color = "orange";
console.log(`The color is ${color}`);

// Let this be our data
let person = {
  name: "Mr. Malik",
  age: 31,
  toolsUsed: ["keyboard", "mouse", "laptop"],
};

// Let's get more logical and make best use of the template literal to render list in HTML
const htmlText = `
      <h2>User details are follows:</h2>

      <p>Name: ${person.name}</p>
      <p>Age: ${person.age}</p>

      <ul>
         ${person.toolsUsed.map((item) => `<li>${item}</li>`).join("")}
      </ul>
`;

console.log(htmlText);

document.querySelector(".list-wrapper").innerHTML = htmlText;

/*** 3. Tagged template literals */
const statement1 = "Statement1";
const statement2 = "Statement2";

// A tagged function

showStatement`${statement1} is in sync with ${statement2} in the horizon`;

function showStatement(stringArr, ...vars) {
  console.log(`String Array is:`);
  console.log(stringArr);

  console.log(`Variable Array is:`);
  console.log(vars);
}

// Use Case of Tagged Template Literal: Let's add strong tag across the template literals in whatever way we want

const author = "Emmei";
const bookName = "The Vision";

const quote = getStatement`The book by the name ${bookName} is written by ${author}`;

// Let's create the Tagged function

function getStatement(arr, ...variables) {
  console.log(arr);
  console.log(variables);

  return arr
    .map((string, index) => {
      return `${string} <strong class="author">${
        variables[index] || ""
      }</strong>`;
    })
    .join("");
}

document.querySelector(".book-details").innerHTML = quote;
