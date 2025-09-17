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

function checkOrientation() {
  if (window.innerWidth > window.innerHeight) {
    document.body.style.pointerEvents = "none";
    document.body.style.opacity = "0.3";
  } else {
    document.body.style.pointerEvents = "auto";
    document.body.style.opacity = "1";
  }
}

window.addEventListener("resize", checkOrientation);
window.addEventListener("load", checkOrientation);







