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

