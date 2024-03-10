const products = [
  {
    id: 0,
    name: "Fone de Ouvido AKG K92",
    image:
      "https://images2.kabum.com.br/produtos/fotos/94582/94582_1516796661_index_m.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, repudiandae. Optio facilis laboriosam, aspernatur illo officiis ex totam distinctio necessitatibus veniam tempora ratione sapiente nam?",
  },
  {
    id: 1,
    name: "Teclado NZXT Function Mini TKL",
    image:
      "https://images3.kabum.com.br/produtos/fotos/384743/teclado-nzxt-function-mini-tkl-rgb-switch-red-anti-ghosting-us-preto-kb-175us-br_1662668330_m.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, repudiandae. Optio facilis laboriosam, aspernatur illo officiis ex totam distinctio necessitatibus veniam tempora ratione sapiente nam?",
  },
  {
    id: 2,
    name: "Cadeira Gamer Prizi Canvas",
    image:
      "https://images1.kabum.com.br/produtos/fotos/sync_mirakl/527311/Cadeira-Gamer-Prizi-Canvas-Suporta-120-kg-Branca_1708001299_m.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, repudiandae. Optio facilis laboriosam, aspernatur illo officiis ex totam distinctio necessitatibus veniam tempora ratione sapiente nam?",
  },
  {
    id: 3,
    name: "Smartphone Xiaomi Redmi 13c",
    image:
      "https://images.kabum.com.br/produtos/fotos/sync_mirakl/529098/Smartphone-Xiaomi-Redmi-13c-8GB-Ram-256GB-Octa-Core-C-mera-Tripla-50MP-Tela-6-74-Polegadas-Preto_1708736893_m.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, repudiandae. Optio facilis laboriosam, aspernatur illo officiis ex totam distinctio necessitatibus veniam tempora ratione sapiente nam?",
  },
];

window.onload = function () {
  generateCards();
};

function generateCards() {
  const cardList = document.getElementById("cardList");
  let cardsHTML = "";

  products.forEach((product, index) => {
    cardsHTML += `
            <div class="card" onclick="showDetails(${index})">
                <figure class="img-card">
                    <img src="${product.image}" alt="imagem do item">
                </figure>
                <div class="name-card">
                    <h3>${product.name}</h3>
                </div>
            </div>
        `;
  });

  cardList.innerHTML = cardsHTML;
}

function showDetails(index) {
  const cardList = document.getElementById("cardList");
  cardList.innerHTML = "";

  products.forEach((product) => {
    if (product.id === index) {
      cardList.innerHTML = `
        <div class="card-detail">
            <figure>
                    <img class="img-detail" src="${product.image}" alt="imagem do item">
            </figure>
            <section class="section-card">
                <div class="name-card">
                    <h3>${product.name}</h3>
                </div>
                <div class="description-card">
                    <p>${product.description}</p>
                </div>
                <button onclick="generateCards()">Voltar</button>
            </section>
        </div>
        `;
    }
  });
}

function search() {
  const value = document.getElementById("inputSearch").value;
  products.forEach((product) => {
    if (product.name === value) {
      cardList.innerHTML = "";
      showDetails(product.id);
    }
  });
  document.getElementById("inputSearch").value = "";
}
