// ข้อมูล project
const projects = [
  {
    title: "ทำแอพพลิเคชั่นหมูแดดเดียว ด้วย KODULAR 2021",
    desc: "ทำแอพพลิเคชั่น ช่วยดู ",
    images: [
      "imagesapp/หน้าจอหลัก kodular.png",
      "imagesapp/หน้าสต็อก kodular.png",
      "imagesapp/หน้าจอเครื่องคิดเลข.png",
      "imagesapp/หน้าโค้ด 1 kodular 1.png",
      "imagesapp/หน้าโค้ด 2 kodular.png"
    ]
  },
  {
    title: "ทำแอพพลิเคชั่นหมูแดดเดียวversion 2 ด้วย Thankable 2023",
    desc: "ทำแอพพลิเคชั่นช่วยดู version 2",
    images: [
      "imagesapp/งาน1.png",
      "imagesapp/ชำระเงิน.png",
      "imagesapp/ตะกร้าสินค้า.png",
      "imagesapp/หน้ายกเลิก.png",
      "imagesapp/โค้ด thankable.png"
    ]
  },
    {
    title: "ทำเว็ปไซต์ด้วย python + Flask ",
    desc: "เว็ปไซต์ร้านเสื้อ",
    images: [
      "imagesapp/รูปหน้าเว็ป.png",
      "imagesapp/ภายในเว็ป.png",
      "imagesapp/ภายในเว็ป2.png",
      "imagesapp/ภายในเว็ป3.png",
    ]
  },

      {
    title: "อบรม Cloud learning THAI MOOC 2023 ",
    desc: "อบรม Cloud learning THAI MOOC 2023",
    images: [
      "imagesapp/SPU SPU002 ใบรับรอง _ Thai MOOC_LMS 65031990_page-0001.jpg"
      
    ]
  },

        {
    title: "อบรม HUEWAI TALENT 2024 ",
    desc: "อบรม HUEWAI TALENT 2024",
    images: [
      "imagesapp/photo.png"
      
    ]
  },

  
  


  


  
];

let currentProjectIndex = 0;
let currentImageIndex = 0;

// DOM
const projectGrid = document.getElementById("projectGrid");
const modal = document.getElementById("modal");
const modalMain = document.getElementById("modalMain");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalThumbs = document.getElementById("modalThumbs");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// สร้าง grid box
projects.forEach((project, index) => {
  const box = document.createElement("div");
  box.classList.add("project-box");
  box.innerHTML = `<img src="${project.images[0]}" alt="${project.title}"><p>${project.title}</p>`;
  box.onclick = () => loadGallery(index);
  projectGrid.appendChild(box);
});

// เปิด modal
function loadGallery(index) {
  currentProjectIndex = index;
  currentImageIndex = 0;
  updateModal();
  modal.classList.add("show");
}

// ปิด modal
closeBtn.onclick = () => modal.classList.remove("show");
modal.onclick = e => { if (e.target === modal) modal.classList.remove("show"); };

// อัพเดต modal
function updateModal() {
  const project = projects[currentProjectIndex];
  modalMain.src = project.images[currentImageIndex];
  modalTitle.innerText = project.title;
  modalDesc.innerText = project.desc;

  modalThumbs.innerHTML = "";
  project.images.forEach((src, i) => {
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.alt = `${project.title} ภาพ ${i+1}`;
    thumb.onclick = () => { currentImageIndex = i; modalMain.src = src; };
    modalThumbs.appendChild(thumb);
  });
}

// ปุ่ม next/prev
nextBtn.onclick = () => {
  const project = projects[currentProjectIndex];
  currentImageIndex = (currentImageIndex + 1) % project.images.length;
  modalMain.src = project.images[currentImageIndex];
};

prevBtn.onclick = () => {
  const project = projects[currentProjectIndex];
  currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
  modalMain.src = project.images[currentImageIndex];
};
