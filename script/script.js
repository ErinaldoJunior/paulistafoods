const botaoDropdown = document.querySelector('.botao-dropdown');
const dropdown = document.querySelector('.dropdown');
const logoDropdown = document.querySelector('.logo-dropdown');

function ativarDropdown(event) {
  event.preventDefault();
  dropdown.classList.toggle('dropdown-ativo');
  logoDropdown.classList.toggle('ativar-logo');
}

botaoDropdown.addEventListener('click', ativarDropdown);

function scrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

scrollSuave();

function animacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {
    const windowMetade = window.innerHeight * 1;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          section.classList.add('ativo-animar');
        }
      });
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}

animacaoScroll();
/* const imgs = document.querySelectorAll("img");

imgs.forEach((item) => {
  const possuiALT = item.hasAttribute("alt");
  console.log(item, possuiALT);
});

// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector("img");
const primeiraImg = img.getBoundingClientRect();
console.log(primeiraImg.top);

// Retorne a soma da largura de todas as imagens

window.onload = function () {
  const imgsTotal = document.querySelectorAll("img");
  let soma = 0;
  imgsTotal.forEach(function (imgs) {
    soma = soma + imgs.offsetWidth;
  });
  console.log(soma);
};
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");

links.forEach((link) => {
  if (link.offsetWidth <= 48 && link.offsetHeight <= 48) {
    console.log(link + ", Acessibilidade incorreta");
  } else {
    console.log(link + ", Acessibilidade correta");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const small = window.matchMedia("(max-width: 720px)").matches;

if (small) {
  const menu = document.querySelector(".menu-secundario");
  menu.classList.add("mobile");
}

const logo = document.querySelectorAll("img");

function clicouLogo(event) {
  console.log(event.target);
}

logo.forEach(function (logos) {
  logos.addEventListener("click", clicouLogo);
});

function mudarFundo(event) {
  if (event.key === "f") {
    document.body.classList.toggle("fullscrean");
  }
}

window.addEventListener("keydown", mudarFundo);

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linkAtivo = document.querySelectorAll("a");

function adicionarAtivo(event) {
  event.preventDefault();
  linkAtivo.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

linkAtivo.forEach((linkInterno) => {
  linkInterno.addEventListener("click", adicionarAtivo);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll("body *");

function elementoAtivo(event) {
  event.target.remove();
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", elementoAtivo);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

const textoSite = document.querySelector("html");

function aumentarTexto(event) {
  if (event.key === "t") {
    textoSite.classList.toggle("texto-enorme");
  }
}

window.addEventListener("keydown", aumentarTexto);

//////////////////////////////////////////////////////////////////////////////////////////////////////

const listaImagens = document.querySelector(".petiscos-imagens");
const imagemNova = document.querySelector(".intro-imagens");

listaImagens.replaceChild(imagemNova.children[0], listaImagens.children[0]);

// Duplique o titulo e adicione ele em footer

const h1 = document.querySelector(".intro-titulo");
const cloneH1 = h1.cloneNode(true);
const footer = document.querySelector(".footer");

footer.appendChild(cloneH1);

// Selecione o primeiro DT da dl de Menu

// Selecione o DD referente ao primeiro DT

// Substitua o conteúdo html de .faq pelo de .animais

const sobre = document.querySelector(".sobre-conteudo");
const descricao = document.querySelector(".intro-descricao");

sobre.replaceChild(descricao, sobre.children[1]); */
