
    /*Форма обратной связи*/
    let contactUs = document.querySelector(".contact-us");
    let openContactUs = document.querySelector(".contact-us-form");
    let close = document.querySelector(".contact-modal-close");
    let form = document.querySelector(".contact-form");
    let name = openContactUs.querySelector("[name=name]");
    let email = openContactUs.querySelector("[name=email]");
    let sendForm =  document.querySelector(".send-form");


    contactUs.addEventListener("click", function (evt) {
      evt.preventDefault();
      openContactUs.classList.remove("visually-hidden");
      name.focus();
    });


    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      openContactUs.classList.add("visually-hidden");
    });

    form.addEventListener("submit", function (evt) {

      if (!name.value || !email.value) {
        evt.preventDefault();
        openContactUs.classList.add("modal-error");
        alert("Заполните имя и адрес почты для отправки");
      }
    });


    /*Форма обратной связи*/

    /*Доставка-гарантия-кредит*/
    let deliveryButton = document.querySelector(".delivery-button");
    let deliveryAdd = document.querySelector(".delivery-wrapper");

    let warrantyButton = document.querySelector(".warranty-button");
    let warrantyAdd = document.querySelector(".warranty-wrapper");

    let creditButton = document.querySelector(".credit-button");
    let creditAdd = document.querySelector(".credit-wrapper");


    deliveryButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      deliveryButton.classList.add("services-active");
      deliveryAdd.classList.remove("visually-hidden");
      deliveryButton.classList.remove("button");
      warrantyButton.classList.remove("services-active");
      warrantyAdd.classList.add("visually-hidden");
      warrantyButton.classList.add("button");
      creditButton.classList.remove("services-active");
      creditAdd.classList.add("visually-hidden");
      creditButton.classList.add("button");

    });

    warrantyButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      warrantyButton.classList.add("services-active");
      warrantyAdd.classList.remove("visually-hidden");
      warrantyButton.classList.remove("button");
      deliveryAdd.classList.add("visually-hidden");
      deliveryButton.classList.remove("services-active");
      deliveryButton.classList.add("button");
      creditButton.classList.remove("services-active");
      creditAdd.classList.add("visually-hidden");
      creditButton.classList.add("button");

    });

    creditButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      creditButton.classList.add("services-active");
      creditAdd.classList.remove("visually-hidden");
      creditButton.classList.remove("button");
      warrantyButton.classList.remove("services-active");
      warrantyAdd.classList.add("visually-hidden");
      warrantyButton.classList.add("button");
      deliveryAdd.classList.add("visually-hidden");
      deliveryButton.classList.remove("services-active");
      deliveryButton.classList.add("button");
    });
    /*Доставка-гарантия-кредит*/

    /*Слайдер товаров в индексе*/

    let slide1 = document.querySelector("[id=img-1]");
    let slide2 = document.querySelector("[id=img-2]");
    let slide3 = document.querySelector("[id=img-3]");

    let catalogItem1 = document.querySelector(".catalog-item1");
    let catalogItem2 = document.querySelector(".catalog-item2");
    let catalogItem3 = document.querySelector(".catalog-item3");

    let decorative01 = document.querySelector(".decorative-01");
    let decorative02 = document.querySelector(".decorative-02");
    let decorative03 = document.querySelector(".decorative-03");

      slide1.addEventListener("click", function (evt) {
        catalogItem1.classList.remove("visually-hidden");
        catalogItem2.classList.add("visually-hidden");
        catalogItem3.classList.add("visually-hidden");
        decorative01.classList.remove("visually-hidden");
        decorative02.classList.add("visually-hidden");
        decorative03.classList.add("visually-hidden");
      });

      slide2.addEventListener("click", function (evt) {
        catalogItem2.classList.remove("visually-hidden");
        catalogItem3.classList.add("visually-hidden");
        catalogItem1.classList.add("visually-hidden");
        decorative02.classList.remove("visually-hidden");
        decorative03.classList.add("visually-hidden");
        decorative01.classList.add("visually-hidden");
      });

      slide3.addEventListener("click", function (evt) {
        catalogItem3.classList.remove("visually-hidden");
        catalogItem2.classList.add("visually-hidden");
        catalogItem1.classList.add("visually-hidden");
        decorative03.classList.remove("visually-hidden");
        decorative02.classList.add("visually-hidden");
        decorative01.classList.add("visually-hidden");
      });

      /*Увеличение карты*/
      let mapOpen = document.querySelector(".map-img");
      let modalMap = document.querySelector(".modal-map");
      let mapClose = document.querySelector(".map-modal-close");

      mapOpen.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalMap.classList.remove("visually-hidden");

      });

      mapClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalMap.classList.add("visually-hidden");

      });

