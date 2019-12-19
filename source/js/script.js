var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

if (navMain.classList.contains("main-nav--opened")) {
  navMain.classList.remove("main-nav--opened");
  navMain.classList.add("main-nav--closed");
}

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

var form = document.querySelector(".form");
if (form) {
  var inputsForCheck = document.querySelectorAll(":required");
  var btn = form.querySelector(".form__btn");

  btn.addEventListener("click", function (evt) {

    if (!document.querySelector(".form").checkValidity()){
      for (var i=0; i<inputsForCheck.length; i++ ){
        if (!inputsForCheck[i].checkValidity()){
          if (!inputsForCheck[i].classList.contains("form__input--invalid")) {
            inputsForCheck[i].classList.add("form__input--invalid");
          }
        } else {
          if (inputsForCheck[i].classList.contains("form__input--invalid")) {
            inputsForCheck[i].classList.remove("form__input--invalid");
          }
        }
      }
    }
  });
}

var map = document.querySelector("#map");
if (map) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
      center: [59.938631, 30.323055],
      zoom: 17
    }, {
      searchControlProvider: "yandex#search"
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: "Cat Energy",
        balloonContent: ""
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "img/map-pin.png",
        // Размеры метки.
        iconImageSize: [124, 106],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-63, -103]
      });

      myMap.geoObjects
      .add(myPlacemark);
    });
  };
