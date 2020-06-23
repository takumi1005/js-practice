'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
    const ctx = canvas.getContext('2d');

    // ctx.fillRect(x, y, width, height);
    // 四角を描画(塗り潰し)
    // ctx.fillRect(50, 50, 50, 50)
    // 四角を描画(枠のみ)
    ctx.strokeRect(50, 50, 50, 50)
  }
  draw();
}