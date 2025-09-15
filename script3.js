img.addEventListener('mouseover', () => {
    img.src = "images/ปั๊ม1-Photoroom.png";
    img.classList.add('hover-img')
     img.src="images/ปั๊ม2-Photoroom.png";
            img.style.width = '800px';
            sound.currentTime = 0;
            sound.play();
            setTimeout(() => {
            sound.pause();
            }, 4000);
});

img.addEventListener('mouseout', () => {
    img.src = "images/ปั๊ม1-Photoroom.png";
    img.classList.add('hover-img')
});

window.addEventListener("load",function() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";

},10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);