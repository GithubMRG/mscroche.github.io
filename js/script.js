// Alternar entre seções (Projetos / Contato)
function showSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Carrossel automático
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('carousel');
  const images = carousel?.children;
  let currentIndex = 0;

  if (images && images.length > 1) {
    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    setInterval(nextSlide, 4000);
  }

  // Carregar múltiplos vídeos
const videoElements = document.querySelectorAll('.videos-container video');
const videoFiles = [
  'assets/videos/video1.mp4',   // ← Nome do seu 1º vídeo
  'assets/videos/video2.mp4',   // ← Nome do seu 2º vídeo
  'assets/videos/video4.mp4',   // ← Nome do seu 3º vídeo
  // Adicione mais aqui se quiser: 'assets/videos/video3.mp4',
];

videoElements.forEach((videoEl, index) => {
  if (index < videoFiles.length) {
    const source = document.createElement('source');
    source.src = videoFiles[index];
    source.type = 'video/mp4';
    videoEl.appendChild(source);
    videoEl.load();
  }
});
});