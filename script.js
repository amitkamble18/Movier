document.addEventListener("DOMContentLoaded", () => {
  const seatContainer = document.querySelector(".seat-container");
  const seatCountEl = document.getElementById("seatCount");
  const totalPriceEl = document.getElementById("totalPrice");
  const confirmBtn = document.getElementById("confirmBtn");
  const movieItems = document.querySelectorAll(".movie-item");

  const SEAT_PRICE = 200;
  const rows = 8;
  const cols = 10;

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
