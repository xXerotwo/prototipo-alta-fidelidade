const quartos = [
  {
    nome: "Suíte Master com duas camas king size",
    preco: "R$ 250 por diaria",
    img: "quarto.jpg"
  },
  {
    nome: "Suíte Luxo com vista para o mar",
    preco: "R$ 450 por diaria",
    img: "quarto.jpg"
  }
];

const container = document.getElementById("quartos-container");

quartos.forEach(q => {
  const card = document.createElement("div");
  card.classList.add("quarto-card");

  card.innerHTML = `
    <img src="${q.img}" alt="Imagem do quarto">
    <div class="info">
      <span class="tag">${q.nome}</span>
      <p class="preco">${q.preco}</p>
      <div class="avaliacao">
        <span>Excelente localização de acordo com hóspedes</span>
        <span class="estrela">⭐ 5.0</span>
      </div>
    </div>
  `;

  container.appendChild(card);
});

