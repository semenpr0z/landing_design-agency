let images = [{
  url: "images/image-completed-projects1.png",
  cityMain: "Rostov-on-Don, Admiral",
  city: "Rostov-on-Don<br> LCD admiral",
  apartment: "81 m2",
  time: "3.5 months",
  cost: "Upon request"
}, {
  url: "images/image-completed-projects2.png",
  cityMain: "Sochi Thieves",
  city: "Sochi<br> Thieves",
  apartment: "105 m2",
  time: "4 months",
  cost: "Upon request"
}, {
  url: "images/image-completed-projects3.png",
  cityMain: "Rostov-on-Don Patriotic",
  city: "Rostov-on-Don<br> Patriotic",
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
  let sliderCityProperty = document.querySelector(".slider__cityProperty")
  let sliderApartmentProperty = document.querySelector(".slider__apartmentProperty")
  let sliderTimeProperty = document.querySelector(".slider__timeProperty")
  let sliderCostProperty = document.querySelector(".slider__costProperty")

  initImages();
  initArrows();
  initDots();
  initCity();
  initCityProperty();
  initApartmentProperty();
  initTimeProperty();
  initCostProperty();

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
      let city = `<li class="main-completed-projects-item n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].cityMain}</li>`;
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

  function initCityProperty() {
    images.forEach((image, index) => {
      let cityProperty = `<span class="text3 n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].city}</span>`;
      sliderCityProperty.innerHTML += cityProperty;
    });
  }

  function initApartmentProperty() {
    images.forEach((image, index) => {
      let apartmentProperty = `<span class="text3 n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].apartment}</span>`;
      sliderApartmentProperty.innerHTML += apartmentProperty;
    });
  }

  function initTimeProperty() {
    images.forEach((image, index) => {
      let timeProperty = `<span class="text3 n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].time}</span>`;
      sliderTimeProperty.innerHTML += timeProperty;
    });
  }

  function initCostProperty() {
    images.forEach((image, index) => {
      let costProperty = `<span class="text3 n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].cost}</span>`;
      sliderCostProperty.innerHTML += costProperty;
    });
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");

    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");

    sliderCity.querySelector(".active").classList.remove("active");
    sliderCity.querySelector(".n" + num).classList.add("active");

    sliderCityProperty.querySelector(".active").classList.remove("active");
    sliderCityProperty.querySelector(".n" + num).classList.add("active");

    sliderApartmentProperty.querySelector(".active").classList.remove("active");
    sliderApartmentProperty.querySelector(".n" + num).classList.add("active");

    sliderTimeProperty.querySelector(".active").classList.remove("active");
    sliderTimeProperty.querySelector(".n" + num).classList.add("active");

    sliderCostProperty.querySelector(".active").classList.remove("active");
    sliderCostProperty.querySelector(".n" + num).classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", initSlider);