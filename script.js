document.addEventListener("DOMContentLoaded", function () {
    let cardsData = []; // Para almacenar los datos de las tarjetas

    // Obtener elementos del contenedor de tarjetas
    const cardsContainer = document.getElementById('cards-container');

    // Cargar datos desde el archivo JSON
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            cardsData = data; // Almacenar datos en la variable
            renderCards(); // Renderizar las tarjetas
        })
        .catch(error => console.error('Error al cargar el JSON:', error));

    // Función para renderizar tarjetas en el contenedor
    function renderCards() {
        cardsContainer.innerHTML = ''; // Limpiar el contenedor

        cardsData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <div class="card_landing">
                    <img src="${item.image}" alt="${item.title}" />
                    <h6>${item.title}</h6>
                </div>
                <div class="card_info">
                    <div class="head">
                        <p class="title">${item.title}</p>
                        <div class="description">
                            <div class="item">
                                <i class="fa-regular fa-clock"></i>
                                <p>${item.time}</p>
                            </div>
                            <div class="item">
                                <i class="fa-regular fa-user"></i>
                                <p>${item.servings}</p>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <p class="title">Ingredientes:</p>
                        <ul class="list">
                            ${item.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="action">
                        <a href="#" class="btn">Consultar</a>
                    </div>
                </div>
            `;

            cardsContainer.appendChild(card);
        });
    }
});



products:[
    {
        "title": "Ceviche",
        "image": "./img/img.jpg",  // Verifica que esta imagen exista
        "time": "40 min",
        "servings": 4,
        "ingredients": [
            "1 kilogramo de pescado",
            "1 cebolla cortada en julianas",
            "1 taza de caldo de pescado",
            "1 pizca de sal y pimienta",
            "10 limones",
            "1 ají amarillo picado"
        ]
    },
    {
        "title": "Tacos",
        "image": "./img/tacos.jpg",  // Verifica que esta imagen exista
        "time": "30 min",
        "servings": 6,
        "ingredients": [
            "500 g de carne",
            "12 tortillas",
            "1 cebolla picada",
            "Cilantro al gusto",
            "Salsa al gusto"
        ]
    }
]
