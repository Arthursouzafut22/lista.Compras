const containerCompras = document.querySelector(".container-compras");
let input = document.querySelector(".input");
const form = document.querySelector(".form");


// Adicionar item a lista....
function onSubitItem(event) {
  event.preventDefault();
  if (input.value.trim() === "") return;

  const newArray = [];
  const infoElement = newItem();

  newArray.push(infoElement);

  for (const it of newArray) {
    containerCompras.innerHTML += cardItem(it);
  }

  input.value = "";
}

form.addEventListener("submit", onSubitItem);

// Validar Container....
function checkContainer() {
  if (containerCompras.children.length === 0) {
    const childreElement = document.createElement("p");
    childreElement.innerHTML = "Sua lista esta vazia adiciocione items!";
    containerCompras.appendChild(childreElement);
  }

  return (childreElement.innerHTML = "");
}

checkContainer();

// New element....
function newItem() {
  return (elementItem = {
    id: Math.floor(Math.random() * 100),
    nome: input.value,
    data: new Date().toString(),
  });
}

// CardItem.....
function cardItem(item) {
  return `<div class="card-item" id="${item.id}">
            <div class="wrapper-1">
              <div class="details">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <p>${item.nome}</p>
              </div>

              <div class="wrapper-btns">
                <button>
                  <img src="imgs/delete.svg" alt="delete" /></button
                ><button>
                  <img src="imgs/edit.svg" alt="edit" />
                </button>
              </div>
            </div>
            <p>${item.data}</p>
          </div>`;
}
