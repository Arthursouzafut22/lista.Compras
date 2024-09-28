const listaItems = document.querySelector(".container-compras");
let input = document.querySelector(".input");
const form = document.querySelector(".form");
const check = document.querySelector(".check");

// Adicionar item a lista....
const newArray = [];

function onSubitItem(event) {
  event.preventDefault();
  if (input.value.trim() === "") return;

  const infoElement = newItem();
  newArray.push(infoElement);

  listaItems.innerHTML = "";

  for (const item of newArray) {
    listaItems.innerHTML += cardItem(item);
  }

  input.value = "";
}

form.addEventListener("submit", onSubitItem);

// New element....
function newItem() {
  return (elementItem = {
    id: Math.floor(Math.random() * 100),
    nome: input.value,
    data: dayOfTheWeek() + hoursDays(),
  });
}

// CardItem.....
function cardItem({ id, nome, data }) {
  return `<div class="card-item" id="${id}" data-remove="${id}">
            <div class="wrapper-1">
              <div class="details">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <p>${nome}</p>
              </div>
              <div class="wrapper-btns">
                <button onclick="removeItem(${id})">
                  <img src="imgs/delete.svg" alt="delete" /></button
                ><button onclick="editItem(${nome})">
                  <img src="imgs/edit.svg" alt="edit" />
                </button>
              </div>
            </div>
            <p>${data}</p>
          </div>`;
}

//Remove Item....
function removeItem(id) {
  const remov = newArray.filter((item) => item.id !== id);
  return remov;
}

//Editar Item...
function editItem(nome) {
  return "Nada";
}

// Data e horas atual.....
function hoursDays() {
  const dataHoje = new Date();
  const horas = dataHoje.getHours().toFixed(0);
  const minutos = dataHoje.getMinutes().toFixed(0);

  const horasTotal = `${horas + ":" + minutos}`;

  return (
    new Intl.DateTimeFormat("pt-BR").format(dataHoje).toString() +
    " as " +
    horasTotal
  );
}

// Dia da semana....
function dayOfTheWeek() {
  const date = new Date();

  const dias = [
    "Domingo ",
    "Segunda-feira ",
    "Terça-feira ",
    "Quarta-feira ",
    "Quinta-feira ",
    "Sexta-feira ",
    "Sábado",
  ];

  let dia = "";

  for (let i = 0; i < dias.length; i++) {
    if (date.getDay() === i) {
      dia = dias[i];
    }
  }

  return dia;
}
