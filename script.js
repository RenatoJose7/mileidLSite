function whatsapp(){
  window.open(
    "https://wa.me/5511921595542?text=Olá,%20vim%20pela%20página%20e%20gostaria%20de%20agendar%20uma%20avaliação%20psicopedagógica.",
    "_blank"
  );
}


const carrossel = document.querySelector('.carrossel');

let isDown = false;
let startX;
let scrollLeft;

carrossel.addEventListener('mousedown', (e) => {
  isDown = true;
  carrossel.classList.add('dragging');

  startX = e.pageX - carrossel.offsetLeft;
  scrollLeft = carrossel.scrollLeft;
});

carrossel.addEventListener('mouseleave', () => {
  isDown = false;
  carrossel.classList.remove('dragging');
});

carrossel.addEventListener('mouseup', () => {
  isDown = false;
  carrossel.classList.remove('dragging');
});

carrossel.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  e.preventDefault(); // evita seleção de texto

  const x = e.pageX - carrossel.offsetLeft;
  const walk = (x - startX) * 1.5; // velocidade (ajusta aqui)

  carrossel.scrollLeft = scrollLeft - walk;
});