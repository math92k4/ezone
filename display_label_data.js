export function setUpForm(types, games, areas) {
  const typeField = document.querySelector("#list_of_gametypes .checkbox_container");
  const gameField = document.querySelector("#list_of_games .checkbox_container");
  const areaField = document.querySelector("#list_of_areas .checkbox_container");

  types.forEach((data) => {
    appendData(data.type, typeField);
  });

  areas.forEach((data) => {
    appendData(data.areas, areaField);
  });

  const typesNextButton = document.querySelector("#list_of_gametypes .next");
  typesNextButton.addEventListener("click", filterGames);

  //
  //
  //
  //
  //Closure
  function filterGames() {
    //empties the container
    gameField.innerHTML = "";

    //makes array of checked "game_types"
    const checkedTypes = document.querySelectorAll("#list_of_gametypes input:checked");
    const checkedTypesArr = [];
    checkedTypes.forEach((elm) => checkedTypesArr.push(elm.value));

    //for each game ------ a bit sweaty
    games.forEach((data) => {
      let previousAppendedElm;
      //we loop through for each category / type of the game
      data.type_of_game.forEach((gameType) => {
        //If the games type is included in the checkedTypesArray, and != the game that is prevously appendended, we append this game
        if (checkedTypesArr.includes(gameType) && previousAppendedElm != data.games) {
          previousAppendedElm = data.games;
          appendData(data.games, gameField);
        }
      });
    });
  }
}

function appendData(data, field) {
  const temp = document.querySelector("template");
  const clone = temp.cloneNode(true).content;
  const label = clone.querySelector("label");
  const input = clone.querySelector("input");

  label.textContent = data;
  label.setAttribute("for", data);
  input.setAttribute("name", data);
  input.setAttribute("id", data);
  input.setAttribute("value", data);

  field.appendChild(clone);
}
