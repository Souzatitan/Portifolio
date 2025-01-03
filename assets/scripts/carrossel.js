
const carrossel = document.querySelector('.carrossel');

if (carrossel) {
 
  const items = Array.from(carrossel.children);
  items.forEach(item => {
    const clone = item.cloneNode(true);
    carrossel.appendChild(clone);
  });

 
  const pauseAnimation = () => carrossel.classList.add('pause');
  const resumeAnimation = () => carrossel.classList.remove('pause');


  carrossel.addEventListener('mouseover', pauseAnimation);
  carrossel.addEventListener('mouseout', resumeAnimation);

 
  carrossel.addEventListener('touchstart', pauseAnimation);
  carrossel.addEventListener('touchend', resumeAnimation);
}
