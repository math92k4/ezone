export function setUpForm(types, games, areas) {
  const typeField = document.querySelector("#list_of_gametypes");
  const gameField = document.querySelector("#list_of_games");
  const areaField = document.querySelector("#list_of_areas");

  types.forEach((data) => {
    appendData(data.type, typeField);
  });

  games.forEach((data) => {
    appendData(data.games, gameField);
  });

  areas.forEach((data) => {
    appendData(data.areas, areaField);
  });
}

function appendData(data, field) {
  const temp = document.querySelector("template");
  const clone = temp.cloneNode(true).content;
  const label = clone.querySelector("label");

  label.textContent = data;
  label.setAttribute("for", data);

  field.appendChild(clone);
}
