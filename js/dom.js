"use strict";
/*
//複数の要素を取得
{
  function update() {
    // document.getElementById('target').textContent = 'Changed!';
    // document.querySelector('p').textContent = 'Changed!';
    // document.querySelectorAll('p')[1].textContent = 'Changed!';
    document.querySelectorAll("p").forEach((p, index) => {
      p.textContent = `${index}番目のpです！`;
    });
  }
  setTimeout(update, 1000);
}
*/
// addEventListenerを使う
{
  document.querySelector("button").addEventListener("click", () => {
    document.getElementById("target").textContent = "Changed!";
  });
}
