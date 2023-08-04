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

/*** --- 3. Arrow function :  this --- **/
const square = (num) => num * num;

console.log(square(5));

// this keyword in object functions
/*** In a normal function 'this' points to the object (left of the dot) */
const car = {
  modal: "k10",
  stop: function () {
    console.log(this.modal);
  },
};

/** In an arrow function 'this'  points to the surrounding scope (one level up)*/
const machine = {
  modal: "k10",
  start: () => {
    console.log(this.modal); //undefined
  },
};

car.stop();
machine.start();

//   const regionsData = [
//     {
//       id: "path6",
//       news: 87,
//       reports: 36,
//       tenders: 77,
//       analysis: 18,
//     },
//     {
//       id: "path8",
//       news: 98,
//       reports: 33,
//       tenders: 54,
//       analysis: 90,
//     },
//     {
//       id: "path10",
//       news: 43,
//       reports: 77,
//       tenders: 24,
//       analysis: 67,
//     },
//     {
//       id: "Aegypten",
//       news: 4,
//       reports: 21,
//       tenders: 8,
//       analysis: 13,
//     },
//     {
//       id: "path64",
//       news: 8,
//       reports: 3,
//       tenders: 36,
//       analysis: 42,
//     },
//     {
//       id: "path66",
//       news: 18,
//       reports: 53,
//       tenders: 26,
//       analysis: 22,
//     },
//     {
//       id: "path68",
//       news: 81,
//       reports: 43,
//       tenders: 63,
//       analysis: 21,
//     },
//     {
//       id: "Aethopien",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Algerien",
//       news: 12,
//       reports: 6,
//       tenders: 77,
//       analysis: 5,
//     },
//     {
//       id: "path73",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "path75",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Benin",
//       news: 32,
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Botsuana",
//       news: 50, // Default value for news
//       reports: 7,
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Burundi",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 19,
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Burkina_Faso",
//       news: 50, // Default value for news
//       reports: 12,
//       tenders: 30,
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Demokratische_Republik_Kongo",
//       news: 6,
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Dschibuti",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 20,
//     },
//     {
//       id: "Ivory Coast",
//       news: 50, // Default value for news
//       reports: 9,
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Eritrea",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 37,
//     },
//     {
//       id: "Gabun",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 44,
//     },
//     {
//       id: "Gambia",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Ghana",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 27,
//     },
//     {
//       id: "Guinea",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Guinea-Bissau",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 12,
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Cameroon",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 45,
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Kenya",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 29,
//     },
//     {
//       id: "Libya",
//       news: 50, // Default value for news
//       reports: 8,
//       tenders: 16,
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Liberia",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Madagaskar",
//       news: 50, // Default value for news
//       reports: 4,
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Mali",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 10,
//     },
//     {
//       id: "Malawi",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Morocco",
//       news: 34,
//       reports: 16,
//       tenders: 23,
//       analysis: 19,
//     },
//     {
//       id: "Mauretanien",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 14,
//     },
//     {
//       id: "Mozambique",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 2,
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Namibia",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 32,
//     },
//     {
//       id: "Niger",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Nigeria",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 38,
//     },
//     {
//       id: "Republic_of_the_Congo",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 11,
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Rwanda",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Zambia",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 35,
//     },
//     {
//       id: "Senegal",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 34,
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Sierra_Leone",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Zimbabwe",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 11,
//     },
//     {
//       id: "Somalia",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "path3246",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Sudan",
//       news: 13,
//       reports: 9,
//       tenders: 23,
//       analysis: 55,
//     },
//     {
//       id: "South Africa",
//       news: 50, // Default value for news
//       reports: 26,
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Swasiland",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 33,
//     },
//     {
//       id: "Tanzania",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Togo",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 39,
//     },
//     {
//       id: "Tunisia",
//       news: 90,
//       reports: 76,
//       tenders: 60,
//       analysis: 10,
//     },
//     {
//       id: "Chad",
//       news: 22,
//       reports: 19,
//       tenders: 43,
//       analysis: 59,
//     },
//     {
//       id: "Uganda",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 40,
//     },
//     {
//       id: "Western_Sahara",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 1,
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Central_African_Republic",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 50, // Default value for analysis
//     },
//     {
//       id: "Lesotho",
//       news: 50, // Default value for news
//       reports: 50, // Default value for reports
//       tenders: 50, // Default value for tenders
//       analysis: 2,
//     },
//   ];

// Continue adding the remaining objects in the same format with different default values.
/* <svg
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
      version="1.1"
      id="mapsection"
      x="0px"
      y="0px"
      width="200px"
      height="230px"
      viewBox="0 0 1200 1230"
      enable-background="new 0 0 1200 1230"
      xml:space="preserve"
      inkscape:version="0.48.1 "
      sodipodi:docname="Blank_Map-Africa.svg"
    >
      <defs id="defs125"></defs>

      <g id="g3248">
        <g
          transform="translate(-111.5439,-93.00714)"
          id="Skala"
        >
          <path
            d="m 275.82,1192.493 h 244.314 v -13.557"
            id="path6"
            inkscape:connector-curvature="0"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 3;
              stroke-linecap: round;
            "
          />
          <path
            d="m 428.251,1192.869 v 12.804"
            id="path8"
            inkscape:connector-curvature="0"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 3;
              stroke-linecap: round;
            "
          />
          <path
            d="m 275.802,1178.665 v 27.729"
            id="path10"
            inkscape:connector-curvature="0"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 3;
              stroke-linecap: round;
            "
          />
          <text
            transform="translate(427.3024,1227.0757)"
            font-size="18.1997"
            id="text12"
            style="font-size: 18.1996994px; font-family: ArialMT"
          ></text>

          <text
            transform="translate(427.3024,1227.0757)
            "
            font-size="18.1997"
            id="text14"
            style="
              font-size: 18.1996994px;
              fill: none;
              stroke: #000000;
              stroke-width: 1.33210003;
              stroke-linecap: round;
              font-family: ArialMT;
            "
          ></text>

          <text
            transform="translate(394.9289,1227.0757)"
            font-size="18.1997"
            id="text16"
            style="font-size: 18.1996994px; font-family: ArialMT"
          >
            1000 km
          </text>

          <text
            transform="translate(394.9289,1227.0757)"
            font-size="18.1997"
            id="text18"
            style="
              font-size: 18.1996994px;
              fill: none;
              stroke: #000000;
              stroke-width: 1.33210003;
              stroke-linecap: round;
              font-family: ArialMT;
            "
          >
            1000 km
          </text>

          <text
            transform="translate(464.7326,1227.0757)"
            font-size="18.1997"
            id="text20"
            style="font-size: 18.1996994px; font-family: ArialMT"
          ></text>

          <text
            transform="translate(464.7326,1227.0757)"
            font-size="18.1997"
            id="text22"
            style="
              font-size: 18.1996994px;
              fill: none;
              stroke: #000000;
              stroke-width: 1.33210003;
              stroke-linecap: round;
              font-family: ArialMT;
            "
          ></text>

          <text
            transform="translate(505.1306,1171.9204)"
            font-size="18.2"
            id="text24"
            style="font-size: 18.20000076px; font-family: ArialMT"
          ></text>

          <text
            transform="translate(505.1306,1171.9204)"
            font-size="18.2"
            id="text26"
            style="
              font-size: 18.20000076px;
              fill: none;
              stroke: #000000;
              stroke-linecap: round;
              font-family: ArialMT;
            "
          ></text>

          <text
            transform="translate(475.2844,1171.9204)"
            font-size="18.2"
            id="text28"
            style="font-size: 18.20000076px; font-family: ArialMT"
          >
            1000 mi
          </text>

          <text
            transform="translate(475.2844,1171.9204)"
            font-size="18.2"
            id="text30"
            style="
              font-size: 18.20000076px;
              fill: none;
              stroke: #000000;
              stroke-linecap: round;
              font-family: ArialMT;
            "
          >
            1000 mi
          </text>

          <text
            transform="translate(540.0329,1171.9204)"
            font-size="18.2"
            id="text32"
            style="font-size: 18.20000076px; font-family: ArialMT"
          ></text>

          <text
            transform="translate(540.0329,1171.9204)"
            font-size="18.2"
            id="text34"
            style="
              font-size: 18.20000076px;
              fill: none;
              stroke: #000000;
              stroke-linecap: round;
              font-family: ArialMT;
            "
          ></text>

          <text
            transform="translate(263.2526,1171.6792)"
            font-size="18.2"
            id="text36"
            style="font-size: 18.20000076px; font-family: ArialMT"
          ></text>

          <text
            transform="translate(263.2526,1171.6792)"
            font-size="18.2"
            id="text38"
            style="
              font-size: 18.20000076px;
              fill: none;
              stroke: #000000;
              stroke-linecap: round;
              font-family: ArialMT;
            "
          ></text>

          <text
            transform="translate(260.7199,1171.6792)"
            font-size="18.2"
            id="text40"
            style="font-size: 18.20000076px; font-family: ArialMT"
          >
            0
          </text>

          <text
            transform="translate(260.7199,1171.6792)"
            font-size="18.2"
            id="text42"
            style="
              font-size: 18.20000076px;
              fill: none;
              stroke: #000000;
              stroke-linecap: round;
              font-family: ArialMT;
            "
          >
            0
          </text>

          <text
            transform="translate(270.8415,1171.6792)"
            font-size="18.2"
            id="text44"
            style="font-size: 18.20000076px; font-family: ArialMT"
          ></text>

          <text
            transform="translate(270.8415,1171.6792)"
            font-size="18.2"
            id="text46"
            style="
              font-size: 18.20000076px;
              fill: none;
              stroke: #000000;
              stroke-linecap: round;
              font-family: ArialMT;
            "
          ></text>

          <text
            transform="translate(262.9289,1225.6577)"
            font-size="18.2"
            id="text48"
            style="font-size: 18.20000076px; font-family: ArialMT"
          ></text>

          <text
            transform="translate(262.9289,1225.6577)"
            font-size="18.2"
            id="text50"
            style="
              font-size: 18.20000076px;
              fill: none;
              stroke: #000000;
              stroke-width: 1.38680005;
              stroke-linecap: round;
              font-family: ArialMT;
            "
          ></text>

          <text
            transform="translate(260.3962,1225.6577)"
            font-size="18.2"
            id="text52"
            style="font-size: 18.20000076px; font-family: ArialMT"
          >
            0
          </text>

          <text
            transform="translate(260.3962,1225.6577)"
            font-size="18.2"
            id="text54"
            style="
              font-size: 18.20000076px;
              fill: none;
              stroke: #000000;
              stroke-width: 1.38680005;
              stroke-linecap: round;
              font-family: ArialMT;
            "
          >
            0
          </text>

          <text
            transform="translate(270.5182,1225.6577)"
            font-size="18.2"
            id="text56"
            style="font-size: 18.20000076px; font-family: ArialMT"
          ></text>

          <text
            transform="translate(270.5182,1225.6577)"
            font-size="18.2"
            id="text58"
            style="
              font-size: 18.20000076px;
              fill: none;
              stroke: #000000;
              stroke-width: 1.38680005;
              stroke-linecap: round;
              font-family: ArialMT;
            "
          ></text>
        </g>

        <path
          inkscape:connector-curvature="0"
          d="m 726.4901,264.61086 131.972,-3.938 4.251,4.202 8.712,-1.1 0.901,-7.354 9.664,-2.669 2.046,-9.053 4.243,1.397 5.338,-5.569 -2.888,-14.259 4.618,0.163 -11.233,-10 -30.812,-50.892 -0.139,-6.177 c -7.291,-4.78 -12.686,-10.826 -15.942,-18.296 l -0.286,-4.743 -4.65,-3.384 1.214,-7.527 13.813,18.46 c 1.236,1.424 -0.153,2.448 0.962,3.993 3.61,4.999 9.826,10.041 13.49,12.969 1.871,-0.629 4.065,-0.183 4.994,-3.958 l 3.603,-23.974 -16.197,-33 c -10.937,7.653 -21.873,10.712 -32.811,-0.68 l -13.366,1.024 c -3.054,1.313 -6.305,3.313 -8.068,0.107 l -21.565,12.601 -35.713,-7.956 c -5.366,-1.103 -11.091,-2.92 -15.52,-2.146 -4.543,2.772 -7.775,0.63 -11.006,-1.522 -1.838,3.193 -3.775,6.423 -2.013,8.308 l 1.444,13.004 c -3.161,5.095 -6.078,10.318 3.912,22.318 l 7.032,119.651 z"
          id="Aegypten"
        />
        <g
          transform="translate(-111.5439,-93.00714)"
          id="Aequatorialguinea"
        >
          <path
            inkscape:connector-curvature="0"
            id="path64"
            d="m 612.765,710.968 -27.136,1.311 -5.428,-3.556 8.142,-15.627 24.235,-0.281 0.187,18.153 z"
          />

          <path
            inkscape:connector-curvature="0"
            id="path66"
            d="m 537.873,725.206 c 10e-4,1.625 -1.315,2.942 -2.94,2.942 -1.625,0 -2.942,-1.317 -2.941,-2.942 -10e-4,-1.625 1.316,-2.942 2.941,-2.942 1.625,0 2.941,1.317 2.94,2.942 z"
          />

          <path
            inkscape:connector-curvature="0"
            id="path68"
            d="m 549.275,701.8 c 0,1.293 -1.048,2.341 -2.34,2.341 -1.293,0 -2.341,-1.048 -2.341,-2.341 0,-1.293 1.048,-2.341 2.341,-2.341 1.292,0.001 2.34,1.048 2.34,2.341 l 0,0 z"
          />
        </g>

        <path
          inkscape:connector-curvature="0"
          d="m 1120.0081,494.08686 -48.203,55.006 -18.834,-0.339 c -2.325,0.646 -11.042,6.008 -16.048,10.415 -4.104,3.615 -10.431,5.723 -16.906,8.67 -3.84,0.021 -8.502,1.414 -11.19,-0.484 -6.303,-6.109 -13.517,-3.117 -20.652,-0.893 -2.358,4.343 -5.578,7.823 -10.94,9.162 l -25.762,-4.006 c -5.832,-4.949 -12.258,-9.542 -20.235,-13.204 l -14.316,-0.992 0.01,-11.635 -11.261,-4.121 -8.14,-18.588 -11.681,-9.344 c 2.178,-3.487 -3.54,-6.367 -6.447,-9.464 -3.954,0.891 -7.908,0.084 -11.862,-2.042 l 3.479,-4.182 -0.212,-5.382 10.263,0.186 c 2.241,-1.407 4.72,-1.945 6.36,-5.554 l -0.293,-30.159 4.883,-7.681 5.135,0.188 2.342,-12.869 c 6.179,-7.601 8.366,-16.882 18.558,-22.793 l 2.674,-22.31 8.163,-0.235 1.133,-2.656 3.963,0.069 3.395,5.644 4.889,-12.97 c 3.23,2.078 7.45,2.158 9.34,6.728 l 8.24,-1.612 1.392,-2.637 1.478,-0.316 1.989,3.504 c 2.612,-1.554 5.858,-3.209 10.048,-0.496 1.213,0.518 2.627,0.789 5.75,-1.028 3.302,1.783 5.305,5.421 9.979,5.243 10.551,9.213 20.777,18.796 29.83,29.721 -0.816,0.771 -1.186,3.688 -1.787,10.276 l -3.906,7.008 c -3.147,5.169 0.662,9.728 6.656,7.581 l 5.264,-2.023 5.284,2.163 c -6.379,7.354 8.807,20.158 22.495,32.946 l 49.414,15.789 16.272,-0.284 z"
          id="Aethopien"
        />
        <path
          inkscape:connector-curvature="0"
          d="m 200.9831,137.55886 16.029,-7.986 3.31,1.183 5.49,-4.77 9.218,0.845 0.499,-4.261 c 19.079,0.933 23.04,-4.17 26.409,-9.285 l 15.974,-6.582 5.898,0.185 -3.088,-4.086 0.813,-3.23 -0.129,-5.348 c 6.247,-0.818 13.951,0.185 13.998,-6.35 l 25.844,0.359 3.587,-7.432 c -4.954,-1.818 -5.84,-8.981 -5.177,-16.593 0.493,-5.651 0.046,-18.509 0.046,-18.509 -1.71,-2.063 -3.84,-4.006 -4.333,-6.97 1.382,-0.614 7.868,0.449 11.806,-4.825 2.029,-2.719 4.622,-8.205 8.007,-7.134 3.951,1.252 11.521,2.042 11.984,-0.466 0.495,-2.683 7.83,-8.587 18.422,-8.552 19.401,0.063 44.467,-7.318 52.658,-4.919 8.19,2.399 18.858,-3.188 23.594,-2.884 4.769,0.306 6.207,5.508 12.713,1.082 2.432,-1.654 11.213,5.226 19.582,2.789 0,0 -4.997,2.219 -5.279,7.349 -0.434,7.901 -1.166,32.494 -1.166,32.494 -0.831,-1.329 -6.779,-0.332 -7.715,3.682 -1.271,5.454 -7.409,4.043 -7.896,6.799 -0.98,5.546 3.859,10.64 9.56,15.615 1.461,1.275 -0.538,8.339 0.909,9.631 4.415,3.939 12.241,6.621 12.241,6.621 1.817,18.073 5.035,30.554 5.035,30.554 -8.282,0.554 -3.856,8.241 1.721,16.447 l 0.348,47.01 c 0,0 -7.481,1.517 -6.965,3.445 1.16,4.329 1.432,7.529 6.898,12.396 3.51,3.123 3.575,8.393 3.272,11.854 -0.349,3.994 3.681,5.804 4.734,5.778 8.208,-0.198 15.146,-4.193 22.922,17.245 l -98.328,64.618 c -14.593,6.285 -38.629,10.045 -39.456,9.681 -5.482,-2.411 0.872,-8.447 -0.967,-12.484 -1.841,-4.043 -4.061,-7.083 -10.309,-6.406 -3.324,0.36 -5.068,-3.915 -6.384,-3.697 -5.32,0.881 -6.675,-5.164 -7.851,-6.239 -4.666,-4.269 -9.299,-5.51 -8.238,-9.39 l -143.694,-109.537 3.454,-29.727 z"
          id="Algerien"
        />
        <g
          transform="translate(-111.5439,-93.00714)"
          id="Angola"
        >
          <path
            inkscape:connector-curvature="0"
            id="path73"
            d="m 620.675,1020.46 c 3.59,-0.953 7.473,-5.715 10.694,-1.889 3.199,-3.956 12.082,-11.785 26.44,2.873 l 72.149,-0.987 7.729,6.738 45.478,5.883 28.766,-6.477 -19.444,-17.353 1.488,-61.456 34.695,1.03 -3.771,-4.022 4.086,-32.499 c -0.467,0.117 -1.002,-0.121 -1.457,0.044 -8.363,3.047 -17.254,2.343 -26.225,2.522 l -3.118,6.113 -5.688,-4.792 6.342,-8.448 -8.562,-17.347 -1.308,-38.929 -14.822,1.052 0.005,-7.029 -6.585,-0.963 -1.729,3.127 -12.104,-0.623 -4.598,17.622 c -6.009,-1.083 -11.558,-2.562 -20.559,1.988 -7.952,-2.557 -15.151,3.402 -26.407,-36.529 l -4.259,-2.545 -45.582,-0.734 -20.738,7.119 c 5.194,14.939 16.164,23.424 15.793,45.519 l -3.566,3.42 c 2.944,9.978 5.57,20.415 12.124,25.179 0.646,2.794 -0.769,4.825 -0.952,6.924 -0.672,7.678 -4.708,29.441 -6.48,25.562 0,0 -7.309,1.597 -7.964,7.482 -0.319,2.867 -3.857,3.272 -5.172,6.806 -3.676,9.879 -7.55,25.549 -10.342,39.794 -0.324,1.65 -2.477,0.926 -2.742,2.5 -0.767,4.536 0.086,7.759 -0.199,12.572 -0.086,1.439 -1.915,-0.972 -2.269,0.809 -0.435,2.2 1.337,8.436 0.853,9.944 z"
          />
          <path
            inkscape:connector-curvature="0"
            id="path75"
            d="m 625.866,814.648 8.047,-4.866 c 3.37,-7.915 6.122,-5.619 8.796,-2.059 -3.421,3.088 -6.973,6.073 -7.307,11.561 0.808,7.608 -2.723,6.972 -5.231,8.277 -1.113,-2.065 -2.697,-4.037 -2.146,-6.435 -0.067,-2.268 -0.035,-4.553 -2.159,-6.478 z"
          />
        </g>
        <a
          xlink:title="Benin"
          href="https://en.wikipedia.org/wiki/Benin"
          id="Benin"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 359.3611,529.05186 -15.311,2.049 -7.908,-61.994 c -1.011,-4.727 -5.704,-6.821 -9.287,-9.71 l 1.899,-10.132 9.921,-7.81 10.343,0.422 7.599,-12.242 17.097,2.744 0.106,13.556 c 4.85,5.211 3.97,12.205 0.312,14.397 0.334,6.527 -0.856,11.939 -5.194,11.793 -2.627,7.06 -4.868,15.535 -8.611,18.502 l -0.966,38.425 z"
            id="Benin"
          />
        </a>
        <a
          xlink:title="Botsuana"
          href="https://en.wikipedia.org/wiki/Botsuana"
          id="Botsuana"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 729.9821,935.02186 -10.629,5.971 c -10.491,0.061 -11.139,6.235 -15.068,9.555 l -2.956,-8.311 -39.729,3.481 -2.265,61.54004 -16.272,-0.382 -1.096,44.416 c 4.444,5.455 10.449,11.396 13.457,15.37 2.931,3.87 1.058,11.428 -1.788,18.487 7.871,3.331 15.508,3.494 23.086,1.524 1.127,-2.99 2.672,-5.145 4.715,-6.305 3.285,-1.887 5.992,-4.293 7.001,-8.228 l 9.899,-8.256 c 6.102,0.532 10.795,2.953 15.558,6.444 10.09,0.14 16.091,-1.696 20.278,-3.827 l 1.957,-9.3 58.094,-46.425 c -7.313,-5.316 -10.963,-4.104 -15.139,-5.082 -4.207,-0.984 -9.396,-8.46004 -8,-21.31304 -4.028,-0.793 -6.607,-3.037 -8.82,-5.646 -2.528,-4.236 -5.831,-3.829 -8.769,-5.613 -4.553,-6.331 -12.927,-14.461 -13.571,-19.349 -0.312,-2.371 -1.56,-2.244 -3.336,-4.885 -2.051,-3.045 -4.751,-10.126 -6.607,-13.866 z"
            id="Botsuana"
          />
        </a>
        <a
          xlink:title="Burundi"
          href="https://en.wikipedia.org/wiki/Burundi"
          id="Burundi"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 803.6511,681.39986 2.431,-2.283 2.946,0.146 1.473,4.125 8.249,-1.62 0.441,-5.156 10.312,-0.589 c -3.407,5.925 1.67,9.157 3.83,12.152 -6.907,16.138 -12.787,21.808 -18.127,22.071 -7.077,0.031 -6.15,2.623 -6.915,4.886 -0.513,-7.175 -0.141,-13.867 0.311,-19.741 0.551,-7.184 -1.839,-12.474 -4.951,-13.991 z"
            id="Burundi"
          />
        </a>
        <a
          xlink:title="Burkina_Faso"
          href="https://en.wikipedia.org/wiki/Burkina_Faso"
          id="Burkina_Faso"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 269.7101,474.43286 c -3.183,-0.431 -4.305,-4.709 -6.909,-7.177 -5.133,-4.863 -14.828,-1.249 -22.559,3.521 -9.415,-4.705 -10.691,-8.942 -12.426,-12.849 1.884,-5.081 0.601,-11.758 3.156,-17.157 2.281,-4.823 6.25,-9.287 13.211,-13.115 l 8.501,-17.823 c 7.296,-2.412 13.922,-3.33 19.633,-5.342 5.494,-1.936 10.441,-5.102 13.452,-9.146 10.884,-6.722 24.395,-15.341 32.741,-13.208 -0.116,2.738 -0.128,5.455 1.561,7.833 2.83,1.922 2.228,5.108 1.65,8.285 l 16.82,22.614 6.406,2.13 c 0.936,-1.068 5.508,-6.714 7.764,5.734 l 3.814,0.816 -7.359,12.411 -10.426,-0.552 -10.035,7.834 -15.108,-1.794 c -8.685,-0.15 -9.48,1.54 -13.179,2.553 l -33.53,-0.958 2.822,25.39 z"
            id="Burkina_Faso"
          />
        </a>
        <a
          xlink:title="Demokratische_Republik_Kongo"
          href="https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo"
          id="Demokratische_Republik_Kongolic"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 628.0061,575.85086 c -2.924,8.719 -6.41,14.906 -10.053,24.391 -4.778,12.44 -3.716,31.616 -6.152,48.579 -12.636,5.728 -16.636,14.911 -23.103,23.106 l -5.042,24.127 c -9.122,8.927 -17.609,20.394 -28.599,21.853 -0.668,-13.458 -12.326,-6.99 -13.608,-1.691 -5.552,3.668 -7.364,-0.144 -10.501,-1.306 -4.012,2.888 -6.919,6.327 -6.959,11.2 0.565,7.784 -2.972,7.364 -5.53,8.9 l 1.496,5.934 20.842,-7.131 45.581,0.818 4.23,2.473 c 10.361,38.416 18.766,34.628 26.198,36.502 11.58,-4.846 14.677,-2.151 20.834,-2.178 l 4.476,-17.472 12.168,0.686 1.556,-3.188 6.758,1.053 0.103,7.062 14.669,-1.074 1.525,38.683 8.365,17.41 -6.382,8.647 5.815,4.917 3.108,-6.221 19.238,-0.341 6.976,-2.339 6.035,-0.108 2.186,8.598 11.216,-3.706 c 0.603,2.583 1.713,4.473 3.193,5.857 3.64,3.402 10.445,8.086 16.512,8.18 4.276,0.065 7.718,-4.329 11.464,-3.541 5.108,7.083 11.16,9.136 17.498,9.662 4.711,7.307 7.876,16.159 21.271,14.782 l 5.246,3.646 -0.373,-18.698 c -9.303,2.99 -14.946,-1.338 -19.754,-7.339 0.949,-7.38 3.934,-14.081 7.332,-20.645 0.297,-7.589 -0.726,-14.579 -2.589,-22.179 -0.408,-1.664 1.763,-7.865 4.533,-11.496 l 30.167,-7.387 c -3.123,-16.906 -14.109,-20.339 -17.261,-32.307 -3.857,-14.649 -5.742,-32.213 -3.688,-49.347 -0.571,-8.021 -4.244,-12.268 -9.549,-14.527 l 9.001,-12.896 7.292,-8.002 1.131,-28.029 10.226,-15.525 16.454,-14.81 -9.923,-6.454 0.05,-17.679 -20.555,-17.432 c -1.835,0.172 -2.684,1.987 -3.969,3.073 -4.141,1.288 -7.954,-0.704 -11.912,-1.244 -2.13,4.768 -10.908,2.265 -11.945,-0.456 -0.303,-0.793 0.386,-2.391 -0.813,-2.837 -2.59,-3.497 -5.258,-5.86 -7.849,-8.064 l -8.559,0.415 -2.787,3.207 -3.149,-2.61 -1.961,3.064 -4.095,-5.354 -18.48,1.604 0.007,2.978 -8.225,1.513 -1.3,-3.161 -20.962,7.428 c -5.869,-4.257 -8.025,-1.945 -11.463,-2.087 l -3.69,8.031 c -17.411,-0.658 -24.684,-0.665 -27.553,-4.545 -5.513,6.072 -6.854,-1.412 -10.23,-2.277 -1.907,-8.876 -6.953,-6.244 -10.465,-9.238 -6.499,4.362 -10.047,8.725 -13.087,13.086 0.04,6.07 -0.926,11.136 -2.637,15.456 z"
            id="Demokratische_Republik_Kongo"
          />
        </a>
        <a
          xlink:title="Dschibuti"
          href="https://en.wikipedia.org/wiki/Dschibuti"
          id="Dschibuti"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 1029.8601,413.43086 -9.844,7.346 c -1.705,4.956 -0.769,8.946 -2.163,11.304 -5.647,9.551 -4.932,10.292 -3.179,12.409 2.362,2.853 8.584,0.819 11.807,-1.088 l 5.142,2.204 5.729,-8.668 c -3.525,-2.994 -7.052,-1.445 -10.577,-1.616 0.961,-4.318 5.809,-5.305 9.255,-7.493 2.542,-7.866 -2.861,-12.882 -6.17,-14.398 z"
            id="Dschibuti"
          />
        </a>
        <a
          xlink:title="Ivory Coast"
          href="https://en.wikipedia.org/wiki/Ivory_Coast"
          id="Ivory_Coast"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 184.7841,561.11186 6.397,0.604 50.845,-14.391 18.244,2.045 2.642,-10.808 c -0.551,-8.646 -7.891,-17.492 2.037,-25.83 0.923,-6.305 0.412,-13.167 7.204,-17.19 l -2.321,-21.263 c -2.795,0.06 -3.962,-2.841 -5.427,-5.358 -3.256,-5.599 -14.175,-4.938 -24.264,1.949 -4.804,-3.398 -10.401,-5.737 -12.281,-13.033 -6.741,-2.486 -11.99,-1.135 -16.329,2.56 l 0.785,-7.274 c -1.057,-2.765 -4.852,-1.97 -9.316,-0.305 -1.125,0.127 -0.337,1.894 0.925,4.064 -1.636,0.619 -3.272,0.709 -4.908,1.021 -1.139,1.401 -2.781,2.886 -4.601,3.267 -4.572,-8.012 -7.223,-6.504 -12.656,-2.1 -1.861,1.51 -3.079,5.159 -3.84,8.345 -0.856,3.59 0.68,7.055 4.597,6.553 l -0.364,4.836 c 2.794,1.25 2.192,1.747 -0.409,4.485 -1.175,1.236 3.295,6.898 2.764,8.234 l -8.584,-1.707 c -0.229,1.354 -0.531,3.301 -0.655,4.796 l 4.039,1.729 -3.155,8.399 c 0.412,0.658 -3.815,0.233 -4.853,0.375 l 0.063,5.26 c 4.386,1.181 1.99,11.455 -2.127,13.127 l 6.037,3.791 c 1.329,-1.041 5.058,-0.131 7.479,6.476 0,0 6.02,3.783 5.889,8.547 -0.104,3.779 -2.657,4.381 -3.348,7.31 l -0.509,11.486 z"
            id="Ivory Coast"
          />
        </a>
        <a
          xlink:title="Eritrea"
          href="https://en.wikipedia.org/wiki/Eritrea"
          id="Eritrea"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 942.4451,381.54986 c 3.072,2.102 6.144,1.836 9.215,6.648 l 8.16,-1.634 1.589,-2.559 1.346,-0.358 1.807,3.366 c 4.121,-2.184 7.837,-2.274 10.453,-0.209 1.595,1.258 3.942,-0.491 5.653,-1.127 3.182,2.578 6.339,5.404 9.788,5.305 11.202,9.257 20.86,19.286 29.854,29.647 l 9.696,-6.759 c -1.396,-3.702 -3.249,-7.092 -9.823,-7.252 -0.326,-2.979 -1.586,-5.625 -5.766,-7.228 -0.888,-3.579 -3.965,-3.509 -6.389,-4.527 -2.044,-5.688 -7.026,-8.804 -11.115,-12.702 -4.61,1.083 -6.739,-1.971 -8.921,-4.935 l -3.504,-0.684 -2.509,1.541 c -2.622,-2.156 -3.337,-5.13 -4.068,-8.097 l -3.756,-1.002 0.954,5.206 c -2.272,1.391 -3.517,-2.362 -4.702,-6.407 l -7.649,-11.106 c -4.988,-23.246 -9.339,-26.095 -13.799,-32.443 -1.23,2.892 -1.443,6.407 -3.464,7.984 l -11.255,5.858 c -1.818,3.158 -4.633,4.092 -7.625,4.061 -4.216,20.118 -6.443,33.103 -6.242,49.436 l 8.676,-0.012 0.841,-2.807 4.007,0.225 3.302,5.228 5.246,-12.657 z"
            id="Eritrea"
          />
        </a>
        <a
          xlink:title="Gabun"
          href="https://en.wikipedia.org/wiki/Gabon"
          id="Gabun"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 497.6751,699.92586 -30.107,-31.152 -7.179,-18.34 6.617,-6.352 1.853,-10.322 8.469,1.853 c 0.487,-0.507 1.248,-0.876 0.794,-1.853 l -7.349,-3.767 2.32,-10.525 28.193,-1.446 0.126,-18.139 h 34.936 l -2.708,3.814 -0.313,11.833 c 3.153,1.203 5.258,-1.399 7.301,-5.139 5.37,-0.836 15.228,4.015 12.549,13.278 -4.474,5.031 -6.51,9.717 -4.913,13.996 1.176,3.151 2.59,6.212 3.496,10.883 l -2.708,24.646 -5.619,4.063 c -2.525,-4.172 -7.185,-5.676 -13.701,-4.857 -2.004,-2.51 -3.971,-5.716 -7.77,-0.652 l -14.572,8.966 1.262,12.049 -10.977,7.163 z"
            id="Gabun"
          />
        </a>
        <a
          xlink:title="Gambia"
          href="https://en.wikipedia.org/wiki/Gambia"
          target="_blank"
          id="Gambia"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 41.5001,395.95586 h 18.351 c 3.958,-5.287 9.788,-3.556 16.43,1.217 l 10.595,0.785 2.336,3.003 -7.674,2.669 c -5.252,-1.122 -9.991,-3.143 -14.347,-5.835 -3.075,1.823 -6.592,2.912 -11.01,2.498 l -2.002,3.337 -15.945,0.667 3.266,-8.341 z"
            id="Gambia"
          />
        </a>
        <a
          xlink:title="Ghana"
          href="https://en.wikipedia.org/wiki/Ghana"
          target="_blank"
          id="Ghana"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 331.9141,534.41186 c -1.602,2.134 -1.801,6.604 -6.232,4.02 -22.004,2.672 -30.687,12.004 -46.03,18.006 l -19.405,-7.101 2.642,-10.809 c -0.551,-8.646 -7.891,-17.491 2.037,-25.829 0.923,-6.306 0.412,-13.168 7.204,-17.19 l -5.158,-46.533 33.509,1.036 c 4.459,-2.36 9.205,-2.712 14.004,-2.693 -2.631,5.257 -1.229,10.261 5.146,14.954 5.15,21.002 4.51,41.177 6.124,61.674 l 6.159,10.465 z"
            id="Ghana"
          />
        </a>
        <a
          xlink:title="Guinea"
          href="https://en.wikipedia.org/wiki/Guinea"
          target="_blank"
          id="Guinea"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 63.6491,444.31786 c -0.577,1.798 -0.43,2.689 1.907,2.693 0.944,1.132 4.272,-6.859 3.76,1.205 l 2.974,0.318 c -1.008,4.479 2.043,9.98 4.953,10.973 3.746,1.278 5.817,5.614 7.876,7.528 l 5.083,9.354 c 3.5,2.385 8.323,0.651 15.854,-9.505 -0.82,-3.385 3.856,-5.188 17.836,-4.312 11.451,8.251 14.884,17.877 10.614,28.823 5.122,-1.237 7.987,-4.729 16.526,-2.548 4.257,5.364 6.892,11.284 3.352,19.321 4.715,1.761 6.416,6.938 12.999,-1.782 -0.449,-1.999 1.177,-2.72 3.247,-1.185 1.253,0.93 3.347,-0.481 5.323,0.009 l 3.478,-8.96 -4.263,-1.721 0.813,-4.708 8.714,1.772 c -0.667,-3.212 -5.009,-7.391 -1.792,-9.581 1.441,-1.483 0.775,-2.644 -0.688,-3.681 l 0.181,-4.106 c -8.45,-1.011 -3.627,-10.36 -0.711,-15.099 l -5.179,-4.707 -0.595,-10.358 -4.27,3.148 -1.598,-2.386 5.703,-5.217 -7.7,-5.851 c 1.272,-4.097 -0.444,-9.01 -1.84,-14.121 l -5.422,-1.179 c 0.084,2.334 -0.725,4.101 -3.106,4.866 -2.033,-0.611 -3.279,0.689 -3.74,3.896 l -9.609,-3.977 -7.629,5.531 c 0.967,-2.479 -1.51,-3.95 -3.068,-5.798 l -4.207,2.826 c -3.287,1.106 -3.699,-0.661 -3.66,-2.881 0.676,-0.721 1.521,-1.273 1.779,-2.411 -11.867,-1.843 -24.297,-1.103 -35.146,-7.634 l -3.402,-0.019 -1.478,18.409 -9.264,0.246 c -9.053,3.294 -13.51,11.725 -14.605,12.809 z"
            id="Guinea"
          />
        </a>
        <a
          xlink:title="Guinea-Bissau"
          href="https://en.wikipedia.org/wiki/Guinea-Bissau"
          target="_blank"
          id="Guinea-Bissau"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 37.4161,417.46186 1.124,3.087 c 2.326,1.593 6.705,-1.555 6.442,6.01 2.116,1.105 4.733,-1.127 6.251,3.962 2.596,1.312 9.171,-10.904 6.79,7.327 l 5.837,6.395 c 3.461,-5.396 8.664,-10.805 14.05,-12.736 l 9.53,-0.232 1.601,-18.359 -24.592,-0.084 c -4.998,2.43 -10.134,3.761 -15.579,2.61 -3.47,1.241 -7.086,1.9 -11.454,2.02 z"
            id="Guinea-Bissau"
          />
        </a>
        <a
          xlink:title="Cameroon"
          href="https://en.wikipedia.org/wiki/Cameroon"
          target="_blank"
          id="Cameroon"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 582.9531,608.78886 c -4.477,-1.97 -9.832,-6.433 -12.992,-4.672 l -11.288,-4.027 -22.589,-0.207 h -35.465 l -24.154,0.265 2.451,-18.526 -6.352,-8.205 2.382,-2.911 -1.588,-2.382 -4.234,1.323 c -5.231,-0.649 -7.104,-4.352 -8.331,-8.642 -2.825,-1.062 -6.777,-0.68 -6.755,-5.386 5.941,-10.284 7.232,-24.325 18.829,-30.042 l 0.404,-4.533 16.558,-0.784 c 6.184,3.971 4.209,8.533 14.712,7.201 7.271,-13.125 12.545,-37.237 22.016,-38.272 5.734,-14.116 7.436,-34.146 17.203,-42.347 4.813,-1.72 8.919,-3.762 10.7,-6.859 1.039,-1.809 1.287,-7.657 0.421,-10.331 -0.622,-1.923 -1.819,-0.425 -3.711,-2.924 l -2.842,-10.84 2.301,-1.864 8.746,7.41 c 1.242,6.065 4.265,11.687 3.678,18.209 -0.634,9.487 -4.55,10.844 4.91,21.668 1.611,2.685 1.978,5.524 1.631,8.454 l -17.63,-1.75 c -1.966,4.812 -6.324,15.74 11.047,19.597 l 8.193,24.614 -15.271,25.396 2.129,18.538 c 6.444,11.88 13.91,24.253 24.338,33.865 l 0.553,18.964 z"
            id="Cameroon"
          />
        </a>
        <a
          xlink:title="Kenya"
          href="https://en.wikipedia.org/wiki/Kenya"
          target="_blank"
          id="Kenya"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 1015.5761,664.11086 c -2.197,3.432 -4.604,6.603 -9.435,6.744 -1.799,4.765 -4.121,9.115 -10.103,10.577 -6.587,11.898 -11.596,25.57 -19.824,35.622 l -23.012,-15.42 -3.615,-13.409 -70.107,-44.024 23.074,-35.278 0.492,-19.766 -7.926,-6.533 c -0.984,-7.629 -2.769,-14.523 -9.045,-17.3 l 8.16,-7.133 22.812,-1.031 14.192,1.215 c 4.865,2.514 7.447,2.602 20.319,13.333 l 25.842,3.884 c 4.124,-1.42 7.955,-3.528 10.826,-9.271 6.239,-0.901 12.857,-6.3 20.955,1.4 2.651,0.941 6.895,0.542 11.099,-0.068 -4.82,7.704 -9.888,13.917 -14.921,20.338 l 0.427,64.114 9.79,12.006 z"
            id="Kenya"
          />
        </a>
        <a
          xlink:title="Libya"
          href="https://en.wikipedia.org/wiki/Libya"
          target="_blank"
          id="Libya"
        >
          <path
            style="stroke: #000000; stroke-linecap: round"
            inkscape:connector-curvature="0"
            d="m 510.4281,78.56786 c 0,0 2.498,9.674 -4.972,14.979 -3.758,2.669 -16.044,11.679 -16.044,11.679 1.042,5.499 2.328,19.254 -9.604,21.128 -8.201,1.287 -3.903,7.917 1.581,16.909 l 0.349,46.824 c 0,0 -7.297,1.425 -6.78,3.354 1.16,4.329 1.247,7.437 6.713,12.303 3.51,3.123 3.575,8.763 3.272,12.224 -0.349,3.994 4.144,5.712 5.197,5.687 8.208,-0.199 14.685,-4.102 22.46,17.337 l 38.566,1.188 c 4.494,0.951 9.253,7.835 9.253,7.835 l 22.087,-6.275 130.045,64.3 -0.234,-10.444 c 14.377,1.171 16.028,-0.484 16.028,-0.484 l -8.887,-151.927 c -5.223,-7.167 -10.371,-14.193 -4.092,-22.142 0,0 0.042,-8.431 -1.53,-13.213 -1.636,-4.978 2.852,-8.362 2.852,-8.362 -0.07,-6.441 -12.435,-5.952 -18.94,-6.286 -8.537,-0.438 -14.273,-1.608 -12.787,-8.003 0,0 -22.316,-8.013 -30.953,-2.73 -4.589,2.807 -14.265,7.291 -16.026,13.041 -1.185,3.865 -0.124,6.486 2.18,10.412 4.034,6.873 -9.587,30.471 -25.157,11.586 0,0 -20.452,-5.63 -32.004,-8.155 -11.306,-2.471 -19.107,-12.385 -14.415,-18.386 0.459,-0.586 -30.685,-9.596 -30.685,-9.596 -14.384,2.224 -24.915,-1.982 -27.473,-4.783 z"
            id="Libya"
          />
        </a>
        <a
          xlink:title="Liberia"
          href="https://en.wikipedia.org/wiki/Liberia"
          target="_blank"
          id="Liberia"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 184.6991,561.06486 -14.325,-5.04 -50.466,-41.342 15.974,-13.366 -0.28,-4.779 7.828,-7.563 c 2.329,-1.574 5.16,-0.476 7.84,-0.183 6.723,9.793 4.921,14.398 3.086,19.367 3.814,0.97 6.695,7.318 13.007,-1.747 -0.176,-2.521 1.364,-2.544 3.964,-1.027 v 4.81 c 2.055,0.863 3.559,4.95 1.566,8.688 -1.058,1.982 -1.783,4.016 -4.053,4.423 l 6.593,4.04 c 1.872,-0.318 3.488,-1.709 7.429,6.611 0.847,1.166 10.696,5.297 2.523,15.101 l -0.686,12.007 z"
            id="Liberia"
          />
        </a>
        <a
          xlink:title="Madagaskar"
          href="https://en.wikipedia.org/wiki/Madagaskar"
          target="_blank"
          id="Madagaskar"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 1069.9931,1078.4809 47.992,-102.13904 c 3.67,-11.525 5.846,-23.05 11.263,-34.575 3.674,-4.858 8.334,-9.365 5.401,-16.583 l 1.043,-9.907 c 0.538,-2.994 2.188,-2.932 4.692,-0.521 l 1.47,5.983 c 1.784,-0.566 3.534,-1.174 3.396,-4.143 l -4.865,-52.939 -9.175,-9.944 -5.304,4.393 -1.38,13.589 -3.065,2.696 c -1.61,-0.49 -3.966,-2.918 -3.271,2.586 l -4.551,4.993 c -5.176,-9.601 -5.941,-1.083 -4.54,3.065 -0.137,1.812 0.372,4.914 -2.085,2.086 l -3.708,5.983 5.271,3.923 h -3.128 l -6.778,4.909 1.043,-5.951 -6.779,6.778 1.564,8.343 -4.571,0.184 0.896,-3.739 c -4.223,-2.776 -7.658,3.104 -11.445,5.119 l 4.172,6.778 -5.215,0.521 -2.086,-6.257 -8.405,1.38 c 0.263,2.956 -3.135,3.82 -6.194,4.877 l -0.521,-4.171 -4.692,4.692 -8.19,0.4 -1.596,7.053 -11.07,16.011 c 8.457,7.434 5.03,24.204 7.3,36.5 -3.114,9.919 -9.16,17.491 -14.6,25.55004 -6.326,4.177 -9.182,8.354 -10.144,12.531 -0.923,4.008 -2.866,11.887 -1.692,15.895 1.369,4.677 3.956,3.086 4.072,7.763 l 1.539,7.671 c -7.738,29.794 11.519,29.348 15.668,36.623 1.887,-0.858 4.285,0.602 6.128,-0.393 4.093,-2.208 9.326,-7.662 14.795,-5.85 4.574,1.517 8.006,-0.218 11.345,-1.763 z"
            id="Madagaskar"
          />
        </a>

        <a
          xlink:title="Mali"
          href="https://en.wikipedia.org/wiki/Mali"
          id="malic"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 248.8661,206.17086 -25.483,0.686 1.204,147.051 6.721,2.374 -4.711,14.377 -75.104,-4.249 -8.644,6.059 -4.723,-1.744 -3.271,-9.709 -4.294,-1.147 c -8.457,18.489 -9.755,16.338 -12.896,19.501 0.513,1.891 -0.72,3.695 -0.112,5.427 1.903,5.419 3.097,10.916 0.232,13.26 3.912,3.483 8.96,6.256 10.411,11.276 0.279,6.403 -0.07,11.342 -1.793,13.076 -1.707,1.71 0.32,5.697 3.869,2.711 l 3.451,-2.097 c 1.134,1.807 3.636,2.794 3.271,5.502 l 7.605,-5.2 9.287,3.858 c 0.943,-1.423 -0.24,-3.556 3.372,-4.089 1.897,0.052 3.231,-1.304 3.791,-4.596 l 5.098,1.237 c 1.372,4.802 3.044,9.647 2.163,14.127 l 7.523,5.681 -5.746,5.26 1.591,2.402 4.191,-2.794 0.622,10.063 5.294,4.864 c 2.171,-2.154 5.636,-4.87 8.257,-3.509 2.472,1.284 3.623,6.31 5.954,4.74 2.438,-1.641 2.896,-3.176 6.673,-3.171 2.846,0.004 -2.439,-4.915 1.104,-4.813 1.646,0.048 4.218,-1.891 7.063,-1.143 2.728,0.717 -0.664,10.876 1.335,8.695 4.956,-5.407 14.831,-3.313 15.785,-2.104 2.765,-9.899 -2.639,-19.029 16.328,-30.458 l 8.371,-17.632 c 11.159,-4.682 23.137,-2.551 33.397,-14.727 12.899,-8.617 25.79,-15.097 32.756,-13.165 l 13.022,0.014 7.318,-6.245 35.029,0.438 c 0.888,-1.72 1.376,-2.984 6.215,-5.363 0.038,-4.229 3.831,-4.462 6.467,-5.794 l 1.375,-51.91 -13.15,1.896 c -5.193,-3.376 -0.825,-4.452 -0.777,-11.961 -2.961,-6.667 -6.726,-7.67 -10.424,-7.013 -3.248,0.578 -4.71,-4.028 -6.414,-3.681 -2.935,0.598 -6.149,-2.219 -8.096,-6.363 -0.661,-1.409 -2.479,-2.051 -3.708,-2.896 -2.732,-1.876 -5.224,-3.318 -4.517,-6.244 0.004,0.001 -62.547,-47.775 -92.282,-70.758 z"
            id="Mali"
          />
        </a>
        <a
          xlink:title="Malawi"
          href="https://en.wikipedia.org/wiki/Malawi"
          id="Malawi"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 882.7691,801.72186 9.959,32.83 -2.939,29.147 c 5.91,5.324 11.79,9.645 20.084,23.483 1.041,1.737 2.131,6.079 1.764,9.561 l -3.609,15.409 -9.016,3.926 0.699,13.48 -4.787,0.073 c 2.466,-6.329 0.105,-5.147 -0.958,-5.531 -6.536,-4.128 -8.985,-10.204 -10.188,-15.653 5.347,-8.23 5.03,-14.844 4.42,-21.206 l -8.847,-1.636 c -6.83,1.669 -8.158,-0.837 -8.817,-3.115 -3.706,-8.681 -5.409,-5.336 -6.769,-5.923 l -5.276,-7.262 9.254,-17.156 7.219,-0.811 -4.913,-6.4 4.302,-22.312 4.096,-3.021 -11.83,-23.379 c 3.439,3.017 7.242,4.044 16.152,5.496 z"
            id="Malawi"
          />
        </a>
        <a
          xlink:title="Morocco"
          href="https://en.wikipedia.org/wiki/Morocco"
          id="Morocco"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 198.9331,157.45086 2.576,-19.744 15.475,-7.987 3.494,0.999 5.491,-4.493 9.125,0.66 0.499,-4.353 c 19.079,0.932 22.947,-4.17 26.317,-9.286 l 15.974,-6.489 h 5.99 l -2.995,-3.993 0.998,-3.693 -0.499,-4.793 c 6.247,-0.817 13.952,0.185 13.998,-6.35 l 25.937,0.359 3.494,-7.986 c -4.954,-1.818 -5.84,-8.981 -5.177,-16.593 0.493,-5.651 0.046,-18.509 0.046,-18.509 -1.71,-2.063 -3.84,-4.006 -4.332,-6.97 -4.159,-0.767 -9.265,-0.859 -11.004,-3.354 -6.038,-1.037 -12.02,-1.588 -17.419,-1.045 -9.885,0.994 -13.953,-2.567 -18.022,-11.934 -9.52,-0.621 -19.613,19.836 -26.956,29.95 -17.757,4.938 -30.607,12.943 -39.436,23.462 1.18,4.276 -0.893,5.923 -5.202,8.746 -2.785,1.825 -12.583,17.465 -9.273,26.196 0.041,6.822 -5.276,18.192 -20.557,25.758 0,0 -7.125,6.659 -18.394,10.336 -4.754,1.551 -15.776,2.787 -19.111,5.862 l 68.963,5.244 z"
            id="Morocco"
          />
        </a>
        <a
          xlink:title="Mauretanien"
          href="https://en.wikipedia.org/wiki/Mauretanien"
          id="Mauretanien"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 116.5021,262.64086 c 2.054,-14.697 -7.082,-35.352 21.465,-35.941 l 5.99,-44.427 50.916,4.492 2.756,-19.965 51.315,39.404 -25.56,0.621 1.296,147.157 6.469,2.306 -4.36,14.294 -75.333,-4.149 -8.587,6.072 -4.635,-1.521 -3.275,-9.978 -4.555,-1.127 c 0,0 -8.313,20.509 -13.605,18.435 0,0 -2.354,-2.554 -5.016,-5.306 -2.346,-2.423 -4.902,-4.824 -6.715,-8.243 -2.521,-4.755 -4.266,-12.389 -7.739,-11.843 -7.393,1.161 -13.026,-8.643 -13.026,-8.643 0,0 -8.613,-2.39 -14.787,-0.675 -7.98,2.216 -16.994,-0.084 -18.603,0.96 l 7.325,-20.35 0.747,-23.721 -4.461,-7.126 c 2.385,-4.217 9.672,-8.105 4.909,-20.73 -0.545,-1.444 -3.139,-0.666 -3.139,-0.666 l -3.076,-9.281 3.78,-3.79 59.504,3.741 z"
            id="Mauretanien"
          />
        </a>
        <a
          xlink:title="Mozambique"
          href="https://en.wikipedia.org/wiki/Mozambique"
          id="Mozambique"
          target="_blank"
        >
          <path
            style="fill: #1da1f2; stroke: #000000; stroke-linecap: round"
            inkscape:connector-curvature="0"
            d="m 813.2681,893.00386 3.532,9.24 -0.271,4.62 12.23,0.919 28.652,11.15 c 2.934,16.013 1.055,29.401 -3.597,41.277 -0.126,2.325 -0.901,4.547 -0.62,6.677 0.529,3.994 2.498,9.5 0.263,14.083 -5.755,11.799 -11.131,23.61004 -12.518,24.37804 -4.752,2.63 -10.658,10.319 -10.822,16.479 l 2.86,70.741 10.833,0.698 2.886,-10.018 -4.349,1.631 c 0.665,-3.963 -0.249,-7.926 3.914,-11.889 l 34.763,-13.74 c 4.305,-3.16 6.978,-7.95 9.972,-12.42 l -4.059,-1.402 7.198,-27.168 -3.698,-1.256 -2.991,-22.86504 c -9.848,-6.039 -4.15,-15.426 -0.177,-17.621 l 21.013,-17.856 1.733,3.559 7.794,-8.61 -1.719,-2.654 5.066,-0.928 1.505,-4.36 25.749,-12.671 6.431,0.066 c 4.876,-3.693 8.792,-7.66 15.901,-10.716 l -0.455,-3.816 8.579,-6.638 c 2.059,-2.113 3.827,-5.242 6.521,-5.132 l 0.376,-4.254 -1.632,-1.809 4.694,-7.039 1.188,-4.698 -0.749,-3.071 -2.875,-4.371 0.995,-17.214 c -2.193,-2.131 -0.982,-3.581 0.191,-5.038 l -0.567,-19.004 6.902,-11.628 c 0.178,-3.186 0.436,-6.371 -0.727,-9.557 -10.592,6.303 -28.314,17.276 -37.271,11.647 -3.924,0.479 -8.328,0.472 -12.125,5.409 -3.224,-0.301 -6.136,-0.913 -9.992,-0.583 l -12.677,2.296 c -2.301,-2.75 -4.612,-5.479 -9.948,-2.497 l -18.494,-0.603 -2.889,28.912 c 9.122,7.341 17.152,16.784 21.162,26.46 2.441,5.892 -1.979,14.385 -2.833,21.907 l -9.176,3.97 0.479,12.881 -4.52,0.685 c 1.1,-2.69 2.316,-5.436 -1.628,-5.772 -4.992,-4.232 -8.817,-9.003 -9.345,-15.296 3.822,-6.22 5.361,-13.253 4.349,-21.199 l -8.897,-1.63 c -3.464,0.84 -7.48,0.769 -8.385,-1.99 -2.401,-7.333 -4.728,-7.72 -7.449,-6.979 l -50.276,16.307 z"
            id="Mozambique"
          />
        </a>
        <a
          xlink:title="Namibia"
          href="https://en.wikipedia.org/wiki/Namibia"
          id="Namibia"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 509.1891,927.45086 c 0.711,9.319 1.581,18.582 10.126,25.159 l 35.296,62.85504 0.898,28.845 6.298,13.35 c 0.354,5.198 -1.563,10.396 1.631,15.595 l 4.385,24.552 19.168,21.345 c 11.908,-12.789 16.241,-2.46 19.225,5.732 7.288,-0.69 14.576,-1.362 21.864,-0.097 3.414,-3.085 6.904,-6.14 12.28,-8.439 l 2.804,-109.556 16.209,0.525 2.328,-61.69204 39.576,-3.492 3.042,8.273 c 2.849,-3.128 6.746,-8.887 12.57,-9.152 5.261,-0.239 7.833,-3.649 13.013,-6.405 l -3.793,-5.519 -25.482,4.242 -28.45,6.621 -46.047,-6.146 -7.71,-6.483 -72.52,0.839 c -3.463,-4.587 -16.584,-15.031 -26.068,-2.716 -3.208,-3.831 -7.079,0.967 -10.643,1.764 z"
            id="Namibia"
          />
        </a>
        <a
          xlink:title="Niger"
          href="https://en.wikipedia.org/wiki/Niger"
          id="malic"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 388.2081,313.34086 -1.434,51.949 c -2.297,1.334 -5.49,-0.026 -6.364,5.577 -2.554,1.481 -5.701,2.519 -6.267,5.491 l -35.108,-0.339 -7.134,5.994 -13.282,0.072 c -0.384,2.86 -0.315,6.438 1.945,8.208 2.006,1.57 1.711,4.877 1.202,7.79 l 16.797,22.41 6.094,2.277 c 3.378,-2.964 6.456,-3.834 7.987,6.129 l 20.803,2.952 c 1.451,-3.325 1.102,-7.938 4.871,-9.606 5.659,-3.2 4.734,-8.795 6.753,-13.319 4.62,-2.203 1.666,-5.336 26.079,-5.108 6.313,3.969 12.406,5.297 19.055,13.277 l 4.896,0.2 c 0.14,-1.674 5.078,-5.114 8.097,-5.688 3.271,-1.779 9.086,1.317 16.836,8.123 l 13.807,1.236 13.259,-9.509 23.18,-0.595 c 3.496,1.366 6.086,4.492 11.245,3.199 3.706,-4.172 10.795,-8.154 18.938,-11.588 -1.264,-3.69 -2.686,-7.293 -1.507,-12.03 1.986,-1.67 4.428,-1.934 4.668,-8.146 l 28.005,-31.077 5.194,-49.556 3.955,-9.965 c -8.006,-3.278 -13.489,-6.385 -15.246,-17.437 -0.957,-6.02 0.408,-13.79 -0.187,-25.03 l -4.986,0.855 c -2.737,-3.222 -5.388,-6.675 -8.889,-7.86 l -39.266,-1.43 -99.483,65.587 -24.513,6.957 z"
            id="Niger"
          />
        </a>
        <a
          xlink:title="Nigeria"
          href="https://en.wikipedia.org/wiki/Nigeria"
          id="Nigeria"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 454.0041,555.60586 -3.364,-0.157 -1.104,5.889 c -5.767,0.14 -11.533,-0.47 -17.3,-2.576 -13.774,8.575 -24.685,7.173 -30.314,-12.618 -4.28,-11.047 -11.207,-14.633 -18.543,-17.067 l -23.968,0.138 1.048,-38.254 c 3.803,-4.84 6.17,-11.596 8.306,-18.659 6.409,-1.577 5.041,-7.212 5.334,-11.98 6.406,-4.243 2.207,-10.9 -0.431,-15.36 l 0.414,-12.444 c 0.545,-3.528 -0.257,-7.345 4.804,-10.585 1.97,-2.422 3.939,-1.242 5.91,-13.086 3.512,-2.699 7.221,-5.355 26.135,-4.754 6.611,3.457 15.028,6.263 19.617,13.386 l 4.257,-0.204 c 2.747,-1.935 3.596,-5.347 8.59,-5.533 2.848,-0.061 3.016,-2.8 16.529,7.806 l 14.088,1.316 13.084,-9.431 23.453,-0.458 c 3.422,1.426 6.226,4.552 10.661,3.19 5.862,-5.837 12.974,-8.855 19.66,-11.672 2.672,4.284 6.392,8.471 9.727,11.143 l -2.226,1.778 2.819,11.346 c 1.311,0.991 3.695,1.338 3.756,3.08 2.518,11.128 -3.719,14.571 -11.096,17.028 -9.394,7.31 -11.754,27.367 -17.151,41.92 -10.494,3.1 -13.989,22.506 -22.014,38.463 -7.741,1.511 -9.7,-2.258 -14.558,-7.5 l -16.867,1.093 -0.441,4.511 c -10.771,5.625 -13.25,18.379 -18.815,30.251 z"
            id="Nigeria"
          />
        </a>
        <a
          xlink:title="Republic_of_the_Congo"
          href="https://en.wikipedia.org/wiki/Republic_of_the_Congo"
          id="Republic_of_the_Congo"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 514.3811,721.62186 -16.807,-21.696 11.248,-7.146 -1.323,-12.175 13.763,-8.337 c 2.35,-1.847 4.112,-6.328 8.337,0.265 7.311,-0.866 11.57,1.012 13.896,4.632 l 5.822,-3.97 2.382,-24.217 c -0.111,-8.343 -9.448,-13.792 1.721,-25.673 1.878,-7.81 -5.108,-13.157 -12.836,-12.837 -1.891,2.418 -2.602,6.31 -7.259,5.269 l 0.245,-11.62 2.778,-4.234 22.497,0.265 10.868,3.864 c 4.055,-2.072 9.484,4.083 13.258,4.715 l -0.571,-18.637 c 8.525,-10.861 14.807,-14.104 21.835,-15.747 l 10.719,4.896 13.233,-3.705 c -3.249,8.694 -6.792,15.831 -10.083,24.362 -5.642,14.62 -3.757,32.442 -6.326,48.817 -12.219,5.357 -16.649,14.764 -23.025,23.158 l -5.271,24.256 c -11.503,12.324 -21.654,22.202 -28.21,21.664 -0.044,-6.928 -7.563,-13.072 -13.701,-1.682 -4.28,2.834 -7.36,1.363 -10.648,-1.759 -4.757,-6.284 -6.322,-0.959 -8.469,2.249 l -8.073,5.023 z"
            id="Republic_of_the_Congo"
          />
        </a>
        <a
          xlink:title="Rwanda"
          href="https://en.wikipedia.org/wiki/Rwanda"
          id="Rwanda"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 827.2191,653.85386 -7.365,5.892 h -2.504 l -1.473,-2.062 c -6.532,6.518 -11.413,13.86 -16.425,21.138 1.807,0.431 3.251,1.313 4.271,2.725 l 2.431,-2.283 2.799,0.222 1.399,3.756 8.47,-1.694 0.368,-5.082 10.533,-0.589 c 1.545,-2.111 2.919,-4.223 5.229,-6.334 l -7.733,-15.689 z"
            id="Rwanda"
          />
        </a>
        <a
          xlink:title="Zambia"
          href="https://en.wikipedia.org/wiki/Zambia"
          id="Zambia"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 830.0431,774.90486 -30.442,7.507 c -1.979,3.619 -3.382,5.708 -4.15,9.809 -0.198,1.063 0.718,3.249 1.041,6.238 0.64,5.917 2.644,16.292 0.83,19.093 -4.251,6.562 -7.125,18.679 -6.883,19.025 2.427,3.477 7.353,7.026 10.257,7.793 4.004,1.059 8.501,0.559 9.475,-0.945 l 0.479,19.216 c -1.561,-1.288 -3.8,-2.19 -4.905,-3.592 -6.389,-0.544 -12.151,2.875 -21.546,-14.896 -6.174,-0.53 -12.276,-2.331 -17.551,-9.674 -2.558,-0.67 -6.826,2.83 -10.675,3.692 -11.009,-1.054 -14.173,-6.273 -16.982,-7.879 -1.909,-1.768 -3.116,-3.827 -3.488,-6.235 l -11.329,3.758 -2.034,-8.764 -4.687,0.153 -4.029,32.823 3.707,3.738 -34.558,-0.894 -1.665,61.512 19.249,17.013 26.087,-4.094 3.817,5.733 1.653,3.862 20.415,0.216 2.786,2.448 3.813,-1.004 c 11.007,-14.394 21.04,-18.073 31.173,-22.86 l 0.416,-9.56 c 7.995,-4.95 16.618,-7.732 26.601,-5.819 l -3.74,-9.466 50.708,-15.888 -5.403,-7.897 9.144,-17.041 7.066,-0.832 -4.572,-6.234 4.156,-22.444 4.156,-2.909 -8.313,-16.21 -3.786,-7.507 -19.442,-6.523 c -6.612,-9.398 -8.161,-7.63 -10.221,-7.081 l -6.628,-7.381 z"
            id="Zambia"
          />
        </a>
        <a
          xlink:title="Senegal"
          href="https://en.wikipedia.org/wiki/Senegal"
          id="Senegal"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 51.1511,344.04486 c -2.99,5.14 -5.022,7.822 -5.108,11.995 -0.198,9.537 -9.717,12.576 -14.48,19.51 4.433,6.461 9.258,12.808 10.009,20.352 h 18.351 c 3.959,-5.286 9.789,-3.556 16.43,1.217 l 10.596,0.785 2.335,3.003 -7.674,2.669 c -5.252,-1.122 -9.991,-3.143 -14.347,-5.834 -3.075,1.823 -6.592,2.912 -11.01,2.498 l -2.002,3.336 -16.015,0.667 c -0.944,4.338 -1.815,8.675 -1.001,13.013 3.854,-0.356 7.607,0.209 11.667,-1.992 5.472,1.401 10.667,0.176 15.69,-2.68 l 27.676,0.331 c 10.401,5.949 23.374,6.562 35.384,7.344 0.566,-6.269 4.069,-12.503 -9.586,-22.021 2.096,-2.698 1.312,-8.905 -0.522,-13.389 -1.038,-2.536 0.952,-3.334 0.009,-6.041 -1.297,-0.723 -2.86,-2.773 -5.046,-4.835 -2.444,-2.308 -7.406,-8.937 -7.406,-8.937 -2.904,-8.713 -6.65,-12.277 -6.65,-12.277 -8.915,1.459 -14.421,-8.576 -14.421,-8.576 -7.61,-2.056 -11.59,-0.542 -14.902,-0.368 -8.648,0.453 -10.408,1.52 -17.977,0.23 z"
            id="Senegal"
          />
        </a>
        <a
          xlink:title="Sierra_Leone"
          href="https://en.wikipedia.org/wiki/Sierra_Leone"
          id="Sierra_Leone"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 119.8841,514.76286 -13.128,-6.667 c -1.46,-4.063 -5.507,-6.279 -9.636,-8.437 0.389,-5.74 -3.419,-7.046 -5.964,-9.121 l -0.866,-13.702 c 5.757,2.24 10.853,-3.568 15.868,-10.043 -1.249,-5.045 10.182,-4.528 17.814,-4.381 7.603,6.619 15.563,12.966 10.66,29.059 3.252,-1.226 6.321,-2.635 9.929,-3.505 l -9.053,8.47 0.292,4.818 -15.916,13.509 z"
            id="Sierra_Leone"
          />
        </a>
        <a
          xlink:title="Zimbabwe"
          href="https://en.wikipedia.org/wiki/Zimbabwe"
          id="Zimbabwe"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 731.6301,938.93986 5.062,10.253 c 1.662,1.932 3.829,3.733 3.679,6.873 3.95,6.754 8.877,11.555 13.383,17.197 3.456,1.083 6.513,2.646 8.613,5.423 2.121,2.56 4.534,5.14 8.792,5.798 -1.797,10.423 2.88,19.39904 7.776,21.26804 5.8,0.264 11.286,1.344 15.444,5.309 11.798,1.407 13.177,3.046 15.969,4.653 9.664,-3.231 14.169,2.163 19.664,5.882 1.315,-7.878 5.956,-12.288 11.21,-16.442 4.148,-6.04204 7.953,-15.50204 11.916,-23.39604 2.938,-4.894 0.57,-10.066 -0.14,-15.153 l 0.779,-6.488 c 7.14,-17.904 4.949,-28.592 3.79,-41.189 l -28.988,-11.188 -12.18,-0.868 0.403,-4.127 c -10.326,-3.347 -18.729,1.163 -26.43,5.411 l -0.349,9.508 c -23.713,10.578 -24.974,16.328 -31.502,22.978 l -3.537,1.097 -2.883,-2.551 -20.471,-0.248 z"
            id="Zimbabwe"
          />
        </a>
        <a
          xlink:title="Somalia"
          href="https://en.wikipedia.org/wiki/Somalia"
          id="Somalia"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 1037.4371,436.58786 -5.874,9.156 c -5.707,8.231 9.947,20.813 22.824,32.831 l 49.755,15.962 16.039,-0.668 -48.324,55.292 -19.527,-0.387 c -6.21,3.486 -12.279,7.056 -16.728,11.599 -5.08,3.163 -10.762,5.124 -16.162,7.648 -3.348,7.314 -8.926,13.292 -13.955,19.598 l 0.155,64.165 9.786,12.311 22.514,-25.214 37.732,-35.615 4.34,-0.521 15.812,-14.957 0.646,-2.993 c 8.678,-6.592 19.484,-17.653 22.176,-23.116 4.771,-9.661 10.917,-17.847 17.771,-25.688 l 14.857,-42.906 c 2.89,-2.786 5.056,-6.537 6.874,-10.754 0.751,-4.5 3.442,-6.091 5.509,-8.618 l 1.692,-21.486 c 4.813,0.676 2.492,-8.843 2.764,-14.656 -1.859,-1.658 -3.932,-4.392 -0.044,-6.587 l -0.035,-5.355 c -3.495,0.291 -7.014,-3.702 -10.449,-1.006 -4.301,4.047 -10.038,6.942 -16.581,7.482 -7.275,0.602 -13.205,4.811 -16.254,3.778 -4.93,4.089 -11.211,5.476 -19.364,3.117 -5.442,4.842 -9.01,11.131 -26.487,6.688 l -11.14,7.965 c -17.189,4.66 -21.668,-9.254 -30.322,-17.065 z"
            id="Somalia"
          />
        </a>
        <path
          id="path3246"
          d="M 887.21875 477.4375 L 887.1875 477.4375 L 879.46875 480.28125 L 879.46875 468.5 L 875 460 L 867.53125 457.15625 L 861.5 423.625 L 855 421 L 855 426.6875 L 843.5625 426.6875 L 849.5 431.125 L 850.5 445 L 833.34375 467 L 817.1875 456.375 L 806.5 460.3125 L 806.5 466 L 797.15625 469 L 797 463.15625 L 776.5625 462.5 L 776.5625 469.875 L 757 469.875 L 750.5 470.5 L 746 461.875 L 740.5 461.875 L 732.5 461.875 L 717.96875 490.3125 L 717.9375 490.59375 C 718.10172 490.66577 718.31159 490.66768 718.46875 490.75 C 720.56475 493.685 721.439 497.26925 731.125 496.15625 L 736.71875 501.28125 C 735.50975 509.77125 748.0845 514.4505 755.4375 520.5625 L 762.28125 534.0625 C 768.17025 536.9235 775.249 538.15125 776.125 548.03125 C 780.046 550.25925 781.58775 553.52325 784.46875 556.40625 C 785.79275 557.73125 784.56 558.99925 785.875 560.03125 C 789.604 562.95925 796.327 563.67575 797.25 559.46875 C 797.25 559.46875 803.47175 561.82425 807.96875 561.28125 C 810.76075 560.94425 810.50425 558.30875 813.28125 557.71875 L 833.28125 575.21875 L 836.84375 572.625 C 850.57175 575.81 864.30425 573.983 878.03125 572 L 894.40625 557.96875 L 917.0625 557.15625 L 917.28125 545.375 L 905.625 541.34375 L 897.5625 523.5 L 885.875 513.625 C 887.918 510.479 882.339 507.3335 879.625 504.1875 C 875.947 505.1875 871.956 504.38375 867.75 502.21875 L 870.75 498.375 L 870.6875 492.84375 L 881.40625 492.65625 C 883.49025 491.34525 885.75175 490.776 887.34375 487.5 L 887.21875 477.4375 z "
        />
        <a
          xlink:title="Sudan"
          href="https://en.wikipedia.org/wiki/Sudan"
          id="Sudan"
          target="_blank"
        >
          <path
            id="Sudan"
            d="M 893.90625 240.4375 L 888.46875 245.96875 L 884 244.96875 L 881.90625 254 L 872.25 256.53125 L 871.375 263.875 L 862.84375 264.84375 L 858.78125 260.59375 L 726.6875 264.59375 L 728.28125 297.6875 C 722.66525 298.1135 716.8745 298.13 712.3125 297.5 L 712.5625 308.03125 L 714.09375 370.625 L 696.1875 371.59375 L 696.40625 378.28125 L 686.15625 391.25 L 686.8125 400.46875 L 683.375 402.03125 C 683.047 407.78825 682.38675 412.83025 679.96875 414.40625 L 680.09375 421.875 L 687.5625 420.3125 C 689.0655 428.6965 689.43175 437.503 696.46875 443.875 L 697.375 449.46875 L 694.03125 449.9375 C 699.67225 456.9585 706.181 463.53725 709.875 471.53125 C 703.60505 490.95062 712.51974 488.21763 717.9375 490.59375 L 717.96875 490.3125 L 732.5 461.875 L 740.5 461.875 L 746 461.875 L 750.5 470.5 L 757 469.875 L 776.5625 469.875 L 776.5625 462.5 L 797 463.15625 L 797.15625 469 L 806.5 466 L 806.5 460.3125 L 817.1875 456.375 L 833.34375 467 L 850.5 445 L 849.5 431.125 L 843.5625 426.6875 L 855 426.6875 L 855 421 L 861.5 423.625 L 867.53125 457.15625 L 875 460 L 879.46875 468.5 L 879.46875 480.28125 L 887.1875 477.4375 L 887.21875 477.4375 L 886.96875 457.03125 L 892 449.5625 L 897.09375 449.625 L 899.59375 436.71875 C 905.62775 429.29375 907.9985 419.7735 917.6875 414.4375 L 920.75 390.03125 C 918.986 372.80425 924.22075 357.932 926.71875 342.125 C 929.21375 341.098 932.06575 342.99175 934.09375 338.21875 L 945.25 332.5625 C 947.451 331.0965 948.19675 327.662 948.84375 324.125 C 947.33075 320.746 945.16225 321.3565 943.15625 320.9375 C 939.86325 314.6115 934.39925 314.05475 929.65625 311.59375 L 923.03125 271.5 L 917.78125 265.9375 C 919.12125 251.5695 902.20525 249.0215 893.90625 240.4375 z "
          />
        </a>
        <a
          xlink:title="South Africa"
          href="https://en.wikipedia.org/wiki/South Africa"
          id="South Africa"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 586.9911,1119.1599 26.844,54.016 0.352,12.35 c -1.357,2.971 -3.582,3.058 -6.071,2.577 -1.008,1.417 -1.953,3.251 0.258,4.632 3.326,5.905 5.733,13.087 9.971,18.147 3.481,4.158 8.646,6.333 12.741,9.921 l 10.659,0.852 c 2.194,-1.541 0.199,-3.642 8.15,-4.416 l 15.613,-0.101 c 4.929,-1.936 -0.617,-6.811 15.459,-5.617 2.641,0.334 3.785,3.232 7.927,0.993 7.463,-1.203 14.589,1.642 21.86,2.736 2.155,-1.722 1.353,-4.65 13.46,-2.311 l 1.238,-4.709 14.189,0.223 84.114,-78.167 c 13.34,-5.536 16.289,-21.69 20.027,-37.039 l -10.561,-0.707 c -0.109,-1.279 -10.139,5.896 -11.411,6.037 -5.423,0.604 -8.553,-1.149 -7.773,-10.649 0.581,-7.081 8.167,-12.721 10.172,-14.031 2.675,-1.748 5.343,4.839 8.006,3.099 0,0 -0.941,-30.122 -2.067,-55.32 -5.664,-3.446 -9.726,-9.368 -19.815,-5.973 -5.297,-3.958 -10.594,-3.553 -15.89,-4.789 l -58.19,46.15 -2.136,9.643 c -6.611,3.495 -13.223,3.02 -19.834,3.723 -5.008,-3.808 -10.404,-6.057 -16.273,-6.414 l -9.707,8.497 c -0.908,4.679 -3.628,5.127 -5.712,7.061 -3.303,1.915 -5.029,4.355 -5.746,7.132 -9.782,2.419 -16.644,0.821 -23.017,-1.448 1.229,-5.72 4.907,-9.435 1.839,-18.669 l -13.531,-15.135 -1.76,64.997 c -4.093,1.772 -8.186,4.463 -12.278,8.392 -6.822,-0.584 -12.491,-1.531 -21.953,0.177 -1.534,-7.177 -8.09,-19.044 -19.154,-5.86 z"
            id="South Africa"
          />
        </a>
        <a
          xlink:title="Swasiland"
          href="https://en.wikipedia.org/wiki/Swasiland"
          id="Swasiland"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 832.3051,1077.5389 0.757,14.712 c -4.398,2.2 -7.667,4.4 -11.413,6.601 -4.11,-0.103 -6.742,-1.181 -7.393,-4.471 -1.037,-5.241 -0.446,-8.811 2.463,-13.216 2.114,-3.203 5.937,-7.245 8.501,-7.674 1.319,-0.221 3.267,1.759 4.404,3.429 l 2.681,0.619 z"
            id="Swasiland"
          />
        </a>
        <a
          xlink:title="Tanzania"
          href="https://en.wikipedia.org/wiki/Tanzania"
          id="Tanzania"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 879.4831,644.11086 -6.065,9.036 -46.022,0.783 7.543,15.499 c -11.881,11.988 -4.325,14.259 -1.5,18.894 -5.211,9.704 -9.22,21.556 -19.644,21.952 -2.62,0.659 -4.539,0.003 -5.029,3.224 -1.148,7.538 2.157,23.151 5.187,32.171 3.106,6.962 8.596,11.673 11.575,17.504 2.745,4.045 3.418,8.09 4.716,12.135 l 6.382,7.199 c 2.693,-0.8 5.693,-0.075 9.94,6.894 l 19.154,6.323 c 4.13,3.828 10.656,4.859 17.069,6.024 l 10.041,33.134 18.765,0.479 c 3.244,-2.041 6.487,-1.867 9.732,2.35 6.985,-1.101 13.227,-2.945 22.413,-1.845 2.905,-3.117 6.517,-5.44 12.536,-5.056 7.209,5.747 27.77,-5.938 36.626,-11.659 -2.159,-3.896 -6.097,-6.015 -9.753,-8.414 0.295,-4.43 -1.493,-9.276 -3.091,-14.085 -1.863,-2.938 -3.301,-5.77 -2.069,-7.935 l -4.353,-9.512 2.731,-0.891 c -0.71,-7.253 -0.661,-14.098 3.663,-18.64 -2.969,-6.142 -13.075,-11.014 -12.495,-18.3 l 8.632,-24.304 -22.905,-15.171 -3.794,-13.516 -69.985,-44.273 z"
            id="Tanzania"
          />
        </a>
        <a
          xlink:title="Togo"
          href="https://en.wikipedia.org/wiki/Togo"
          id="Togo"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 331.8811,534.46486 11.918,-3.438 -7.908,-61.995 c -1.01,-4.726 -5.704,-6.82 -9.287,-9.709 l 1.899,-10.132 -14.053,-1.819 c -2.631,5.257 -1.229,10.261 5.146,14.955 5.15,21.002 4.51,41.177 6.124,61.673 l 6.161,10.465 z"
            id="Togo"
          />
        </a>
        <a
          xlink:title="Tunisia"
          href="https://en.wikipedia.org/wiki/Tunisia"
          id="Tunisia"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 495.5201,10.18686 c -3.016,0.103 -14.837,-6.059 -21.478,3.602 0,0 -5,2.215 -5.281,7.344 -0.435,7.901 -1.188,32.5 -1.188,32.5 -0.831,-1.329 -6.753,-0.325 -7.688,3.688 -1.271,5.454 -7.419,4.026 -7.906,6.781 -0.981,5.547 3.862,10.65 9.563,15.625 1.461,1.276 -0.542,8.334 0.906,9.625 4.415,3.939 12.25,6.625 12.25,6.625 1.817,18.073 5.031,30.563 5.031,30.563 1.191,0.745 13.819,-3.591 9.465,-21.346 -0.504,-2.056 25.883,-10.603 21.146,-27.118 -0.492,-1.717 -4.788,0.316 -5.485,-2.8 -1.565,-6.991 -1.364,-8.713 -4.021,-9.763 -1.335,-0.527 -6.857,4.775 -7.979,4.098 -2.504,-1.513 -5.628,-5.035 -4.276,-6.779 2.329,-3.005 19.157,-13.436 19.325,-19.187 0.251,-8.559 -2.908,-9.384 -7.105,-11.663 -2.384,-1.294 -1.527,-5.349 -0.756,-7.662 0.473,-1.418 9.558,-4.51 8.51,-7.796 -0.711,-2.229 -2.029,-2.571 -2.512,-4.314 -0.356,-1.286 -7.221,5.885 -7.654,4.777 -1.145,-2.921 -1.489,-4.709 -2.867,-6.8 z"
            id="Tunisia"
          />
        </a>
        <a
          xlink:title="Chad"
          href="https://en.wikipedia.org/wiki/Chad"
          id="Chad"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 712.3601,307.75586 -130.179,-64.109 -17.243,5.211 c 1.18,10.185 0.312,18.07 0.495,24.304 0.268,9.14 6.628,15.548 15.348,18.638 l -3.86,9.394 -5.548,50.3 -27.169,29.898 c -0.862,1.696 -1.342,3.393 -1.24,5.089 -0.86,1.945 -1.965,2.793 -3.144,3.302 -1.897,1.178 -0.961,3.169 -1.181,4.648 -1.58,10.598 20.577,26.294 20.577,26.294 1.141,4.788 2.828,9.041 3.674,14.095 0.912,5.449 -1.756,12.025 -0.988,16.747 1.115,6.854 8.721,7.542 7.681,18.005 l -17.444,-1.605 c -5.063,10.107 -1.52,16.693 10.913,19.644 l 8.212,24.515 c 13.192,-3.011 22.482,-1.409 39.717,-9.197 l 15.68,-1.553 c 2.892,-4.933 9.013,-7.559 6.914,-16.055 l 21.697,-2.369 c 1.696,-1.58 2.51,-4.042 5.265,-4.563 4.253,-0.132 5.497,-2.896 6.635,-5.753 1.982,-4.697 6.979,-6.38 10.734,-9.306 0.677,-15.492 12.387,-11.057 19.523,-13.988 l -0.854,-5.376 c -4.084,-4.453 -7.606,-9.507 -8.884,-23.677 l -7.613,1.431 -0.168,-6.887 c 2.331,-2.5 4.005,-8.431 3.408,-12.646 l 3.545,-1.663 -0.873,-8.954 10.48,-13.396 -0.325,-6.563 18.064,-0.95 -1.849,-62.905 z"
            id="Chad"
          />
        </a>
        <a
          xlink:title="Uganda"
          href="https://en.wikipedia.org/wiki/Uganda"
          id="Uganda"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 833.6651,575.04886 3.304,-2.504 c 13.282,3.388 27.125,1.448 40.967,-0.48 l 8.291,-6.858 c 4.707,2.772 8.229,7.527 8.935,17.447 l 7.976,6.378 0,19.369 -29.683,44.683 -46.276,0.855 -7.082,5.738 -2.764,0.054 -1.591,-2.128 1.062,-27.608 10.372,-15.741 16.543,-14.84 -10.001,-6.323 -0.057,-18.042 z"
            id="Uganda"
          />
        </a>
        <a
          xlink:title="Western_Sahara"
          href="https://en.wikipedia.org/wiki/Western_Sahara"
          id="Western_Sahara"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 116.5321,262.88586 c 2.054,-14.697 -7.083,-35.352 21.465,-35.941 l 5.99,-44.427 50.916,4.492 3.87,-29.992 -68.104,-5.03 c -6.32,9.701 -9.989,17.914 -19.53,21.698 -9.004,3.571 -12.526,14.683 -15.073,24.307 l -26.8,30.666 c -0.965,6.963 -5.012,11.615 -10.427,15.24 -4.896,6.405 -7.887,14.363 -8.639,21.439 l 6.829,-6.191 59.503,3.739 z"
            id="Western_Sahara"
          />
        </a>
        <a
          xlink:title="Central_African_Republic"
          href="https://en.wikipedia.org/wiki/Central_African_Republic"
          id="Central_African_Republic"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 571.3631,511.99486 -15.382,25.232 2.063,18.345 c 6.573,12.911 14.235,24.841 24.452,34.473 6.34,-7.057 9.128,-12.498 21.686,-15.749 l 10.926,4.75 12.254,-3.449 c 3.037,-3.527 2.791,-9.108 3.029,-14.387 4.211,-6.869 8.748,-10.479 13.319,-13.749 3.388,2.621 9.387,0.601 9.839,8.439 4.014,4.516 7.8,7.208 10.725,3.018 3.392,5.015 17.807,3.414 27.725,4.513 0.572,-1.861 1.624,-4.32 3.654,-8.004 3.321,-0.504 6.307,-1.811 11.373,1.876 l 20.946,-7.328 1.364,3.092 8.378,-1.346 -0.146,-3.12 18.507,-1.537 4.121,5.291 1.909,-2.861 3.161,2.307 2.664,-3.061 8.625,-0.337 c -1.764,-4.888 -1.012,-10.684 -14.083,-13.765 l -6.721,-13.729 c -6.738,-6.45 -18.681,-9.431 -19.552,-19.793 l -5.165,-4.99 c -4.377,0.204 -8.188,2.101 -13.065,-5.813 -7.882,-1.198 -13.231,-2.433 -8.054,-18.396 -4.049,-9.774 -10.235,-14.402 -15.604,-21.867 -11.3,2.161 -15.836,1.584 -16.234,13.267 -3.589,2.858 -8.86,4.315 -10.5,8.799 -1.422,3.313 -2.597,5.865 -7.624,6.294 -1.434,0.885 -3.173,2.686 -4.968,4.655 l -21.414,2.233 c 1.122,4.028 0.688,7.659 -3.921,12.155 -1.229,1.201 -2.112,2.672 -3.261,3.964 l -15.42,1.435 c -17.826,7.865 -26.773,6.195 -39.606,9.143 z"
            id="Central_African_Republic"
          />
        </a>
        <a
          xlink:title="Lesotho"
          href="https://en.wikipedia.org/wiki/Lesotho"
          id="Lesotho"
          target="_blank"
        >
          <path
            inkscape:connector-curvature="0"
            d="m 778.1011,1147.3989 c -1.207,0.114 -3.313,0.468 -4.825,1.072 -1.113,0.445 -2.119,0.913 -2.949,1.743 -0.674,0.674 -0.854,1.673 -1.072,2.547 -0.229,0.914 -2.082,2.096 -2.815,2.279 -1.027,0.257 -2.413,0 -3.485,0 -2.145,0 -3.166,-0.469 -4.424,-2.146 -1.534,-2.046 -3.46,-3.622 -4.825,-5.897 -0.967,-1.61 -1.848,-2.593 -2.413,-4.29 -0.425,-1.273 -0.269,-2.688 -0.269,-4.021 0,-1.714 0.789,-3.276 2.279,-4.021 0.179,-0.09 0.357,-0.179 0.536,-0.269 1.752,-0.876 2.188,-2.857 3.485,-4.155 1.429,-1.429 3.281,-2.697 4.826,-4.021 0.981,-0.842 2.383,-1.594 3.484,-2.145 1.693,-0.847 3.308,-1.296 5.095,-1.743 1.341,-0.335 2.903,-0.793 4.021,-1.072 0.221,-0.055 0.446,-0.089 0.67,-0.134 0.224,-0.045 0.447,-0.09 0.67,-0.134 1.58,-0.316 3.572,0.473 4.424,1.608 1.167,1.556 2.628,3.057 3.754,4.558 0.588,0.785 0.553,2.714 1.072,3.753 0.741,1.484 1.622,2.588 2.145,4.156 0.535,1.605 -0.235,3.286 -0.938,4.691 -0.836,1.673 -1.967,2.638 -3.217,3.888 -1.023,1.023 -2.116,1.854 -3.218,2.681 -0.581,0.436 -1.365,0.685 -2.011,1.072 z"
            id="Lesotho"
          />
        </a>
      </g>
    </svg> */

/* ---
  document.querySelectorAll("a").forEach(function (anchor) {
    anchor.addEventListener("click", (e) => e.preventDefault());
  });
   
  const regions = Array.from(
    document.querySelectorAll("g[class='region']")
  ).map((region) => region.id);

  document.querySelectorAll("path").forEach(function (path) {
    console.log(path.getAttribute("id"));
    path.addEventListener("click", function (e) {
      regionsData.some(function (region) {
        if (region.id === path.getAttribute("id")) {
          console.log("Iteration");

          document
            .querySelectorAll("path")
            .forEach((elem) => elem.classList.remove("active-region"));

          path.classList.add("active-region");
          const regionName = document.querySelector(".region-name");
          const regionNews = document.querySelector(".region-news");
          const regionReports = document.querySelector(".region-reports");
          const regionTenders = document.querySelector(".region-tenders");
          const regionAnalysis = document.querySelector(".region-analysis");

          regionName.textContent = region.id;
          regionNews.textContent = region.news;
          regionReports.textContent = region.reports;
          regionTenders.textContent = region.tenders;
          regionAnalysis.textContent = region.analysis;

          return true;
        }
        console.log("Outside Invoked!");
      });
    });
    
  }); --- */
