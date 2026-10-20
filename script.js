const helloButton = document.querySelector("#hello-button");
const greeting = document.querySelector("#greeting");

helloButton.addEventListener("click", () => {
  greeting.textContent = "你好！很高興你來到這裡。🎉";
});
