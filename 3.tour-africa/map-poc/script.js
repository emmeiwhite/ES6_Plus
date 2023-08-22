const regionsData1 = [
  {
    id: "western_africa",
    news: 87,
    reports: 36,
    tenders: 77,
    analysis: 18,
    about:
      "A culturally diverse region with vibrant music, art, and historical significance.",
  },
  {
    id: "north_africa",
    news: 98,
    reports: 33,
    tenders: 54,
    analysis: 90,
    about:
      "Home to ancient civilizations, iconic landmarks like the pyramids, and a blend of Arab and Mediterranean influences.",
  },
  {
    id: "central_africa",
    news: 43,
    reports: 77,
    tenders: 24,
    analysis: 67,
    about:
      "Teeming with lush rainforests and diverse wildlife, a region of unique biodiversity.",
  },
  {
    id: "east_africa",
    news: 4,
    reports: 21,
    tenders: 8,
    analysis: 13,
    about:
      "Renowned for its natural wonders, including Mount Kilimanjaro and the Serengeti National Park.",
  },
  {
    id: "southern_africa",
    news: 8,
    reports: 3,
    tenders: 36,
    analysis: 42,
    about:
      "A land of stunning landscapes, from cosmopolitan cities to breathtaking safaris",
  },
];

// Continue adding the remaining objects in the same format with different default values.

// document.querySelectorAll("a").forEach(function (anchor) {
//   anchor.addEventListener("click", (e) => e.preventDefault());
// });

// const paths = Array.from(document.querySelectorAll("path")).map(
//   (path) => path.id
// );
// console.log(paths);
// document.querySelectorAll("path").forEach(function (path) {
//   console.log(path.getAttribute("id"));
//   path.addEventListener("click", function (e) {
//     regionsData.some(function (region) {
//       if (region.id === path.getAttribute("id")) {
//         // console.log(region.id);
//         // console.log(region.id);
//         console.log("Iteration");

//         document
//           .querySelectorAll("path")
//           .forEach((elem) => elem.classList.remove("active-region"));

//         path.classList.add("active-region");
//         const regionName = document.querySelector(".region-name");
//         const regionNews = document.querySelector(".region-news");
//         const regionReports = document.querySelector(".region-reports");
//         const regionTenders = document.querySelector(".region-tenders");
//         const regionAnalysis = document.querySelector(".region-analysis");

//         regionName.textContent = region.id;
//         regionNews.textContent = region.news;
//         regionReports.textContent = region.reports;
//         regionTenders.textContent = region.tenders;
//         regionAnalysis.textContent = region.analysis;

//         return true;
//       }
//       console.log("Outside Invoked!");
//     });
//   });
// });

/** Let me get each regions with country  || NOT NEEDED NOW, I Changed the logic dynamically
 * 
const centralAfrica = [...document.querySelectorAll(".central_africa")];
const northAfrica = [...document.querySelectorAll(".north_africa")];
const southernAfrica = [...document.querySelectorAll(".southern_africa")];
const westernAfrica = [...document.querySelectorAll(".western_africa")];
const eastAfrica = [...document.querySelectorAll(".east_africa")];
*/

// centralAfrica.forEach((country) => {
//   country.addEventListener("click", function () {
//     centralAfrica.forEach((state) => {
//       state.classList.add("fillBackground");
//     });

//     // Now at the same time if already other regions have the background, I got to remove that

//   });
// });

const allCountries = [...document.querySelectorAll("path")];
const regionWrapper = document.querySelector(".region-details-wrapper");
allCountries.forEach((country) => {
  country.addEventListener("click", function () {
    // regionsData1.forEach((region) => {
    //   // 5 conditions
    //   console.log(country.getAttribute("class"));
    // });

    if (!regionWrapper.classList.contains("show-Region-Box")) {
      regionWrapper.classList.add("show-Region-Box");
    }

    const currentRegion = regionsData1.find(
      (region) => region.id === country.getAttribute("class")
    );

    const currentRegionId = currentRegion.id;
    console.log(currentRegionId);

    const currentRegionCountries = [
      ...document.querySelectorAll(`.${currentRegionId}`),
    ];

    console.log(currentRegionCountries);

    // Removing fillBackground from other 4 regions
    const regionsExceptCurrentRegion = regionsData1.filter(
      (region) => region.id !== country.getAttribute("class")
    );

    regionsExceptCurrentRegion.forEach((otherRegion) => {
      const otherRegions = [...document.querySelectorAll(`.${otherRegion.id}`)];
      otherRegions.forEach((reg) => {
        reg.classList.remove("fillBackground");
      });
      //   otherRegions.classList.remove("fillBackground");
    });
    currentRegionCountries.forEach((country) => {
      country.classList.add("fillBackground");
      const regionName = document.querySelector(".region-name");
      const regionNews = document.querySelector(".region-news");
      const regionReports = document.querySelector(".region-reports");
      const regionTenders = document.querySelector(".region-tenders");
      const regionAnalysis = document.querySelector(".region-analysis");

      regionName.textContent = currentRegion.id;
      regionNews.textContent = currentRegion.news;
      regionReports.textContent = currentRegion.reports;
      regionTenders.textContent = currentRegion.tenders;
      regionAnalysis.textContent = currentRegion.analysis;
    });
  });
});
