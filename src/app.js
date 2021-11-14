const container = document.querySelector("#container");
const input = document.querySelector("#input");
const deleteInput = document.querySelector("#deleteInput");

document
  .querySelector("#myForm")
  .addEventListener("submit", ev => ev.preventDefault());

document.querySelector("#button").addEventListener("click", () => {
  let div = document.createElement("div");
  div.setAttribute("class", "col");

  //TODO: CREAR UN HN AL AZAR (H1-H2...H6)
  let randomNumber = Math.floor(Math.random() * 5 + 1);
  div.innerHTML = `<h${randomNumber}>${input.value.toUpperCase()}</h${randomNumber}>`;
  container.appendChild(div);
});

//TODO: CREAR LA FUNCIONALIDAD PARA ELIMINAR EL ULTIMO NODO SIN QUE NUNCA DE ERROR
document.querySelector("#deleteButton").addEventListener("click", () => {
  if (container.children.length > 0) {
    container.removeChild(container.children[container.children.length - 1]);
  } else {
    console.error("No hay nadie a quien eliminar");
  }
});

//TODO: REFACTORIZAR
input.addEventListener("keyup", ev => {
  if (ev.keyCode == 13) {
    for (let value of container.children) {
      value.innerHTML = `<h1>${input.value.toUpperCase()}</h1>`;
    }
  }
});

//TODO: crea una funcion que elimine de pantalla la columna que corresponda con el indice introducido en deleteInput
// si pongo un id que no existe debe mostrar un error
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
