document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("allCards");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const searchInput = document.getElementById("searchInput");
  const resetSearchBtn = document.getElementById("resetSearchBtn");
  const searchBtn = document.getElementById("searchBtn");
  const cardCountEl = document.getElementById("cardCount");
  const toggleSortBtn = document.getElementById("toggleSortBtn");
  let currentIndex = 0;
  const batchSize = 12;
  let sortOrder = "newest";

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

  let filtered = [...all];

  function updateCardCount(count) {
    cardCountEl.textContent = `총 ${count}개 영상`;
  }

  function applySearch() {
    const normalize = str => str.toLowerCase().replace(/[^\w\uac00-\ud7af]+/g, '').replace(/\s+/g, '');
    const rawKeywords = searchInput.value.toLowerCase().replace(/[^\w\uac00-\ud7af]+/g, ' ').split(/\s+/).filter(Boolean);
    const keywords = rawKeywords.map(k => normalize(k));

    filtered = all.filter(c => {
      const combinedText = normalize(c.title + c.member);
      return keywords.every(k => combinedText.includes(k));
    });

    sortAndRender();
  }

  function sortAndRender() {
    filtered.sort((a, b) => {
      const dateA = new Date(a.date || '2000-01-01');
      const dateB = new Date(b.date || '2000-01-01');
      return sortOrder === "oldest" ? dateA - dateB : dateB - dateA;
    });

    currentIndex = 0;
    renderCards(filtered);
  }

  function render
