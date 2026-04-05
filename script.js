const imagens = [
    "imagem/Photo1.jpeg",
    "imagem/Photo2.jpeg",
    "imagem/Photo3.jpeg",
    "imagem/Photo4.jpeg",
    "imagem/Photo5.jpeg",
    "imagem/Photo6.jpeg"
];

const track = document.getElementById("track");
const dots = document.getElementById("dots");
let index = 0;

/* Criar imagens */
/*
imagens.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";
    track.appendChild(img);
});*/


imagens.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";
    img.addEventListener("click", () => irPara(i));
    track.appendChild(img);
});


/* Criar dots */
imagens.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.onclick = () => irPara(i);
    dots.appendChild(dot);
});

const imgs = track.querySelectorAll("img");

function atualizar() {
    imgs.forEach((img, i) => {
        img.className = "";
        if (i === index) img.classList.add("active");
        else if (i === index - 1 || (index === 0 && i === imgs.length - 1)) img.classList.add("prev");
        else if (i === index + 1 || (index === imgs.length - 1 && i === 0)) img.classList.add("next");
    });
    dots.querySelectorAll("span").forEach((d,i)=> d.classList.toggle("active", i === index));
}

function mover(dir) {
    index = (index + dir + imgs.length) % imgs.length;
    atualizar();
}

function irPara(i) {
    index = i;
    atualizar();
}

/* Scroll suave */
function scrollPara(id){
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* Autoplay */
let auto = setInterval(() => mover(1), 6000);
document.getElementById("slider").addEventListener("mouseover", () => clearInterval(auto));
document.getElementById("slider").addEventListener("mouseout", () => auto = setInterval(() => mover(1), 6000));

atualizar();


