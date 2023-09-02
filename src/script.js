const que = document.querySelectorAll(".faq");
const plus = document.querySelector(".plus");
console.log(plus);

que.forEach((e, index) => {
  e.addEventListener("click", () => {
    e.nextElementSibling.classList.toggle("hidden");
    e.children[1].classList.toggle("rotate-45");
    // plus.innerText = "-";
    // ans.classList.toggle("hidden");
    que.forEach((v, i) => {
      if (i != index) {
        v.nextElementSibling.classList.add("hidden");
        v.children[1].classList.remove("rotate-45");
      }
    });
  });
});

// que.addEventListener("click", (e) => {
//   ans.classList.toggle("hidden");
// });

// alert("hffii");
// console.log("Jai shree ram");
