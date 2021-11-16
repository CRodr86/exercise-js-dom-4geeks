const container = document.querySelector("#container");
const input = document.querySelector("#input");
const deleteInput = document.querySelector("#deleteInput");

document
  .querySelector("#myForm")
  .addEventListener("submit", ev => ev.preventDefault());

document.querySelector("#button").addEventListener("click", () => {
  let div = document.createElement("div");
  div.setAttribute("class", "col");

  // The function generates a random number between 1 and 6 that represents the header type (h1, h2, ..., h6)
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 5 + 1);
  }
  div.innerHTML = `<h${generateRandomNumber}>${input.value.toUpperCase()}</h${generateRandomNumber()}>`;
  container.appendChild(div);
});

// This function deletes the last node in the lists by clicking the 'deleteButton'
document.querySelector("#deleteButton").addEventListener("click", () => {
  if (container.children.length > 0) {
    container.removeChild(container.children[container.children.length - 1]);
  } else {
    console.error("No hay nadie a quien eliminar");
  }
});

// Refactored code
input.addEventListener("keyup", ev => {
  if (ev.keyCode == 13) {
    for (let value of container.children) {
      value.innerHTML = `<h1>${input.value.toUpperCase()}</h1>`;
    }
  }
});

// This function deletes the element whose index is indicated in the input by press the enter key
deleteInput.addEventListener("keyup", ev => {
  if (ev.keyCode == 13) {
    if (
      !Number.isInteger(+deleteInput.value) ||
      deleteInput.value >= container.children.length
    ) {
      return alert("input inválido");
    } else {
      container.removeChild(container.children[deleteInput.value]);
    }
  }
});
