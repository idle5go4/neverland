async function loadVideos() {
  const res = await fetch('./data/mv_special.json');
  const videos = await res.json();
  const container = document.getElementById('video-container');
  videos.sort((a, b) => new Date(b.date) - new Date(a.date));
  videos.forEach(video => {
    const div = document.createElement('div');
    div.className = 'video-card';
    div.innerHTML = `
      <img src="./assets/thumbnails/${video.thumbnail}" alt="${video.title}">
      <h3>${video.title}</h3>
      <p>${video.date}</p>
      <a href="https://youtu.be/${video.youtubeId}" target="_blank">영상 보기</a>
    `;
    container.appendChild(div);
  });
}
loadVideos();
