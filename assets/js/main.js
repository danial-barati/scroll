let _right = document.getElementById("right");
let _left = document.getElementById("left");
let _bus = document.querySelector(".bus");
let _imgs = document.querySelectorAll(".bus>img");
let _ul = document.getElementById("list");

let flag = 0;

_imgs.forEach((val) => {
  let _li = document.createElement("li");
  _ul.appendChild(_li);
});

let li = document.querySelectorAll("ul>li");

li.forEach((val, i) => {
  val.addEventListener("click", () => {
    flag = i;
    checkBullet();
    _bus.style.transform = "translateX(" + -flag * 500 + "px)";
    leftcheck();
    rightcheck();
  });
});

_right.addEventListener("click", () => {
  if (flag < _imgs.length - 1) {
    flag++;
    _bus.style.transform = "translateX(" + -(flag * 500) + "px)";
    if (flag == _imgs.length - 1) {
      _right.style.display = "none";
    }
  }
  leftcheck();
  checkBullet();
});

_left.addEventListener("click", () => {
  if (flag > 0) {
    flag--;
    _bus.style.transform = "translateX(" + -(flag * 500) + "px)";
    if (flag == 0) {
      _left.style.display = "none";
    }
  }
  rightcheck();
  checkBullet();
});

function rightcheck() {
  if (flag == _imgs.length - 1) {
    _right.style.display = "none";
  } else {
    _right.style.display = "block";
  }
}
function leftcheck() {
  if (flag == 0) {
    _left.style.display = "none";
  } else {
    _left.style.display = "block";
  }
}

// check the bullet ***********

function checkBullet() {
  li.forEach((bull) => {
    bull.style.backgroundColor = "transparent";
  });
  li[flag].style.backgroundColor = "whitesmoke";
}
