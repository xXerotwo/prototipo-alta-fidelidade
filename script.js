const hospedagensAntigas = [{nome: "Hotel Alvorada", preco: "Média de R$ XX por quarto", rating: 4.3, avaliacoes: 54},
      {nome: "Hotel Sol", preco: "Média de R$ XX por quarto", rating: 4.5, avaliacoes: 72},]


const hoteis = [
      {nome: "Hotel Alvorada", preco: "Média de R$ XX por quarto", rating: 4.3, avaliacoes: 54},
      {nome: "Hotel Sol", preco: "Média de R$ XX por quarto", rating: 4.5, avaliacoes: 72},
      {nome: "Hotel Praia", preco: "Média de R$ XX por quarto", rating: 4.1, avaliacoes: 38},
      {nome: "Hotel Centro", preco: "Média de R$ XX por quarto", rating: 4.7, avaliacoes: 102},
      {nome: "Hotel Lux", preco: "Média de R$ XX por quarto", rating: 4.9, avaliacoes: 210},
    ];

  const carousel = document.getElementById("carousel");

    hoteis.forEach(hotel => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h3>${hotel.nome}</h3>
        <img src="https://via.placeholder.com/200x120" alt="${hotel.nome}">
        <p>${hotel.preco}</p>
        <div class="rating-container">
          <p class="rating">${hotel.rating} ★</p>
          <p>${hotel.avaliacoes} Avaliações</p>
        </div>
      `;
      carousel.appendChild(card);
    });



  const carousel_antigas = document.getElementById("carousel-hospedagens-antigas");

    hospedagensAntigas.forEach(hotel => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h3>${hotel.nome}</h3>
        <img src="https://via.placeholder.com/200x120" alt="${hotel.nome}">
        <p>${hotel.preco}</p>
        <div class="rating-container">
          <p class="rating">${hotel.rating} ★</p>
          <p>${hotel.avaliacoes} Avaliações</p>
        </div>
      `;
      carousel_antigas.appendChild(card);
    });

