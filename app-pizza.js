const pageContainer = document.getElementById('page_container');

pizzas.forEach((product) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${product.img}" alt="" />
    `;
    

    pageContainer.appendChild(div);
});