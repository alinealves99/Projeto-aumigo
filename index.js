const imagens = [
    "https://cdn.pixabay.com/photo/2018/03/08/23/14/dalmatians-3210166_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/06/21/07/50/dogs-7275314_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/03/27/20/51/dogs-1284238_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/06/30/22/34/dog-5357794_1280.jpg"
];

const galeria = document.getElementById("galeria");
for (let i = 0; i < imagens.length; i++) {
    const img = document.createElement("img");
    img.src = imagens[i];
    galeria.appendChild(img);
}
const modal = document.getElementById("modal");

const modalImg = document.createElement("img");
modal.appendChild(modalImg);

const imgDog = document.querySelectorAll("#galeria img");
imgDog.forEach(img => {
    img.addEventListener("click", e => {
        modalImg.src = e.target.src;
        modal.classList.add("open");
    })
})
modal.addEventListener("click", () => {
    modal.classList.remove("open");
})

function converterMedida() {
    let quantidade = parseFloat(document.getElementById("quantidade").value);
    let unidade = document.getElementById("unidade").value;
    let resultado = document.getElementById("resultado");

    if (isNaN(quantidade) || quantidade <= 0) {
        resultado.textContent = "Insira um valor válido";
        return;
    }
    let densidade = 100;
    let medidas = {
        "xicara": densidade,
        "colher": densidade / 6.67
    };

    let peso = quantidade * medidas[unidade];
    resultado.textContent = `${quantidade}${unidade}(s) equivale a aproximadamente ${peso.toFixed(2)}g de ração.`;

}