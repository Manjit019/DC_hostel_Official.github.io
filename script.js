
//scroll to top
const scrolltopBtn = document.getElementById("scroll-top");

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrolltopBtn.style.bottom = "2rem";
  }
  else {
    scrolltopBtn.style.bottom = "-4rem";
  }
}
scrolltopBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
})

//loader component
const loader = document.querySelector(".loader-wrapper");
window.addEventListener("load", () => {
  setTimeout(function () {
    loader.style.display = "none";
  }, 2000);
})

// Creating a responsive navbar component

const hamburger = document.querySelector(".three-dot");
const headerElem = document.querySelector(".header");

hamburger.addEventListener('click', () => {
  headerElem.classList.toggle("active");
})


//active navbar indicator
let navContainer=document.querySelector(".right-nav ul");
let links=navContainer.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
   links[i].addEventListener("click",function(){
    let current =document.getElementsByClassName("active-link");
    current[0].className=current[0].className.replace("active-link","");
    this.className+=" active-link";
   });
}


//automatic slide show 
let slideIndex = 0;
let timeout;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function showSlides() {
  slides.forEach((slide) => {
    // slide.style.display = 'none';
    slide.classList.remove("show");
  });
  indicators.forEach((indicator) => {
    indicator.classList.remove('active');
  });
  slideIndex++;
  if(slideIndex < 0){
    slideIndex=slides.length-1;
  }
  if (slideIndex >= slides.length) {
    slideIndex = 0; 
  }
  slides[slideIndex].classList.add('show');
  // slides[slideIndex].style.display = 'block';
  indicators[slideIndex].classList.add('active'); 
  timeout = setTimeout(showSlides, 2000);

}

function plusSlides(n) {
  clearTimeout(timeout);
  slideIndex+=n -1;
  showSlides();
}

function currentSlide(c) {
  clearTimeout(timeout);
  slideIndex = c-2;
  showSlides();
}

showSlides();


//Notice element
const container = document.querySelector('.notice-field');
const notices = document.querySelectorAll('.all-notices');
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;
let positionX = 0;
let positionY = 0;
let animationId;
function moveNotices() {
  if (window.innerWidth <= 850) {
    positionY--;
    container.style.transform = `translateY(${positionY}px)`;
    if (positionY <= -containerHeight) {
      positionY = containerHeight; // Start from the end
    }
  }
  else {
    positionX--;
    container.style.transform = `translateX(${positionX}px)`;
    if (positionX <= -containerWidth) {
      positionX = containerWidth; // Start from the end
    }
  }

  animationId = requestAnimationFrame(moveNotices);
}

// if (window.innerWidth > 568) {
//   moveNotices();
// }

function pauseAnimation() {
  cancelAnimationFrame(animationId);
}

function resumeAnimation() {
  moveNotices();
}
moveNotices();
container.addEventListener('mouseenter', pauseAnimation);
container.addEventListener('mouseleave', resumeAnimation);


// view more component 
const ViewMoreBtn = document.querySelector('.view-more--btn');
let current = document.querySelector(".Section-gallery");

ViewMoreBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var extraImages = document.querySelectorAll('.extra');
  for (var i = 0; i < extraImages.length; i++) {
    if (extraImages[i].style.display === 'none') {
      extraImages[i].style.display = 'block';
      ViewMoreBtn.querySelector("a").textContent = "View Less ▲";
    } else {
      extraImages[i].style.display = 'none';
      ViewMoreBtn.querySelector("a").textContent = "View More ▼";
      current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  ViewMoreBtn.scrollIntoView({ behavior: 'smooth', block: 'end'});
  // // Scroll to the last extra image
  // const lastExtraImage = extraImages[extraImages.length - 1];
  // lastExtraImage.scrollIntoView({ behavior: 'smooth', block: 'end' });

  // if (ViewMoreBtn.querySelector("a").textContent === "View Less ▲") {
    
  // }

});


//gallery click to download image 
const downloadbtn = document.querySelectorAll('[data-download]');

downloadbtn.forEach(i => {
  const id = i.dataset.download;
  const image = document.getElementById(id);
  const a = document.createElement("a");

  a.href = image.src;
  a.download = "";
  a.style.display = "none";

  i.addEventListener('click', () => {
    // console.log(image.childNodes[1]);
    a.click();
    a.removeChild(a);
  });
});

