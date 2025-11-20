const parks = [
    {
        title: "Parque Nacional da Serra dos Órgãos",
        text: "Famoso pelas trilhas, cachoeiras e pela icônica Pedra do Sino.",
        image: "src/img/imgSerraDosOrgaos.jpg" 
    },
    {
        title: "Parque Estadual dos Três Picos",
        text: "O maior parque estadual do Rio, com montanhas gigantes.",
        image: "src/img/imgTresPicos.jpg"
    },
    {
        title: "Parque Natural Municipal Montanhas de Teresópolis",
        text: "Uma unidade de conservação municipal que protege importantes áreas naturais.",
        image: "src/img/imgParqueMontanhasTere.jpg"
    }
];

let index = 0;


const titleEl = document.getElementById("parkTitle");
const textEl = document.getElementById("parkText");
const imgEl = document.getElementById("parkImage");


function loadSlide() {
    const currentPark = parks[index];

    titleEl.textContent = currentPark.title;
    textEl.textContent = currentPark.text;
    imgEl.src = currentPark.image; 
}

document.getElementById("nextBtn").addEventListener("click", () => {

    index = (index + 1) % parks.length;
    loadSlide();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    index = (index - 1 + parks.length) % parks.length;
    loadSlide();
});


loadSlide();