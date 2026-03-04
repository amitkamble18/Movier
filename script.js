<<<<<<< HEAD
=======
const API_KEY = "69b959cba3b1fd561d0e0aca45832e33";
const BASE_URL = "https://corsproxy.io/?https://api.themoviedb.org/3";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

async function fetchHollywoodMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/popular?language=en-US&page=1`,
    {
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWI5NTljYmEzYjFmZDU2MWQwZTBhY2E0NTgzMmUzMyIsIm5iZiI6MTc3MDAzMDY1OS4zMzksInN1YiI6IjY5ODA4NjQzN2MzMjkzNGFhNWZkNDliYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jp7-O99cvVErlilhKS5Rc2ffMZG-OCDxqsWkLWr5sHM",
        "Content-Type": "application/json;charset=utf-8"
      }
    }
  );

  const data = await res.json();
  renderMovies(data.results, "hollywoodMovies");
}


async function fetchHollywoodMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/popular?language=en-US&page=1`,
    {
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWI5NTljYmEzYjFmZDU2MWQwZTBhY2E0NTgzMmUzMyIsIm5iZiI6MTc3MDAzMDY1OS4zMzksInN1YiI6IjY5ODA4NjQzN2MzMjkzNGFhNWZkNDliYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jp7-O99cvVErlilhKS5Rc2ffMZG-OCDxqsWkLWr5sHM",
        "Content-Type": "application/json;charset=utf-8"
      }
    }
  );

  const data = await res.json();
  renderMovies(data.results, "hollywoodMovies");
}

async function fetchHollywoodMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/popular?language=en-US&page=1`,
    {
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWI5NTljYmEzYjFmZDU2MWQwZTBhY2E0NTgzMmUzMyIsIm5iZiI6MTc3MDAzMDY1OS4zMzksInN1YiI6IjY5ODA4NjQzN2MzMjkzNGFhNWZkNDliYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jp7-O99cvVErlilhKS5Rc2ffMZG-OCDxqsWkLWr5sHM",
        "Content-Type": "application/json;charset=utf-8"
      }
    }
  );

  const data = await res.json();
  renderMovies(data.results, "hollywoodMovies");
}





function renderMovies(movies, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  movies.slice(0, 8).forEach(movie => {
    if (!movie.poster_path) return;

    const movieDiv = document.createElement("div");

    movieDiv.innerHTML = `
      <div class="movie-list-item">
        <div class="movie-img-box">
          <img 
            src="${IMAGE_URL + movie.poster_path}" 
            class="movie-list-img"
            alt="${movie.title}"
          />
        </div>

        <span class="movie-list-item-title">${movie.title}</span>

        <p class="movie-desc">
          ${movie.overview ? movie.overview.slice(0, 120) + "..." : "No description available"}
        </p>

        <button class="movie-list-item-button">
          Book Now
        </button>
      </div>
    `;

    container.appendChild(movieDiv.firstElementChild);
  });
}






>>>>>>> 4315086b7f3c9c09d93a7b387b980d86617650ac
document.addEventListener("DOMContentLoaded", () => {
  const seatContainer = document.querySelector(".seat-container");
  const seatCountEl = document.getElementById("seatCount");
  const totalPriceEl = document.getElementById("totalPrice");
  const confirmBtn = document.getElementById("confirmBtn");
  const movieItems = document.querySelectorAll(".movie-item");

<<<<<<< HEAD
=======




>>>>>>> 4315086b7f3c9c09d93a7b387b980d86617650ac
  const SEAT_PRICE = 200;
  const rows = 8;
  const cols = 10;

<<<<<<< HEAD
=======


>>>>>>> 4315086b7f3c9c09d93a7b387b980d86617650ac
  // Create seats
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const seat = document.createElement("div");
      seat.className = "seat";
      seat.innerText = String.fromCharCode(65 + r) + (c + 1);

      seat.addEventListener("click", () => {
        if (seat.classList.contains("booked")) return;
        seat.classList.toggle("selected");
        updateInfo();
      });

      seatContainer.appendChild(seat);
    }
  }

  // Movie selection
  movieItems.forEach(item => {
    item.addEventListener("click", () => {
      movieItems.forEach(m => m.classList.remove("active"));
      item.classList.add("active");

      // reset selected seats
      document.querySelectorAll(".seat").forEach(seat => {
        seat.classList.remove("selected", "booked");
      });

      updateInfo();
    });
  });

  // Confirm booking
  confirmBtn.addEventListener("click", () => {
    const selectedSeats = document.querySelectorAll(".seat.selected");

    if (selectedSeats.length === 0) return;

    alert("Please press OK to confirm ticket!");

    selectedSeats.forEach(seat => {
      seat.classList.remove("selected");
      seat.classList.add("booked"); // 🔴 TURN RED
    });

    updateInfo();
  });

  function updateInfo() {
    const selectedSeats = document.querySelectorAll(".seat.selected").length;
    seatCountEl.innerText = selectedSeats;
    totalPriceEl.innerText = selectedSeats * SEAT_PRICE;
    confirmBtn.disabled = selectedSeats === 0;
  }
});
<<<<<<< HEAD
=======



// search box working
document.getElementById("search-input").addEventListener("keyup", async (e) => {
  const query = e.target.value.trim();

  if (query.length < 3) return;

  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await res.json();

  renderMovies(data.results, "hollywoodMovies");
});


// api updated
fetchHollywoodMovies();
fetchBollywoodMovies();
fetchSouthMovies();

>>>>>>> 4315086b7f3c9c09d93a7b387b980d86617650ac
