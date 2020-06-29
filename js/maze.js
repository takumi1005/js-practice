(() => {
  // 迷路を配列で用意

  /*
  0 0 0
  0 1 0
  0 1 0
  map[x][y]
  */
  var map = [];
  map[0] = [0, 0, 0];
  map[1] = [0, 1, 1];
  map[2] = [0, 0, 0];

  // Canvasで描画
  var col = 3; // 奇数
  var row = 3;

  var startX = 0;
  var startY = 0;
  var goalX = col - 1;
  var goalY = row - 1;

  var wallSize = 10;
  var wallColor = '#3261AB';
  var routeColor = '#ff0088';

  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) {
    return false;
  }
  var ctx = canvas.getContext('2d');
  canvas.width  = (col + 2) * wallSize;
  canvas.height = (row + 2) * wallSize;

  // 上下の壁
  for (var x = 0; x < col + 2; x++) {
    drawWall(x, 0);
    drawWall(x, row + 1);
  }

  // 左右の壁
  for (var y = 0; y < row + 2; y++) {
    drawWall(0, y);
    drawWall(col + 1, y);
  }

  // 迷路の内部
  for (var x = 0; x < col; x++) {
    for (var y = 0; y < row; y++) {
      if (map[x][y] === 1) {
          drawWall(x + 1, y + 1);
        }
      if ((x === startX && y === startY) || (x === goalX && y === goalY)) {
        drawRoute(x + 1, y + 1);
      }
    }
  }

  // 壁を描画
  function drawWall(x, y) {
    ctx.fillStyle = wallColor;
    drawRect(x, y);
  }

  function drawRoute(x, y) {
    ctx.fillStyle = routeColor;
    drawRect(x, y);
    }

  function drawRect(x, y) {
    ctx.fillRect(
      x * wallSize,
      y * wallSize,
      wallSize,
      wallSize);
  }
})();