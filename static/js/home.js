const year_p = document.getElementById("date");
const year = new Date().getFullYear();
year_p.innerHTML = `© ${year} ` + year_p.innerHTML;

let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
  collapse.classList.toggle("flex flex-col");
  collapse.classList.toggle("hidden");
};

// window.onclick = () => {
//   collapse.classList.toggle("hidden");
// }