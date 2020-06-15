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

// addEventListenerを使う
{
  document.querySelector("button").addEventListener("click", () => {
    document.getElementById("target").textContent = "Changed!";
  });
}
*/
// 要素の属性を操作
{
  document.querySelector("button").addEventListener("click", () => {
    const targetNode = document.getElementById("target");
    targetNode.textContent = "Changed!";
    targetNode.title = "This is title!";
    targetNode.style.color = "red";
    targetNode.style.backgroundColor = "skyblue";
  });
}
