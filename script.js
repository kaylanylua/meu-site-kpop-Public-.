// script.js

// Informações iniciais sobre K-pop
const kpopInfo = `
  <h2>O que é K-pop?</h2>
  <p>
    K-pop (pop coreano) é um gênero musical originado na Coreia do Sul, conhecido
    por suas performances coreografadas, visuais elaborados e grande impacto cultural
    global. Bandas e artistas de K-pop conquistam fãs em todo o mundo, misturando
    música, moda e entretenimento, criando uma experiência única para os fãs.
  </p>
`;

// Informações das duas primeiras fotos
const fotosPrincipais = [
  {
    src: "bts1.jpg",
    alt: "BTS em grupo",
    info: `
      <h3>Sobre o grupo</h3>
      <p>
        BTS é um grupo de K-pop formado por sete integrantes. Desde sua estreia em 2013,
        eles conquistaram fãs globalmente, conhecidos como ARMY. O grupo é famoso por suas
        coreografias, músicas e mensagens positivas.
      </p>
    `
  },
  {
    src: "bts2.jpg",
    alt: "BTS em show",
    info: `
      <h3>Um dia de show</h3>
      <p>
        Em um de seus shows, BTS encantou milhares de fãs com músicas ao vivo,
        performances intensas e interação com a plateia. Shows como este mostram
        a dedicação e energia do grupo no palco.
      </p>
    `
  }
];

// Informações dos integrantes
const integrantes = [
  {
    src: "rm.jpg",
    alt: "RM",
    info: `
      <h3>RM (Kim Namjoon)</h3>
      <p>
        Nascimento: 12 de setembro de 1994. <br>
        Papel: Líder e rapper principal. <br>
        Curiosidade: Fala inglês fluentemente e é considerado o porta-voz do grupo em eventos internacionais.
      </p>
    `
  },
  {
    src: "jin.jpg",
    alt: "Jin",
    info: `
      <h3>Jin (Kim Seokjin)</h3>
      <p>
        Nascimento: 4 de dezembro de 1992. <br>
        Papel: Vocalista. <br>
        Curiosidade: Conhecido como "Worldwide Handsome" e muito querido pelo seu senso de humor.
      </p>
    `
  },
  {
    src: "suga.jpg",
    alt: "Suga",
    info: `
      <h3>Suga (Min Yoongi)</h3>
      <p>
        Nascimento: 9 de março de 1993. <br>
        Papel: Rapper e produtor musical. <br>
        Curiosidade: Além do BTS, também segue carreira solo com o nome artístico Agust D.
      </p>
    `
  },
  {
    src: "jhope.jpg",
    alt: "J-Hope",
    info: `
      <h3>J-Hope (Jung Hoseok)</h3>
      <p>
        Nascimento: 18 de fevereiro de 1994. <br>
        Papel: Rapper e dançarino principal. <br>
        Curiosidade: É reconhecido por sua energia positiva e por ser a "esperança" do grupo.
      </p>
    `
  },
  {
    src: "jimin.jpg",
    alt: "Jimin",
    info: `
      <h3>Jimin (Park Jimin)</h3>
      <p>
        Nascimento: 13 de outubro de 1995. <br>
        Papel: Vocalista e dançarino. <br>
        Curiosidade: Muito admirado por suas performances emocionantes e voz doce.
      </p>
    `
  },
  {
    src: "v.jpg",
    alt: "V",
    info: `
      <h3>V (Kim Taehyung)</h3>
      <p>
        Nascimento: 30 de dezembro de 1995. <br>
        Papel: Vocalista. <br>
        Curiosidade: Tem uma voz profunda e única, além de atuar em doramas coreanos.
      </p>
    `
  },
  {
    src: "jungkook.jpg",
    alt: "Jungkook",
    info: `
      <h3>Jungkook (Jeon Jungkook)</h3>
      <p>
        Nascimento: 1 de setembro de 1997. <br>
        Papel: Vocalista principal, dançarino e o mais jovem do grupo. <br>
        Curiosidade: Conhecido como "Golden Maknae" por sua versatilidade em tudo o que faz.
      </p>
    `
  }
];

// Informações de contato
const contato = `
  <h3>Contato</h3>
  <p>Nome: Kaylany Luana</p>
  <p>Email: kaylany@example.com</p>
`;

// Função para criar cada bloco de foto + informação
function criarBlocoFoto(foto, esquerda = true) {
  const div = document.createElement("div");
  div.className = "bloco-foto";
  div.style.display = "flex";
  div.style.margin = "20px 0";
  div.style.alignItems = "center";

  const img = document.createElement("img");
  img.src = foto.src;
  img.alt = foto.alt;
  img.style.width = "220px"; // tamanho médio
  img.style.height = "auto";
  img.style.borderRadius = "12px";
  img.style.marginRight = esquerda ? "20px" : "0";
  img.style.marginLeft = esquerda ? "0" : "20px";

  const infoDiv = document.createElement("div");
  infoDiv.innerHTML = foto.info;
  infoDiv
