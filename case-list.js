let visibleCount = 6;
let allCases = [];

fetch("cases.json")
  .then(res => res.json())
  .then(data => {
    allCases = data;
    renderCases();
  });

function renderCases() {
  const grid = document.querySelector(".case-grid");
  grid.innerHTML = "";

  allCases.slice(0, visibleCount).forEach(item => {
    const card = document.createElement("a");
    card.className = "case-card";
    card.href = `case-detail.html?id=${item.id}`;

    card.innerHTML = `
      <img src="${item.thumbnail}" alt="${item.title}">
    `;

    grid.appendChild(card);
  });

  if (visibleCount >= allCases.length) {
    document.getElementById("loadMoreBtn").style.display = "none";
  }
}

document.getElementById("loadMoreBtn").addEventListener("click", () => {
  visibleCount += 3;
  renderCases();
});

