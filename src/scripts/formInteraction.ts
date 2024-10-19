const form = document.getElementById("contactform") as HTMLFormElement;
const submitButton = document.getElementById(
  "submit-button"
) as HTMLButtonElement;

form.addEventListener("submit", (e: Event) => {
  Array.from(form.elements).forEach((element) => {
    element.setAttribute("readonly", "readonly");
    element.classList.add("cursor-not-allowed");
    element.classList.add("opacity-80");
  });

  submitButton.innerHTML = "Sending...";
  submitButton.disabled = true;
  submitButton.classList.add("cursor-not-allowed");
  submitButton.classList.add("opacity-80");
});
