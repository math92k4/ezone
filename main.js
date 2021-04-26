import "./sass_folder/style.scss";

import { getJSON } from "./rest_actions.js";
import { post } from "./rest_actions.js";

window.addEventListener("load", init);

async function init() {
  const allBtns = document.querySelectorAll("button");
  allBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });

  const games = await getJSON("https://frontendspring2021-a6f0.restdb.io/rest/games");
  const types = await getJSON("https://frontendspring2021-a6f0.restdb.io/rest/types");
  const areas = await getJSON("https://frontendspring2021-a6f0.restdb.io/rest/areas");

  document.querySelector("#loading_screen").classList.add("loaded");

  const ctaBtn = document.querySelector("#cta_btn");
  ctaBtn.addEventListener("click", function () {
    document.querySelector("form").classList.toggle("open");
  });

  setUpForm();
}

function setUpForm() {
  console.log("soFarSoGood");
}
