const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener('click', function () {
  sideNav.classList.add('show');
  modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function () {
  sideNav.classList.remove('show');
  modal.classList.remove('showModal');
});

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
  }
});

// page scroll animation
const sections = document.querySelectorAll('section');
sections.forEach((section) => {
  section.classList.add('section-anim');
});
function reveal() {
  var sectionAnims = document.querySelectorAll('.section-anim ');

  for (var i = 0; i < sectionAnims.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = sectionAnims[i].getBoundingClientRect().top;
    var elementVisible = 200;

    if (elementTop < windowHeight - elementVisible) {
      sectionAnims[i].classList.add('show-section');
    } else if (elementTop > windowHeight - elementTop) {
      sectionAnims[i].classList.remove('show-section');
    }
  }
}
window.addEventListener('scroll', reveal);

// back-to-top button
function backToTop() {
  let lastScrollTop = 100;
  var backBtn = document.querySelector('.back-to-top');
  var scrollDIrection = window.scrollY;
  console.log(scrollDIrection);
  if (scrollDIrection > lastScrollTop) {
    backBtn.classList.remove('disable');
  } else {
    backBtn.classList.add('disable');
  }
}
window.addEventListener('scroll', backToTop);

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName('mySlides');
//   let dots = document.getElementsByClassName('dot');
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }
//   slides[slideIndex - 1].style.display = 'block';
//   dots[slideIndex - 1].className += ' active';
// }
// rooms slider
let slideIndex = [1, 1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ['mySlides1', 'mySlides2'];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex[no] - 1].style.display = 'block';
}
// slide show resturant
let slideN = 0;
showFood();

// Next/previous controls
function plusSlidesN(n) {
  showFood((slideN += n));
}

function showFood() {
  let i;
  let slides = document.getElementsByClassName('myShop2');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideN++;
  if (slideN > slides.length) {
    slideN = 1;
  }
  slides[slideN - 1].style.display = 'block';
  setTimeout(showFood, 3000); // Change image every 2 seconds
}

// slide shoew saloon
let slideSa = 0;
showHair();

// Next/previous controls
function plusSlidesS(n) {
  showHair((slideSa += n));
}

function showHair() {
  let i;
  let slides = document.getElementsByClassName('myShop1');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideSa++;
  if (slideSa > slides.length) {
    slideSa = 1;
  }
  slides[slideSa - 1].style.display = 'block';
  setTimeout(showHair, 3000); // Change image every 2 seconds
}
