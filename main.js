"use strict";

const div = document.createElement("div");
div.classList.add("box");

div.addEventListener("click", () => {
  div.classList.toggle("circle");
});

document.body.appendChild(div);
