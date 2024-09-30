const listaItems = document.querySelector(".container-compras");
let input = document.querySelector(".input");
const form = document.querySelector(".form");
const check = document.querySelector(".check");
const imgsIcon = ["imgs/delete.svg", "imgs/edit.svg"];

// Adicionar item a lista....
const newArray = [];

function onSubitItem(event) {
  event.preventDefault();
  if (input.value.trim() === "") return alert("Campo vazio!");

  const infoElement = newItem();
  newArray.push(infoElement);
  listaItems.innerHTML = "";

  for (const item of newArray) {
    listaItems.innerHTML += cardItem(item);
  }

  input.value = "";
}

form.addEventListener("submit", onSubitItem);


// Validar se tem item na lista...
function checkContainer() {
  if (newArray.length === 0) {
    check.innerHTML = "Nenhum item na lista.";
  } else if (newArray.length > 0) {
    check.innerHTML = "";
  }
}
checkContainer();


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
  return `<div class="card-item" id="${id}">
            <div class="wrapper-1">
              <div class="details">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <p>${nome}</p>
              </div>
              <div class="wrapper-btns">
                <button onclick="removeItem(${id})">
                  <img src="${imgsIcon[0]}" alt="delete" /></button
                ><button onclick="editItem('${nome}')">
                  <img src="${imgsIcon[1]}" alt="edit" />
                </button>
              </div>
            </div>
            <p>${data}</p>
          </div>`;
}

//Remove Item....
function removeItem(id) {
  const index = newArray.findIndex((item) => item.id === id);
  if (index !== -1) {
    newArray.splice(index, 1);

    listaItems.innerHTML = "";
    for (const item of newArray) {
      listaItems.innerHTML += cardItem(item);
    }
  }
}

//Editar Item...
function editItem(nome) {
  const name = prompt("Digite o novo nome do item:");
  const nameItem = newArray.findIndex((item) => item.nome === nome);

  const itemEdit = {
    id: nameItem?.id,
    nome: String(nameItem.nome).replace(nameItem.nome, name),
    data: dayOfTheWeek() + hoursDays(),
  };

  if (nameItem !== -1) {
    newArray.splice(nameItem, 1, itemEdit);
    listaItems.innerHTML = "";

    for (const item of newArray) {
      listaItems.innerHTML += cardItem(item);
    }
  }
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
    "Domingo",
    "Segunda-feira  ",
    "Terça-feira  ",
    "Quarta-feira  ",
    "Quinta-feira ",
    "Sexta-feira  ",
    "Sábado  ",
  ];

  let dia = "";

  for (let i = 0; i < dias.length; i++) {
    if (date.getDay() === i) {
      dia = dias[i];
    }
  }

  return dia;
}

