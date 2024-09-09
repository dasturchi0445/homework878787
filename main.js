let ism = prompt("ismingizni kiriting...");
let wrapper = document.querySelector(".wrapper");

const fullName = document.createElement("h1");
fullName.textContent = ism;

wrapper.appendChild(fullName);
