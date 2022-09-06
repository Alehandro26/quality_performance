const buttonBurger = document.querySelector(".header__button");
const popupBurger = document.querySelector(".popup");
const popupLinks = document.querySelectorAll(".popup__link");

buttonBurger.addEventListener("click", headerMenu);

function headerMenu() {
    buttonBurger.classList.toggle("header__button_active");
    popupBurger.classList.toggle("popup_active");
}

popupLinks.forEach(e => e.addEventListener("click", headerMenuExit));

function headerMenuExit() {
    buttonBurger.classList.remove("header__button_active");
    popupBurger.classList.remove("popup_active");
}

let offset = 0;
const sliderWrapper = document.querySelector(".slider__wrapper");
const slideWidth = document.querySelector(".slider__slide").clientWidth;
const sliderPrev = document.querySelector(".main__button-prev");
const sliderNext = document.querySelector(".main__button-next");

sliderNext.addEventListener("click", () => {
    offset += slideWidth + 40;
    if (offset > slideWidth + 40) {
        offset = 0;
        sliderWrapper.style.transition = "0s";
    } else {
        sliderWrapper.style.transition = "left .3s ease";
    }
    sliderWrapper.style.left = -offset + "px"; 
});

sliderPrev.addEventListener("click", () => {
    offset -= slideWidth + 40;
    if (offset < 0) {
        offset = slideWidth + 40;
        sliderWrapper.style.transition = "0s";
    } else {
        sliderWrapper.style.transition = "left .3s ease";
    }
    sliderWrapper.style.left = -offset + "px";   
});

/*
const buttonPopup = document.querySelectorAll(".button_red");
const popUp = document.querySelector(".pop-up");
const exitPopup = document.querySelector(".pop-up__exit");
const popupBgr = document.querySelector(".popup-bgr");

buttonPopup.forEach(e => e.addEventListener("click", popupOpen));
exitPopup.addEventListener("click", popupExit);
popupBgr.addEventListener("click", popupExit);

function popupOpen() {
    popUp.classList.add("pop-up_active");
    popupBgr.classList.add("popup-bgr_active");
}

function popupExit() {
    popUp.classList.remove("pop-up_active");
    popupBgr.classList.remove("popup-bgr_active");
}
*/