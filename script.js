function whatsapp() {
  window.open(
    "https://wa.me/5511921595542?text=Olá,%20vim%20pela%20página%20e%20gostaria%20de%20agendar%20uma%20avaliação%20psicopedagógica.",
    "_blank"
  );
}

const carrossel = document.querySelector('.carrossel');

if (carrossel) {
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

    e.preventDefault();
    const x = e.pageX - carrossel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carrossel.scrollLeft = scrollLeft - walk;
  });
}

function moverCarrossel(direcao) {
  const carrossel = document.getElementById("carrosselProblemas");
  const card = carrossel.querySelector(".card");

  if (!carrossel || !card) return;

  const estilo = window.getComputedStyle(carrossel);
  const gap = parseInt(estilo.columnGap || estilo.gap || 25);
  const distancia = card.offsetWidth + gap;

  carrossel.scrollBy({
    left: distancia * direcao,
    behavior: "smooth"
  });
}