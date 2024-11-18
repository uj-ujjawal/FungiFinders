const cards = document.querySelectorAll(".mushroom-guide .card");
const seasonalFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");

const noResultsMessage = document.querySelector(".no-matches");

const currentFilters = {
  season: "all",
  edible: "all",
};

// seasonalFilter.addEventListener("change", (e) => {
// console.log(e);
// console.log(e.target);
// console.log(e.target.value);
// currentFilters.season = e.target.value;
// console.log(currentFilters);
// });

cards.forEach((card, index) => {
  const mushroomId = `mushroom-${index + 1}`;
  card.style  .viewTransitionName = `card-${mushroomId}`;
});

seasonalFilter.addEventListener("change", updateFilter);
edibleFilter.addEventListener("change", updateFilter);

function updateFilter(e) {
  const filterType = e.target.name;
  // console.log(e.target.name);
  currentFilters[filterType] = e.target.value;
  // console.log(currentFilters);

  // if document.startViewTransition() not supported then=>
  if (!document.startViewTransition()) {
    filterCards();
    return;
  }
  document.startViewTransition(() => filterCards());
}

function filterCards() {
  let hasVisibleCards = false;
  cards.forEach((card) => {
    // console.log(card);
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;
    // console.log(season, edible);
    const matchedSeason = currentFilters.season === season;
    const matchedEdible = currentFilters.edible === edible;

    if (
      (matchedSeason || currentFilters.season === "all") &&
      (matchedEdible || currentFilters.edible === "all")
    ) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }

    if (hasVisibleCards) {
      noResultsMessage.hidden = true;
    } else {
      noResultsMessage.hidden = false;
    }
  });
}

function enableFiltering() {
  seasonalFilter.hidden = false;
  edibleFilter.hidden = false;
}

enableFiltering();
