const textareaEl = document.querySelector("#textarea");
const total = document.querySelector(".total");
const remaining = document.querySelector(".remaining");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

const updateCounter = function () {
  total.innerHTML = textareaEl.value.length;
  remaining.innerHTML =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
};

updateCounter();
