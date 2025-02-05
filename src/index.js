const toggleAns = document.querySelectorAll(".toggle-ans");
const answer = document.querySelectorAll(".answer");

toggleAns.forEach((e, index) => {
  e.addEventListener("click", () => {
    const isHidden = window.getComputedStyle(answer[index]).display === "none";
    answer[index].style.display = isHidden ? "inline" : "none";
    e.src = isHidden
      ? "public/assets/images/icon-minus.svg"
      : "public/assets/images/icon-plus.svg";
  });
});
