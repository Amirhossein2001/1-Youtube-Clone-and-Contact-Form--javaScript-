let navigation;
navigation = document.querySelector(".navigation");
let toggle;
let hamburger;
hamburger = document.querySelector("#hamburger img");
toggle = document.querySelector(".toggle");
toggle.onclick = function () {
  navigation.classList.toggle("active");
};
hamburger.onclick = function () {
  navigation.classList.toggle("active");
};
