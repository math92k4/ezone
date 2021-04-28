import "./sass_folder/style.scss";
import { getJSON } from "./rest_actions.js";
import { setUpForm } from "./display_label_data.js";
import { initialSlideCalc } from "./fieldset_change.js";
import { slideFieldset } from "./fieldset_change.js";
import { checkFieldsetValidity } from "./check_validity.js";
import { preparePost } from "./prepare_post.js";

window.addEventListener("load", init);

async function init() {
  initialSlideCalc();

  // prevent all buttons from attempting submit form
  const allBtns = document.querySelectorAll("form button");
  allBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });

  // when either a back or next button is clicked
  // run the function calcDistance
  const nextButtons = document.querySelectorAll(".next");
  const backButtons = document.querySelectorAll(".back");

  nextButtons.forEach((nxtBtn) => {
    nxtBtn.addEventListener("click", checkFieldsetValidity);
  });

  backButtons.forEach((bckBtn) => {
    bckBtn.addEventListener("click", () => {
      slideFieldset(bckBtn);
    });
  });

  // fetch content from database and store it in a const
  const games = await getJSON("https://frontendspring2021-a6f0.restdb.io/rest/games");
  const types = await getJSON("https://frontendspring2021-a6f0.restdb.io/rest/types");
  const areas = await getJSON("https://frontendspring2021-a6f0.restdb.io/rest/areas");
  // display fetched data into form
  setUpForm(types, games, areas);

  // remove loading screen
  document.querySelector("#loading_screen").classList.add("loaded");

  // when cta is clicked, toggle popup
  const ctaBtn = document.querySelector("#cta_btn");
  ctaBtn.addEventListener("click", function () {
    document.querySelector("form").classList.toggle("open");
  });

  // eventlistener on click on submit button will start function that prepares data to be posted
  document.querySelector("#submit_btn").addEventListener("click", preparePost);
}
