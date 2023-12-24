const bulb = document.querySelector(".bulb");
const btn = document.querySelector("#bulb_btn");
const sliderDot = document.querySelector(".slider");

btn.addEventListener("click", function () {
  bulb.classList.toggle("on");

  if (bulb.classList.contains("on")) {
    sliderDot.classList.add("slider-ons");
    sliderDot.innerText = "ON";
  } else {
    sliderDot.classList.remove("slider-ons");
    sliderDot.innerText = "OFF";
    console.log(sliderDot);
  }
});
