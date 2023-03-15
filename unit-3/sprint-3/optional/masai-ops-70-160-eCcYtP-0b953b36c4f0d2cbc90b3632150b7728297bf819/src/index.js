// display the listing cards
function displayCards(data) {
  let mainContainer = document.querySelector("#container");
  // map through the data and append each acrd to the main container

  data.map(function(ele){

    let div = document.createElement("div");
    mainContainer.append(div)
  });

  return mainContainer;
}

// filter by role


if (typeof exports !== "undefined") {
  module.exports = {
    displayCards,
    filterByRole,
    searchByLanguage,
  };
}
