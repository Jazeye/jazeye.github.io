//========toggle icon navbar=========//
// JavaScript
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("active");
  navbar.classList.toggle("active");

  if (menuIcon.classList.contains("active")) {
    menuIcon.src = "./src/icons/x-arrow.png";
  } else {
    menuIcon.src = "./src/icons/menu-icon.svg";
  }
};

//========active scroll link=========//
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
      });

      let activeNavlink = document.querySelector(
        "header nav a[href='#" + id + "']"
      );
      if (activeNavlink) {
        activeNavlink.classList.add("active");
      }
    }
  });
  //========navbar sticky=========//
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //========remove toggle icon when navbar click=========//
  menuIcon.classList.remove("active");
  navbar.classList.remove("active");
  if (menuIcon.classList.contains("active")) {
    menuIcon.src = "./src/icons/x-arrow.png";
  } else {
    menuIcon.src = "./src/icons/menu-icon.svg";
  }
};
//========scroll reveal animation=========//
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(
  ".home-content, .heading, .skills-heading,.login-heading",
  { origin: "top" }
);
ScrollReveal().reveal(".container img,.about-img,.skill-child:nth-child(2)", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h2", { origin: "left" });
ScrollReveal().reveal(".home-content h3", { origin: "right" });

// button download
function downloadDevCV() {
  var driveFileLink = 'https://drive.google.com/uc?export=download&id=1A2PicoWAx1AOdk5vBc7lz1xPCY1gA2Aj';
  var fileName = 'dev_cv.pdf';

  var link = document.createElement('a');
  link.href = driveFileLink;
  link.download = fileName;

  link.click();
}

function downloadSecCV() {
  var driveFileLink = 'https://drive.google.com/uc?export=download&id=1lWrb5ZeEnrgWg0F24EiCawgnnqDb7ksO';
  var fileName = 'sec_cv.pdf';

  var link = document.createElement('a');
  link.href = driveFileLink;
  link.download = fileName;

  link.click();
}

