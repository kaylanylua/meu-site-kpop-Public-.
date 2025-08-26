// script.js

const fotosPrincipais = [
  {
    src: "img/bts1.jpg",
    alt: "BTS em grupo",
    info: `
      <h3>Sobre o grupo</h3>
      <p>BTS é um grupo de K-pop formado por sete integrantes em 2013. Com músicas e coreografias impactantes, conquistaram fãs globalmente (ARMY), sendo reconhecidos por mensagens positivas, engajamento social e impacto cultural internacional.</p>
    `,
    destaque: true
  },
  {
    src: "img/bts2.jpg",
    alt: "BTS em show",
    info: `
      <h3>Um dia de show</h3>
      <p>Em um show, BTS encantou milhares de fãs com performances ao vivo, interação com a plateia e energia intensa no palco, mostrando dedicação e carisma que marcaram sua trajetória.</p>
    `,
    destaque: true
  }
];

const integrantes = [
  { src: "img/rm.jpg", alt: "RM", info: `<h3>RM (Kim Namjoon)</h3><p>Nascimento: 12/09/1994</p><p>Papel: Líder e rapper principal</p><p>RM começou a escrever raps ainda adolescente e participou de competições de hip-hop. Foi descoberto pela BigHit Entertainment e treinou antes de estrear no BTS. Reconhecido por sua inteligência, inglês fluente e liderança, também compõe músicas do grupo.</p>` },
  { src: "img/jin.jpg", alt: "Jin", info: `<h3>Jin (Kim Seokjin)</h3><p>Nascimento: 04/12/1992</p><p>Papel: Vocalista</p><p>Jin estudou atuação antes de ser recrutado como trainee. Conhecido por sua beleza e carisma, aprimorou habilidades vocais e coreográficas para se tornar vocalista do BTS. Participa ativamente de músicas e videoclipes, conquistando fãs com sua personalidade alegre.</p>` },
  { src: "img/suga.jpg", alt: "Suga", info: `<h3>Suga (Min Yoongi)</h3><p>Nascimento: 09/03/1993</p><p>Papel: Rapper e produtor musical</p><p>Suga começou a compor rap ainda jovem e lançou mixtapes antes do BTS. Foi descoberto pela BigHit e tornou-se rapper e produtor do grupo. Tem carreira solo como Agust D e é conhecido por letras profundas e honestas.</p>` },
  { src: "img/j-hope.jpg", alt: "J-Hope", info: `<h3>J-Hope (Jung Hoseok)</h3><p>Nascimento: 18/02/1994</p><p>Papel: Rapper e dançarino principal</p><p>J-Hope começou a dançar em grupos de street dance e se destacou por sua energia. Treinou na BigHit antes de debutar. É conhecido por sua positividade, coreografias incríveis e participação ativa na composição e performance das músicas do BTS.</p>` },
  { src: "img/jimin.jpg", alt: "Jimin", info: `<h3>Jimin (Park Jimin)</h3><p>Nascimento: 13/10/1995</p><p>Papel: Vocalista e dançarino</p><p>Jimin estudou dança moderna e contemporânea antes do BTS. Destacou-se em audições para trainees e treinou vocais e dança intensamente. Reconhecido por performances emocionantes e voz doce, contribui com coreografias e músicas do grupo.</p>` },
  { src: "img/v.jpg", alt: "V", info: `<h3>V (Kim Taehyung)</h3><p>Nascimento: 30/12/1995</p><p>Papel: Vocalista</p><p>V estudou artes antes de se tornar trainee da BigHit. Seu estilo vocal único e presença de palco chamaram atenção. Além do BTS, participa de atuações em doramas e compõe músicas, sendo admirado por criatividade e versatilidade.</p>` },
  { src: "img/jungkook.jpg", alt: "Jungkook", info: `<h3>Jungkook (Jeon Jungkook)</h3><p>Nascimento: 01/09/1997</p><p>Papel: Vocalista principal, dançarino e maknae</p><p>Jungkook começou a cantar e dançar desde jovem, participando de audições e shows locais. Treinou intensamente na BigHit e tornou-se o "Golden Maknae" por sua versatilidade em canto, dança e rap, contribuindo para a música e coreografia do BTS.</p>` }
];

const contato = `<h3>Contato</h3><p>Nome: Kaylany Luana</p><p>Email: kaylany@example.com</p>`;

// Função para criar card
function criarCard(foto){
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

const conteudo = document.getElementById("conteudo");

// Adiciona fotos principais
fotosPrincipais.forEach(f => conteudo.appendChild(criarCard(f)));

// Adiciona integrantes
integrantes.forEach(i => conteudo.appendChild(criarCard(i)));

// Adiciona vídeo sobre K-pop
const videoDiv = document.createElement("div");
videoDiv.className = "video-kpop";
const video = document.createElement("video");
video.width = 560;
video.height = 315;
video.controls = true;
const source = document.createElement("source");
source.src = "videos/k-pop.mp4";
source.type = "video/mp4";
video.appendChild(source);
videoDiv.appendChild(video);
conteudo.appendChild(videoDiv);

// Adiciona contato
const contatoDiv = document.createElement("div");
contatoDiv.className = "contato";
contatoDiv.innerHTML = contato;
conteudo.appendChild(contatoDiv);    
