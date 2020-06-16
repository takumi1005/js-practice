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

// 要素を追加
{
  document.querySelector("button").addEventListener("click", () => {
    const item2 = document.createElement("li");
    item2.textContent = "item 2";
    const ul = document.querySelector("ul");
    ul.appendChild(item2);
  });
}

// 要素の複製、挿入
{
  document.querySelector("button").addEventListener("click", () => {
    const item0 = document.querySelectorAll("li")[0];
    const copy = item0.cloneNode(true);
    const ul = document.querySelector("ul");
    const item2 = document.querySelectorAll("li")[2];
    ul.insertBefore(copy, item2);
  });
}

// 要素を削除
{
  document.querySelector("button").addEventListener("click", () => {
    const item1 = document.querySelectorAll("li")[1];
    // item1.remove(); //対応していないブラウザがある
    // 親Node.removeChild(削除するNode)
    document.querySelector("ul").removeChild(item1); //remove()に対応していない場合
  });
}

//input要素を操作
{
  document.querySelector("button").addEventListener("click", () => {
    const li = document.createElement("li");
    const text = document.querySelector("input");
    li.textContent = text.value;
    document.querySelector("ul").appendChild(li);

    text.value = "";
    text.focus();
  });
}

// セレクトボックスを操作
{
  document.querySelector("button").addEventListener("click", () => {
    const li = document.createElement("li");
    const color = document.querySelector("select");
    li.textContent = `${color.value} - ${color.selectedIndex}`;
    document.querySelector("ul").appendChild(li);
  });
}

// ラジオボタンを操作
{
  document.querySelector("button").addEventListener("click", () => {
    const colors = document.querySelectorAll("input");
    let selectedColor;
    colors.forEach((color) => {
      if (color.checked === true) {
        selectedColor = color.value;
      }
    });
    const li = document.createElement("li");
    li.textContent = selectedColor;
    document.querySelector("ul").appendChild(li);
  });
}

// チェックボックスを操作
{
  document.querySelector("button").addEventListener("click", () => {
    const colors = document.querySelectorAll("input");
    const selectedColors = [];
    colors.forEach((color) => {
      if (color.checked === true) {
        selectedColors.push(color.value);
      }
    });
    const li = document.createElement("li");
    li.textContent = selectedColors.join("-");
    document.querySelector("ul").appendChild(li);
  });
}
*/
//いろいろなイベント
{
  document.querySelector("button").addEventListener("dblclick", () => {
    console.log("Double Clicked!");
  });
  // document.addEventListener("mousemove", (e) => {
  //   // console.log("moved!");
  //   console.log(e.clientX, e.clientY);
  // });
  document.addEventListener("keydown", (e) => {
    console.log(e.key);
  });
}
