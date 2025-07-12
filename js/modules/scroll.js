import { loadMoreCards } from "./cardManager.js";

export function initScrollAndLoadButtons() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  loadMoreBtn.addEventListener("click", () => {
    loadMoreCards();
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
