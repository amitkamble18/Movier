document.addEventListener("DOMContentLoaded", () => {
  const movieItems = document.querySelectorAll(".movie-item");

movieItems.forEach(item => {

item.addEventListener("click", () => {

movieItems.forEach(m => m.classList.remove("active"));

item.classList.add("active");

/* reset seats when movie changes */

document.querySelectorAll(".seat").forEach(seat=>{
seat.classList.remove("selected","booked");
});

updateInfo();

});

});

const bollywoodMovies = [
{
title:"Tere Ishq Mein",
img:"source/tere_ishq_mein.jpg",
desc:"Shankar and Mukti's intense love story unfolds against the backdrop of Benaras, exploring surrender and transformation that heals, hurts and changes them.",
trailer:"https://www.youtube.com/watch?v=anOOdXmbBr0"
},
{
title:"Dhadak 2",
img:"source/dhadak.jpg",
desc:"Nilesh and Vidhi fall in love. However, tragedy strikes when their relationship is threatened by caste differences, creating a significant obstacle to their union.",
trailer:"https://www.youtube.com/watch?v=GRq6nXiJdug&t=4s"
},
{
  title:"Bhul Chuk Maaf",
  img:"source/bhul_chuk.jpg",
  desc:"Ranjan, a small-town romantic boy from Banaras, lands a government job to marry Titli but forgets his vow to Lord Shiva only to be trapped until he fulfils his promise. A hilarious tale of love, fate, and redemption unfolds.",
  trailer:"https://www.youtube.com/watch?v=8E_IeWynvnc&t=3s"
},
{
  title:"Thama",
  img:"source/thama.webp",
  desc:"Two star-crossed souls fight for love in a world where nature, bloodlines and destiny conspire to tear them apart.",
  trailer:"https://www.youtube.com/watch?v=Mod_oXpftJA&t=3s"
},
{
  title:"Jawan",
  img:"source/jawan.jpeg",
  desc:"A man is driven by a personal vendetta to rectify the wrongs in society, while keeping a promise made years ago. He comes up against a monstrous outlaw with no fear, who has caused extreme suffering to many.",
  trailer:"https://www.youtube.com/watch?v=MWOlnZSnXJo&t=1s"
}
];

const hollywoodMovies = [
{
title:"The Lost Bus",
img:"source/lost_bus.webp",
desc:"A white-knuckle ride through one of America's wildfires as a wayward school bus driver and a dedicated school teacher battle to save 22 children from the inferno.",
trailer:"https://www.youtube.com/watch?v=XSDHjkuwaic&t=4s"
},
{
title:"Materialists",
img:"source/materialists.jpg",
desc:"A young and ambitious New York City matchmaker finds herself torn between a seemingly perfect match and her imperfect ex-boyfriend.",
trailer:"https://www.youtube.com/watch?v=4A_kmjtsJ7c&t=2s"
},
{
title:"Warfare",
img:"source/werfare.jpg",
desc:"A Navy SEALs platoon, offering overwatch for a US Marine operation in Ramadi, Iraq, finds themselves in a fight for survival after their mission takes an unforeseen turn.",
trailer:"https://www.youtube.com/watch?v=JER0Fkyy3tw&t=3s"
},
{
title:"Frankenstein",
img:"source/franke.webp",
desc:"A brilliant but egotistical scientist brings a monstrous creature to life in a daring experiment that ultimately leads to the undoing of both the creator and his tragic creation",
trailer:"https://www.youtube.com/watch?v=8aulMPhE12g&t=5s"
},
{
title:"Mission: Impossible – The Final Reckoning",
img:"source/mission_imp.jpg",
desc:"Ethan Hunt and his IMF team embark on a high-stakes mission to track down a formidable artificial intelligence known as the Entity, which has successfully infiltrated global intelligence networks and poses an unprecedented threat",
trailer:"https://www.youtube.com/watch?v=fsQgc9pCyDU&t=4s"
}

];

const southMovies = [
{
title:"Coolie",
img:"source/coolie.jpg",
desc:"A mass action film from South Indian cinema.",
trailer:"https://www.youtube.com/watch?v=qeVfT2iLiu0&t=2s"
},
{
title:"HIT: The Third Case",
img:"source/hit.jpg",
desc:"The Homicide Intervention Team dispatches relentless officer Arjun Sarkar to track down a band of murderers and put an end to their gruesome killing spree.",
trailer:"https://www.youtube.com/watch?v=VOScrKrY2fM"
},
{
title:"Kantara: A Legend Chapter-1",
img:"source/kantara.jpg",
desc:"In pre-colonial Karnataka, during the Kadamba dynasty era, the ritual of Bhuta Kola takes root in the culture. Meanwhile, the seeds for the rise of Kaadubettu Shiva are also sown.",
trailer:"https://www.youtube.com/watch?v=M2OnifMgvps"
},
{
title:"Vidaamuyarchi",
img:"source/vidamu.jpg",
desc:"A married couple's trip takes an unsettling turn when the wife goes missing, prompting the husband's frantic search while an unknown villain creates obstacles.",
trailer:"https://www.youtube.com/watch?v=gK3WRAff1HI"
},
{
title:"Game Changer",
img:"source/game1.webp",
desc:"Ram Nandan, a government official, embarks on a relentless fight against corrupt politicians. Determined to bring about fair elections, he tries to revolutionise the way the government operates.",
trailer:"https://www.youtube.com/watch?v=QSu9-DBjMPI"
}
];

function renderMovies(movies, containerId){

const container = document.getElementById(containerId);
if(!container) return;

container.innerHTML="";

movies.forEach(movie=>{

const movieDiv = document.createElement("div");

movieDiv.className="movie-list-item";

movieDiv.innerHTML = `

<div class="movie-img-box">
<img src="${movie.img}" class="movie-list-img">
</div>

<span class="movie-list-item-title">${movie.title}</span>

<p class="movie-desc">${movie.desc}</p>

<div class="movie-buttons">

<button class="movie-list-item-button">Book Now</button>

<a href="${movie.trailer}" target="_blank" class="trailer-link">
Watch Trailer
</a>

</div>

`;

container.appendChild(movieDiv);

});

}

renderMovies(bollywoodMovies,"bollywoodMovies");
renderMovies(hollywoodMovies,"hollywoodMovies");
renderMovies(southMovies,"southMovies");

/* ---------------- SEAT BOOKING ---------------- */

const seatContainer = document.querySelector(".seat-container");
const seatCountEl = document.getElementById("seatCount");
const totalPriceEl = document.getElementById("totalPrice");
const confirmBtn = document.getElementById("confirmBtn");

const SEAT_PRICE = 200;
const rows = 8;
const cols = 10;

for(let r=0;r<rows;r++){

for(let c=0;c<cols;c++){

const seat=document.createElement("div");
seat.className="seat";
seat.innerText=String.fromCharCode(65+r)+(c+1);

seat.addEventListener("click",()=>{
if(seat.classList.contains("booked")) return;

seat.classList.toggle("selected");
updateInfo();
});

seatContainer.appendChild(seat);

}

}

confirmBtn.addEventListener("click",()=>{

const selectedSeats=document.querySelectorAll(".seat.selected");

if(selectedSeats.length===0) return;

alert("Booking Confirmed!");

selectedSeats.forEach(seat=>{
seat.classList.remove("selected");
seat.classList.add("booked");
});

updateInfo();

});

function updateInfo(){

const selectedSeats=document.querySelectorAll(".seat.selected").length;

seatCountEl.innerText=selectedSeats;
totalPriceEl.innerText=selectedSeats*SEAT_PRICE;

confirmBtn.disabled=selectedSeats===0;

}

});
