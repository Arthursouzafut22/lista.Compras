const containerCompras = document.querySelector(".container-compras");

// Densenvolvimento.....

function cardItem() {
  return `<div class="card-item">
            <div class="wrapper-1">
              <div class="details">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <p>Ração de gato</p>
              </div>

              <div class="wrapper-btns">
                <button>
                  <img src="imgs/delete.svg" alt="delete" /></button
                ><button>
                  <img src="imgs/edit.svg" alt="edit" />
                </button>
              </div>
            </div>
            <p>Terça feira 25/09/2024</p>
          </div>`;
}
