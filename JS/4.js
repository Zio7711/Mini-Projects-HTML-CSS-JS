// get the bee element
const bee = document.querySelector(".bee");

// record the last x coordinate
// for bee's direction
let last_x = 0;

// cursor move event
window.addEventListener("mousemove", function (e) {
  let x = e.clientX - 15;
  let y = e.clientY - 15;
  bee.style.left = x + "px";
  bee.style.top = y + "px";

  if (last_x < x) {
    // face right
    bee.classList.add("flip");
  } else {
    // face left
    bee.classList.remove("flip");
  }

  //   update last x
  last_x = x;
});
