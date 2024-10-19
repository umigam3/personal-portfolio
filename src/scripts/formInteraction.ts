const form = document.getElementById("contactform") as HTMLFormElement;
const submitButton = document.getElementById(
  "submit-button"
) as HTMLButtonElement;

form.addEventListener("submit", (e: Event) => {
  Array.from(form.elements).forEach((element) => {
    (element as HTMLInputElement).disabled = true;
    element.classList.add("cursor-not-allowed");
    element.classList.add("opacity-80");
  });

  submitButton.innerHTML = "Sending ...";
  submitButton.classList.add("cursor-not-allowed");
  submitButton.classList.add("opacity-80");
});
