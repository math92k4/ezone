import "./sass_folder/style.scss";

import { getJSON } from "./rest_actions.js";
import { post } from "./rest_actions.js";

window.addEventListener("load", init);

async function init() {
  const games = await getJSON("https://frontendspring2021-a6f0.restdb.io/rest/games");
  const types = await getJSON("https://frontendspring2021-a6f0.restdb.io/rest/types");
  const areas = await getJSON("https://frontendspring2021-a6f0.restdb.io/rest/areas");

  const ctaBtn = document.querySelector("#cta_btn");
  ctaBtn.addEventListener("click", function () {
    document.querySelector("form").classList.toggle("open");
  });

  setUpForm();
}

function setUpForm() {
  console.log("soFarSoGood");
}
