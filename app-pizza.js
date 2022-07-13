const h2 = document.getElementById("h2_page");
const h4 = document.getElementById("h4_page");
const form = document.form.pizza_form;
const input = document.elements.pizza_input;
const pizzas = document.getElementById("container_pizzas");
const menu = document.getElementById("menuPizzas");

pizzas_content.forEach((laspizzas) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <img src="${laspizzas.img}"/>
    `;

  container_pizzas.appenchild(li);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numberId = Number(input.value);
  const container_pizzas = Cpizzas.filter((item) => item.id == numberId)[0];
  if (input.value === "") {
    return alert("Debe ingresar un número");
  }
  if (!container_pizzas) {
    pizzas.innerHTML = "";
    form.reset();
    return alert("El siguiente valor no se encuentra en nuestro menu");
  }
});
