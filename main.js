import "./sass_folder/style.scss";
import { getJSON } from "./rest_actions.js";
import { post } from "./rest_actions.js";
import { setUpForm } from "./display_label_data.js";
import { initialSlideCalc } from "./fieldset_change.js";
import { slideFieldset } from "./fieldset_change.js";

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
    nxtBtn.addEventListener("click", slideFieldset)
  }); 

  backButtons.forEach((bckBtn) => {
    bckBtn.addEventListener("click", slideFieldset);
  }); 
  


 
  // fetch content from database and store it in a const
  const games = await getJSON("https://frontendspring2021-a6f0.restdb.io/rest/games");
  const types = await getJSON("https://frontendspring2021-a6f0.restdb.io/rest/types");
  const areas = await getJSON("https://frontendspring2021-a6f0.restdb.io/rest/areas");

  // remove loading screen
  document.querySelector("#loading_screen").classList.add("loaded");

  // when cta is clicked, toggle popup
  const ctaBtn = document.querySelector("#cta_btn");
  ctaBtn.addEventListener("click", function () {
    document.querySelector("form").classList.toggle("open");
  });

  // display fetched data into form 
  setUpForm(types, games, areas);

  // eventlistener on click on submit button will start function that prepares data to be posted
  document.querySelector("#submit_btn").addEventListener("click", preparePost);
}


function preparePost() {
  const form = document.querySelector("form"); 
  const isValid = form.checkValidity(); 

  if (isValid === true) {
    // all the checked types are put into an array
    const typesToPost = [];
    const checkedTypes = document.querySelectorAll(
      "#list_of_gametypes input:checked"
    );
    checkedTypes.forEach((elm) => typesToPost.push(elm.value));
    console.log(checkedTypes);

    // all the games types are put into an array
    const gamesToPost = [];
    const checkedGames = document.querySelectorAll(
      "#list_of_games input:checked"
    );
    checkedGames.forEach((elm) => gamesToPost.push(elm.value));
    console.log(checkedGames);

    // all the areas types are put into an array
    const areasToPost = [];
    const checkedAreas = document.querySelectorAll(
      "#list_of_areas input:checked"
    );
    checkedAreas.forEach((elm) => areasToPost.push(elm.value));
    console.log(checkedAreas);


    const url = "https://frontendspring2021-a6f0.restdb.io/rest/userinfo";

      const allDataToPost = {
        types: typesToPost,
        games: gamesToPost,
        areas: areasToPost,
        user_fullname: form.elements.user_fullname.value,
        user_mail: form.elements.user_mail.value,
      }; 
      console.log(allDataToPost); 
      
      post(allDataToPost, url); 

  }


}


