const hospedagensAntigas = [{nome: "Lanchonete Saborosa", preco: "Média de R$ XX por lanche", rating: 4.6, avaliacoes: 120},
  {nome: "Pão & Cia", preco: "Média de R$ XX por lanche", rating: 4.4, avaliacoes: 85}];

const hoteis = [
     {nome: "Lanchonete Saborosa", preco: "Média de R$ XX por lanche", rating: 4.6, avaliacoes: 120},
  {nome: "Pão & Cia", preco: "Média de R$ XX por lanche", rating: 4.4, avaliacoes: 85},
  {nome: "Delícias do Centro", preco: "Média de R$ XX por lanche", rating: 4.2, avaliacoes: 60},
  {nome: "Lanche Mania", preco: "Média de R$ XX por lanche", rating: 4.8, avaliacoes: 200},
  {nome: "Sanduba Express", preco: "Média de R$ XX por lanche", rating: 4.7, avaliacoes: 150}, ];

  const carousel = document.getElementById("carousel");

    hoteis.forEach(hotel => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
      <div class="container-dados"> 
        <div class="container-titulo"> 
          <h3>${hotel.nome}</h3>
        </div>  
        <img src="./images/hotel-exp1" alt="${hotel.nome}">
        <p>${hotel.preco}</p>
      </div>
      
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
      <div class="container-dados"> 
        <div class="container-titulo">
          <h3>${hotel.nome}</h3>
        </div>
          <img src="./images/lanchonete.png" alt="${hotel.nome}">
          <p>${hotel.preco}</p>
      </div>
        <div class="rating-container">
          <p class="rating">${hotel.rating} ★</p>
          <p>${hotel.avaliacoes} Avaliações</p>
        </div>
      `;
      carousel_antigas.appendChild(card);
    });
