
const pageContainer = document.getElementById('container_pizzas');

pizzas.forEach((product) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <h2>${product.name}</h2>
    <img src="${product.img}" alt="" class="pizza" />
    <p>${product.description}</p>
    <span>$${product.price}</span>

    `;
    

    pageContainer.appendChild(div);
});
