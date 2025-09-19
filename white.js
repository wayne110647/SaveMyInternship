window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 3000); // 2000 = 2 วินาที
});

let percent = 0;
let loadingText = document.getElementById("loading-text");

let interval = setInterval(function () {
  percent++;
  loadingText.textContent = `กำลังโหลด... ${percent}%`;

  if (percent >= 100) {
    clearInterval(interval);
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";
  }
}, 20); // ปรับความเร็วได้ เช่น 30ms ต่อ 1%

function setMood(mood) {
  const img = document.getElementById('profile-img');
  const player = document.getElementById('player');
  player.volume = 0.5;

  if (mood === 'ห้ามกด') {
    img.src = 'images/รูปผญ.jpg';
    player.src = 'music/Topping.mp3';
    player.currentTime = 40;
    player.play();

    const stopAt = setInterval(() => {
      if (player.currentTime >= 56) {
        player.pause();
        img.src = 'images/pum.jpg';
        clearInterval(stopAt);
      }
    }, 200);
  }

  else if (mood === 'ทหารญี่ปุ่น') {
    img.src = 'images/รูปญี่ปุ่น.png';
    player.src = 'music/เพลงทหารญี่ปุ่น.mp3';
    player.currentTime = 76; // 
    player.play();

    const stopAt = setInterval(() => {
      if (player.currentTime >= 101) { // 
        player.pause();
        img.src = 'images/pum.jpg';
        clearInterval(stopAt);
      }
    }, 200);
  }

  else if (mood === 'พี่เอ') {
    img.src = 'images/รูปอ้วน.jpg';
    player.src = 'music/พี่เอ.mp3';
    player.currentTime = 638; // เริ่มที่ 5:00
    player.play();

    const stopAt = setInterval(() => {
      if (player.currentTime >= 650) { // จบที่ 5:15
        player.pause();
        img.src = 'images/pum.jpg';
        clearInterval(stopAt);
      }
    }, 200);
  }

  // fallback: เมื่อเพลงจบเอง
  player.onended = () => {
    img.src = 'images/pum.jpg';
  };
}


