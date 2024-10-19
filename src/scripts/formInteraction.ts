const form = document.getElementById("contactform") as HTMLFormElement;
const submitButton = document.getElementById(
  "submit-button"
) as HTMLButtonElement;
const loadingIcon = document.getElementById(
  "loading-icon"
) as HTMLButtonElement;
const buttonText = document.getElementById("button-text") as HTMLButtonElement;

form.addEventListener("submit", (e: Event) => {
  Array.from(form.elements).forEach((element) => {
    element.setAttribute("readonly", "readonly");
    element.classList.add("cursor-not-allowed");
    element.classList.add("opacity-80");
  });

  loadingIcon.classList.remove("hidden");
  buttonText.innerHTML = "Sending";
  submitButton.disabled = true;
  submitButton.classList.add("cursor-not-allowed");
  submitButton.classList.add("opacity-80");
});
