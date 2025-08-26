// script.js

// Fotos principais (grupo e show)
const fotosPrincipais = [
  {
    src: "img/bts1.jpg",
    alt: "BTS em grupo",
    info: `
      <h3>Sobre o grupo</h3>
      <p>BTS é um grupo de K-pop formado por sete integrantes. Desde 2013, conquistou fãs globalmente (ARMY) com coreografias, músicas e mensagens positivas.</p>
    `,
    destaque: true // flag para card maior
  },
  {
    src: "img/bts2.jpg",
    alt: "BTS em show",
    info: `
      <h3>Um dia de show</h3>
      <p>Em um de seus shows, BTS encantou milhares de fãs com músicas ao vivo, performances intensas e interação com a plateia.</p>
    `,
    destaque: true
  }
];

// Integrantes
const integrantes = [
  { src: "img/rm.jpg", alt: "RM", info: `<h3>RM (Kim Namjoon)</h3><p>Nascimento: 12/09/1994</p><p>Papel: Líder e rapper principal</p><p>Curiosidade: Fala inglês fluentemente e é porta-voz do grupo.</p>` },
  { src: "img/jin.jpg", alt: "Jin", info: `<h3>Jin (Kim Seokjin)</h3><p>Nascimento: 04/12/1992</p><p>Papel: Vocalista</p><p>Curiosidade: Conhecido como "Worldwide Handsome" e muito carismático.</p>` },
  { src: "img/suga.jpg", alt: "Suga", info: `<h3>Suga (Min Yoongi)</h3><p>Nascimento: 09/03/1993</p><p>Papel: Rapper e produtor musical</p><p>Curiosidade: Também segue carreira solo com o nome Agust D.</p>` },
  { src: "img/j-hope.jpg", alt: "J-Hope", info: `<h3>J-Hope (Jung Hoseok)</h3><p>Nascimento: 18/02/1994</p><p>Papel: Rapper e dançarino principal</p><p>Curiosidade: Reconhecido por sua energia positiva e alegria no palco.</p>` },
  { src: "img/jimin.jpg", alt: "Jimin", info: `<h3>Jimin (Park Jimin)</h3><p>Nascimento: 13/10/1995</p><p>Papel: Vocalista e dançarino</p><p>Curiosidade: Admirado por suas performances emocionantes e voz doce.</p>` },
  { src: "img/v.jpg", alt: "V", info: `<h3>V (Kim Taehyung)</h3><p>Nascimento: 30/12/1995</p><p>Papel: Vocalista</p><p>Curiosidade: Tem uma voz profunda e única, além de atuar em doramas.</p>` },
  { src: "img/jungkook.jpg", alt: "Jungkook", info: `<h3>Jungkook (Jeon Jungkook)</h3><p>Nascimento: 01/09/1997</p><p>Papel: Vocalista principal, dançarino e o mais jovem</p><p>Curiosidade: Conhecido como "Golden Maknae" por sua versatilidade.</p>` }
];

// Contato
const contato = `<h3>Contato</h3><p>Nome: Kaylany Luana</p><p>Email: kaylany@example.com</p>`;

// Função para criar card
function criarCard(foto) {
  const div = document.createElement("div");
  div.className = foto.destaque ? "card destaque" : "card";

  const img = document.createElement("img");
  img.src = foto.src;
  img.alt = foto.alt;

  const infoDiv = document.createElement("div");
  infoDiv.className = "card-info";
  infoDiv.innerHTML = foto.info;

  div.appendChild(img);
  div.appendChild(infoDiv);

  return div;
}

// Adiciona conteúdo no container
const conteudo = document.getElementById("conteudo");

// Fotos principais
fotosPrincipais.forEach(foto => conteudo.appendChild(criarCard(foto)));

// Integrantes
integrantes.forEach(integ => conteudo.appendChild(criarCard(integ)));

// Contato
const contatoDiv = document.createElement("div");
contatoDiv.className = "contato";
contatoDiv.innerHTML = contato;
conteudo.appendChild(contatoDiv);
