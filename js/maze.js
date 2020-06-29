(() => {
  // 迷路を配列で用意

  /*
  0 0 0
  0 1 0
  0 1 0
  map[x][y]
  */

  /*
  棒倒し法
  (1) 一つ飛びに壁（棒）を作る
  (2) 1列目の棒を上下左右のどちらかに倒す
  (3) 2列目以降の棒を左以外のどれかに倒す

  0 0 0 1 0
  1 1 0 1 0
  0 0 0 0 0
  0 1 0 1 1
  0 1 0 0 0
  */

  var map = [];
  // map[0] = [0, 0, 0];
  // map[1] = [0, 1, 1];
  // map[2] = [0, 0, 0];

  // Canvasで描画
  var col = 13; // 奇数
  var row = 13;

  for (var x = 0; x < col; x++) {
    map[x] = [];
    for (var y = 0; y < row; y++) {
      map[x][y] = 0;
    }
  }

  var points = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0] //左
  ];

  function rand(n) {
    return Math.floor(Math.random() * (n + 1));
  }

  for (var x = 1; x < col; x +=2) {
    for (var y =1; y < row; y +=2) {
      do {
        if (x === 1) {
          // 上下左右に倒す
          var r = points[rand(3)];
        } else {
          // 左以外に倒す
          var r = points[rand(2)];
        }
      } while (map[x + r[0]][y + r[1]] === 1);
      map[x + r[0]][y + r[1]] = 1;
    }
  }

  for (var x = 1; x < col; x +=2) {
    for (var y =1; y < row; y +=2) {
      map[x][y] = 1;
    }
  }

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