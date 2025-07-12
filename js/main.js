import { loadCards, sortCards, renderCards } from "./modules/cardManager.js";
import { setupSearch } from "./modules/searchHandler.js";
import { setupSortToggle } from "./modules/sortToggle.js";
import { setupScrollButtons } from "./modules/scroll.js";

document.addEventListener("DOMContentLoaded", () => {
  loadCards();
  setupSearch();
  setupSortToggle();
  setupScrollButtons();
});
