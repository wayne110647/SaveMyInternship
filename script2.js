function openModal(name, stars, desc) {
  document.getElementById("skillName").innerText = name;

  let starHTML = "";
  for (let i = 0; i < stars; i++) {
    starHTML += "⭐";
  }
  const starsDiv = document.getElementById("skillStars");
  starsDiv.innerHTML = starHTML;

  document.getElementById("skillDesc").innerText = desc;

  const modal = document.getElementById("skillModal");
  modal.classList.add("show");  // ใช้ class แทน display:block
 
  setTimeout(() => {
    starsDiv.classList.add("show"); // fade in ดาว
  }, 50);
}

function closeModal() {
  const modal = document.getElementById("skillModal");
  modal.classList.remove("show"); // จะ fade out
}

img.addEventListener('mouseover', () => {
  if (window.innerWidth > 768) {
    img.src = "images/ปั๊มskill2-Photoroom.png";
    img.classList.add('hover-img');
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
      sound.pause();
    }, 4000);
  }
});

// สำหรับมือถือ
img.addEventListener('touchstart', () => {
  img.src = "images/ปั๊มskill2-Photoroom.png";
  img.classList.add('hover-img');
  sound.currentTime = 0;
  sound.play();
  setTimeout(() => {
    sound.pause();
  }, 4000);
});

// กลับเป็นรูปเดิม
img.addEventListener('mouseout', () => {
  img.src = "images/ปั๊มskill1-Photoroom.png";
  img.classList.remove('hover-img');
});

function enforcePortraitOnly() {
  const isLandscape = window.innerWidth > window.innerHeight;

  if (isLandscape) {
    // สร้าง overlay เตือน
    const blocker = document.createElement("div");
    blocker.id = "orientation-blocker";
    blocker.style.position = "fixed";
    blocker.style.top = "0";
    blocker.style.left = "0";
    blocker.style.width = "100vw";
    blocker.style.height = "100vh";
    blocker.style.background = "white";
    blocker.style.color = "red";
    blocker.style.fontSize = "18px";
    blocker.style.fontFamily = "sans-serif";
    blocker.style.display = "flex";
    blocker.style.justifyContent = "center";
    blocker.style.alignItems = "center";
    blocker.style.zIndex = "9999";
    blocker.innerText = "กรุณาหมุนจอกลับเป็นแนวตั้งเพื่อใช้งานเว็บไซต์";

    // ซ่อนเนื้อหาเว็บ
    document.body.style.visibility = "hidden";
    document.body.appendChild(blocker);
  } else {
    // ลบ blocker และคืนเนื้อหา
    const blocker = document.getElementById("orientation-blocker");
    if (blocker) blocker.remove();
    document.body.style.visibility = "visible";
  }
}

window.addEventListener("resize", enforcePortraitOnly);
window.addEventListener("load", enforcePortraitOnly);












