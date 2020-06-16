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

// classNameを操作
{
  document.querySelector("button").addEventListener("click", () => {
    const targetNode = document.getElementById("target");
    targetNode.className = "my-color my-border";
  });
}

// classListを使う
{
  document.querySelector("button").addEventListener("click", () => {
    const targetNode = document.getElementById("target");
    // targetNode.classList.add('my-color');
    // if (targetNode.classList.contains('my-color') === true) {
    //   targetNode.classList.remove('my-color');
    // } else {
    //   targetNode.classList.add('my-color');
    // }
    //toggleを使って簡略化
    targetNode.classList.toggle("my-color");
  });
}

// カスタムデータ属性を扱う
{
  document.querySelector("button").addEventListener("click", () => {
    const targetNode = document.getElementById("target");
    // targetNode.textContent = "Dotinstall";
    targetNode.textContent = targetNode.dataset.translation;
  });
}
*/
// 要素を追加
{
  document.querySelector("button").addEventListener("click", () => {
    const item2 = document.createElement("li");
    item2.textContent = "item 2";
    const ul = document.querySelector("ul");
    ul.appendChild(item2);
  });
}
