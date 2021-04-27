export function setUpForm(types, games, areas) {
  const typeField = document.querySelector(
    "#list_of_gametypes .checkbox_container"
  );
  const gameField = document.querySelector(
    "#list_of_games .checkbox_container"
  );
  const areaField = document.querySelector("#list_of_areas .checkbox_container");

  types.forEach((data) => {
    appendData(data.type, typeField);
  });

  const typesNextButton = document.querySelector("#list_of_gametypes .next");

  typesNextButton.addEventListener("click", filterGames); 

function filterGames() {

  gameField.innerHTML = ""; 

  const checkedTypes = document.querySelectorAll(
  "#list_of_gametypes input:checked"
  );
  const checkedTypesArr = []; 
  checkedTypes.forEach((elm) => checkedTypesArr.push(elm.value));

let previousAppendedElm; 

    games.forEach((data) => {

      data.type_of_game.forEach((gameType) => {
        if (checkedTypesArr.includes(gameType) && previousAppendedElm!= data.games) {
          previousAppendedElm = data.games; 
          appendData(data.games, gameField);
        }
      });
        
      })




  }

  areas.forEach((data) => {
    appendData(data.areas, areaField);
  });
}

function appendData(data, field) {
  const temp = document.querySelector("template");
  const clone = temp.cloneNode(true).content;
  const label = clone.querySelector("label");
  const input = clone.querySelector("input");

  label.textContent = data;
  label.setAttribute("for", data);
  input.setAttribute("name", data);
  input.setAttribute("value", data);

  field.appendChild(clone);
}
