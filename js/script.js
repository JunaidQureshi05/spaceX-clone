const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");
btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

let scrollStarted = false;

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  // Stop scrolling when the overlay is open
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
      // get counter target
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;
      //   create an increment
      const increment = target / 100;
      //   if counter is less than target ,add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = "0"));
}
