import { setSortOrder, sortAndRender } from "./cardManager.js";

export function initSortToggle() {
  const btn = document.getElementById("toggleSortBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const current = btn.textContent.trim();
    const next = current === "최신순" ? "오래된순" : "최신순";
    btn.textContent = next;

    setSortOrder(next === "최신순" ? "newest" : "oldest");
    sortAndRender();
  });
}
