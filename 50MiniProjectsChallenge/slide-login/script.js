const login = document.getElementById("login");
const register = document.getElementById("register");
const form_box = document.getElementsByClassName("form-box")[0];
const register_box = document.getElementsByClassName("register-box")[0];
const login_box = document.getElementsByClassName("login-box")[0];

register.addEventListener("click", () => {
  form_box.style.transform = "translateX(80%)";
  login_box.classList.add("hidden");
  register_box.classList.remove("hidden");
});

login.addEventListener("click", () => {
  form_box.style.transform = "translateX(0%)";
  register_box.classList.add("hidden");
  login_box.classList.remove("hidden");
});
