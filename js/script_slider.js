let images = [{
  url: "images/image-completed-projects1.png",
  city: "Rostov-on-Don LCD admiral",
  apartment: "81 m2",
  time: "3.5 months",
  cost: "Upon request"
}, {
  url: "images/image-completed-projects2.png",
  city: "Sochi Thieves",
  apartment: "105 m2",
  time: "4 months",
  cost: "Upon request"
}, {
  url: "images/image-completed-projects3.png",
  city: "Rostov-on-Don Patriotic",
  apartment: "93 m2",
  time: "3 months",
  cost: "Upon request"
}];

function initSlider() {
  if(!images || !images.length) return;

  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".slider__arrows");
  let sliderDots = document.querySelector(".slider__dots")
  let sliderCity = document.querySelector(".slider__city")

  initImages();
  initArrows();
  initDots();
  initCity();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<img class="image n${index} ${index === 0? "active" : ""}" src="${images[index].url}" data-index="${index}">`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow",).forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }

        moveSlider(nextNumber);
      });
    })
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
        sliderDots.querySelector(".active").classList.remove("active");
        this.classList.add("active");
      })
    })
  }

  function initCity() {
    images.forEach((image, index) => {
      let city = `<li class="main-completed-projects-item n${index} ${index === 0? "active" : ""}" data-index="${index}>${images[index].city}</li>`;
      sliderCity.innerHTML += city;
    });
    sliderCity.querySelectorAll(".main-completed-projects-item").forEach(city => {
      city.addEventListener("click", function() {
        moveSlider(this.dataset.index);
        sliderCity.querySelector(".active").classList.remove("active");
        this.classList.add("active");
      })
    })
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");

    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");

    sliderCity.querySelector(".active").classList.remove("active");
    sliderCity.querySelector(".n" + num).classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", initSlider);