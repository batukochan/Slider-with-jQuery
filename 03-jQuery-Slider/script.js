$(document).ready(function () {

    function mySlider(config) {
        let defaults = {
            SlideSpeed: 500,
            midImagesWith: 16,
            ImagesWidth: 80,
            ImageHeight: 80,
            nextButtonClass: "btn-n",
            prevButtonClass: "btn-p",
            SliderSelector: '.mainContainer',
            SliderContainerSelector: '.sliderContainer',
            ImagesContainerSelector: '.sliderImages',
            MidContainerSelector: '.midContainer',
            euroleagueTeamsLogo: [
                {
                    url: "https://secure.cache.images.core.optasports.com/basketball/teams/150x150/uuid_dpl09q0dsbpkgnwsve17hdl4x.png?v=1.112.0&gis=mk",
                    description: "Olympiacos BC"
                },
                {
                    url: "https://secure.cache.images.core.optasports.com/basketball/teams/150x150/uuid_dk1qmybcn1uls9bfgy65e1dug.png?v=1.112.0&gis=mk",
                    description: "Anadolu Efes"
                },
                {
                    url: "https://secure.cache.images.core.optasports.com/basketball/teams/150x150/uuid_aiyzn1y3emws6t9huww25gz52.png?v=1.112.0&gis=mk",
                    description: "AS Monaco"
                },
                {
                    url: "https://secure.cache.images.core.optasports.com/basketball/teams/150x150/uuid_dm8qkchma47lbv77vvorrxsjj.png?v=1.112.0&gis=mk",
                    description: "Panathinaikos"
                },
                {
                    url: "https://secure.cache.images.core.optasports.com/basketball/teams/150x150/uuid_1h4vevagbjz0aurins8ra820x.png?v=1.112.0&gis=mk",
                    description: "Real Madrid"
                },
                {
                    url: "https://secure.cache.images.core.optasports.com/basketball/teams/150x150/uuid_vjwltpd5sol9au8g1qjhzuck.png?v=1.112.0&gis=mk",
                    description: "CSKA Moscow"
                },
                {
                    url: "https://secure.cache.images.core.optasports.com/basketball/teams/150x150/uuid_1xzci0oxhmuwousx59js30793.png?v=1.112.0&gis=mk",
                    description: "FC Barcelona"
                },
                {
                    url: "https://secure.cache.images.core.optasports.com/basketball/teams/150x150/uuid_tq7d8ghyhv0v1ornsbywdvpd.png?v=1.112.0&gis=mk",
                    description: "FC Bayern Munich"
                },
                {
                    url: "https://secure.cache.images.core.optasports.com/basketball/teams/150x150/uuid_ed2r3ymxmshlhiq6nzjrawsb2.png?v=1.112.0&gis=mk",
                    description: "Fenerbahçe"
                }
            ]
        }
        defaults = defaults || config;

        this.currentSlideIndex = 0;
        let that = this;

        let btnNext = function () {
            let positionX = ++that.currentSlideIndex * defaults.midImagesWith;
            $(defaults.ImagesContainerSelector).animate({
                left: `-${positionX}vw`
            }, defaults.SlideSpeed);

            createNextPrevBtn();
        }
        let btnPrev = function () {
            let positionX = --that.currentSlideIndex * defaults.midImagesWith;
            $(defaults.ImagesContainerSelector).animate({
                left: `-${positionX}vw`
            }, defaults.SlideSpeed);

            createNextPrevBtn();
        }

        function createNextPrevBtn() {
            $("." + defaults.nextButtonClass).remove();
            $("." + defaults.prevButtonClass).remove();


            if (that.currentSlideIndex > 0) {
                let prevBtn = $(`<a class = "${defaults.prevButtonClass}">  <i class="fas fa-chevron-circle-left"></i> <a/a>`)
                $(defaults.SliderContainerSelector).append(prevBtn);
                prevBtn.click(btnPrev);
            }

            if (that.currentSlideIndex < defaults.euroleagueTeamsLogo.length - 1) {
                let nextBtn = $(`<a class = "${defaults.nextButtonClass}" > <i class="fas fa-chevron-circle-right"></i> <a/a>`)
                $(defaults.SliderContainerSelector).append(nextBtn);
                nextBtn.click(btnNext);
            }
        }

        function initilize() {
            let { SliderContainerSelector, ImagesContainerSelector, euroleagueTeamsLogo, ImagesWidth, ImageHeight, MidContainerSelector } = defaults;

            euroleagueTeamsLogo.forEach((image) => {
                console.log("çalıştım");
                let sliderImagesElement = $('<div class="sliderImages"></div>')
                sliderImagesElement.append(`<img src = "${image.url}">`);
                $(MidContainerSelector).append(sliderImagesElement);
            })

            $(SliderContainerSelector).width(`ImagesWidth ${visualViewport}`);
            $(SliderContainerSelector).height((`ImageHeight ${visualViewport}`));
            $(ImagesContainerSelector).width((`ImagesWidth ${visualViewport}`));
            $(ImagesContainerSelector).height((`ImageHeight ${visualViewport}`));

            $(ImagesContainerSelector).width(ImagesWidth * euroleagueTeamsLogo.length);
        }

        initilize();
        createNextPrevBtn();

    }
    let slider = new mySlider();




});