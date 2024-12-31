const carrossel = document.querySelector('.carrossel');


const items = Array.from(carrossel.children);
items.forEach(item => {
  const clone = item.cloneNode(true);
  carrossel.appendChild(clone);
});