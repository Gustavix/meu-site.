// O restante do JavaScript permanece igual

// Adicionando funcionalidades de clique no menu para rolar para a seção correspondente
const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
