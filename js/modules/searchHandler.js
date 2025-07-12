import { allCards, filteredCards, sortAndRender } from "./cardManager.js";

export function initSearchHandler() {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resetSearchBtn = document.getElementById("resetSearchBtn");

  const applySearch = () => {
    const normalize = (str) =>
      str.toLowerCase().replace(/[^\w\uac00-\ud7af]+/g, "").replace(/\s+/g, "");

    const rawKeywords = searchInput.value
      .toLowerCase()
      .replace(/[^\w\uac00-\ud7af]+/g, " ")
      .split(/\s+/)
      .filter(Boolean);
    const keywords = rawKeywords.map((k) => normalize(k));

    filteredCards.length = 0;
    allCards.forEach((c) => {
      const combinedText = normalize(c.title + c.member);
      if (keywords.every((k) => combinedText.includes(k))) {
        filteredCards.push(c);
      }
    });

    sortAndRender();
  };

  searchBtn.addEventListener("click", applySearch);
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") applySearch();
  });

  resetSearchBtn.addEventListener("click", () => location.reload());
}
