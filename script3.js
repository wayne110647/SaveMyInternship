const img = document.getElementById('main-img');
const sound = document.getElementById('hover-sound');

img.addEventListener('mouseover', () => {
  // เปลี่ยนรูปทุกขนาดหน้าจอ
  img.src = "images/ปั๊ม2-Photoroom.png";

  // เฉพาะ desktop เท่านั้นที่ขยายและเล่นเสียง
  if (window.innerWidth > 768) {
    img.style.width = '800px';
    sound.currentTime = 0;
    sound.play();

    setTimeout(() => {
      sound.pause();
    }, 4000);
  }
});

img.addEventListener('mouseout', () => {
  img.src = "images/ปั๊ม1-Photoroom.png";

  // คืนขนาดเดิมเฉพาะ desktop
  if (window.innerWidth > 768) {
    img.style.width = '120px';
  }
});


window.addEventListener("load",function() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";


},10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
