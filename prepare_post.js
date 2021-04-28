"use strict";

import { post } from "./rest_actions.js";

export function preparePost() {
  console.log(this);
  const form = document.querySelector("form");
  form.reportValidity();
  const isValid = form.checkValidity();
  console.log(isValid);

  if (isValid === true) {
    // all the checked types are put into an array
    const typesToPost = [];
    const checkedTypes = document.querySelectorAll("#list_of_gametypes input:checked");
    checkedTypes.forEach((elm) => typesToPost.push(elm.value));
    console.log(checkedTypes);

    // all the games types are put into an array
    const gamesToPost = [];
    const checkedGames = document.querySelectorAll("#list_of_games input:checked");
    checkedGames.forEach((elm) => gamesToPost.push(elm.value));
    console.log(checkedGames);

    // all the areas types are put into an array
    const areasToPost = [];
    const checkedAreas = document.querySelectorAll("#list_of_areas input:checked");
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
