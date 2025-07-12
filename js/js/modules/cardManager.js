// 카드 리스트 전체, 정렬 상태, 렌더링 처리
export let allCards = [];
export let filteredCards = [];
let currentIndex = 0;
const batchSize = 12;
let sortOrder = "newest";

export function initCardManager() {
  const container = document.getElementById("allCards");

  // 외부에서 가져온 변수들을 연결
  const all = [].concat(
    typeof mvSpecialClipCards !== 'undefined' ? mvSpecialClipCards : [],
    typeof stagePerformanceCards !== 'undefined' ? stagePerformanceCards : [],
    typeof vocalAndDanceCards !== 'undefined' ? vocalAndDanceCards : [],
    typeof specialReleasesCards !== 'undefined' ? specialReleasesCards : [],
    typeof recordingBehindCards !== 'undefined' ? recordingBehindCards : [],
    typeof originalVarietyCards !== 'undefined' ? originalVarietyCards : [],
    typeof mediaContentsCards !== 'undefined' ? mediaContentsCards : [],
    typeof radioPodcastCards !== 'undefined' ? radioPodcastCards : [],
    typeof officialClipCards !== 'undefined' ? officialClipCards : [],
    typeof interviewCards !== 'undefined' ? interviewCards : [],
    typeof liveStreamCards !== 'undefined' ? liveStreamCards : [],
    typeof commercialsCards !== 'undefined' ? commercialsCards : [],
    typeof shortsCards !== 'undefined' ? shortsCards : [],
    typeof etcCards !== 'undefined' ? etcCards : []
  );

  allCards = [...all];
  filteredCards = [...allCards];

  sortAndRender();
}

export function sortAndRender() {
  const container = document.getElementById("allCards");
  container.innerHTML = "";

  filteredCards.sort((a, b) => {
    const dateA = new Date(a.date || "2000-01-01");
    const dateB = new Date(b.date || "2000-01-01");
    return sortOrder === "oldest" ? dateA - dateB : dateB - dateA;
  });

  currentIndex = 0;
  renderCards(filteredCards.slice(0, batchSize));
  updateCardCount(filteredCards.length);
}

export function renderCards(cards) {
  const container = document.getElementById("allCards");

  cards.forEach((data) => {
    const card = document.createElement("a");
    card.className = "card";
    card.innerHTML = `
      <div class="card-meta"><div class="meta-category">${data.category}</div></div>
      <div class="thumbnail-wrapper"><img src="${data.thumbnail}" alt="${data.alt}"><div class="duration-overlay">${data.duration || ''}</div></div>
      <div class="card-title">${data.title}</div>
      <div class="card-member">#${data.member}</div>
    `;
    card.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(data.link, "_blank");
    });

    const img = card.querySelector("img");
    img.onload = function () {
      const isVertical = img.naturalHeight > img.naturalWidth;
      img.style.objectFit = isVertical ? "contain" : "cover";
      img.style.backgroundColor = "#000";
    };

    container.appendChild(card);
  });

  currentIndex += batchSize;
  document.getElementById("loadMoreBtn").style.display =
    currentIndex >= filteredCards.length ? "none" : "block";
}

export function loadMoreCards() {
  renderCards(filteredCards.slice(currentIndex, currentIndex + batchSize));
}

function updateCardCount(count) {
  const el = document.getElementById("cardCount");
  if (el) el.textContent = `총 ${count}개 영상`;
}

export function setSortOrder(order) {
  sortOrder = order;
}

