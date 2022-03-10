const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const circles = document.querySelectorAll(".circle");
const progress = document.querySelector("#progress");

let currentActive = 1;
next.addEventListener("click", function () {
  currentActive++;
  if (currentActive > circles.length) {
    console.log(currentActive);
    currentActive = circles.length;
  }
  console.log(currentActive);
  update();
});
prev.addEventListener("click", function () {
  console.log(currentActive);
  currentActive--;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});
function update() {
  circles.forEach((circle, index) => {
    // console.log(index);
    if (index < currentActive) {
      circle.classList.add("active");
      //   console.log(index , currentActive);
    } else {
      circle.classList.remove("active");
      //   console.log(index + 1, currentActive);
    }
  });
  const active = document.querySelectorAll(".active");
  console.log(active);
  progress.style.width =
    ((active.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    //   console.log(currentActive)
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
