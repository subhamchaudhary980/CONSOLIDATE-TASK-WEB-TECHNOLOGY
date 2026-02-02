const btn = document.getElementById("btn");
const text = document.getElementById("text");

if (btn && text) {
  btn.addEventListener("click", () => {
    text.classList.toggle("hidden");

    if (text.classList.contains("hidden")) {
      btn.textContent = "Show More";
    } else {
      btn.textContent = "Show Less";
    }
  });
}