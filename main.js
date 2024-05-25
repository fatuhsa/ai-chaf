document.addEventListener("DOMContentLoaded", function () {
  const rootElement = document.getElementById("root");

  const formElement = document.createElement("form");
  formElement.id = "inputForm";
  formElement.className = "container mt-4";

  const inputGroup = document.createElement("div");
  inputGroup.className = "mb-3";

  const labelElement = document.createElement("label");
  labelElement.setAttribute("for", "promptInput");
  labelElement.className = "form-label text-light";
  labelElement.textContent = "Masukkan pertanyaan Anda:";

  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.className = "form-control text-light bg-dark";
  inputElement.id = "promptInput";
  inputElement.name = "promptInput";
  inputElement.placeholder = "Ketik pesan...";
  inputElement.required = true;

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "btn btn-outline-light";
  submitButton.textContent = "Submit";

  inputGroup.appendChild(labelElement);
  inputGroup.appendChild(inputElement);
  formElement.appendChild(inputGroup);
  formElement.appendChild(submitButton);
  rootElement.appendChild(formElement);

  const loadingSpinner = document.createElement("div");
  loadingSpinner.id = "loadingSpinner";
  loadingSpinner.className = "loading-spinner";
  loadingSpinner.innerHTML = `
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  `;
  rootElement.appendChild(loadingSpinner);

  const outputElement = document.createElement("div");
  outputElement.id = "output";
  outputElement.className = "mt-4 text-light";
  rootElement.appendChild(outputElement);

  formElement.addEventListener("submit", async function (event) {
    event.preventDefault();
    const promptText = document.getElementById("promptInput").value;
    const gaya = "orang bijak";
    fetchData(promptText, gaya);
  });
});

async function fetchData(promptText, gaya) {
  const apiUrl = `https://api.nyx.my.id/ai/character-ai?prompt=${promptText}&gaya=${gaya}`;

  try {
    document.getElementById("loadingSpinner").style.display = "block";
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    document.getElementById("loadingSpinner").style.display = "none";
    const outputElement = document.getElementById("output");
    outputElement.textContent = data.result;
    document.getElementById("promptInput").value = "";
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
    document.getElementById("loadingSpinner").style.display = "none";
  }
}
