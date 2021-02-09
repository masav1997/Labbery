import { Swiper, Navigation, Pagination } from 'swiper/dist/js/swiper.esm.js'
import 'swiper/dist/css/swiper.min.css'

Swiper.use([Navigation, Pagination]);

export default class Sliders {
    constructor() {
        this.sliderHit = [
            {
                'selector': '#sliderHit .swiper-container',
                'options': {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    slidesPerGroup: 4,
                    speed: 700,
                    loop: true,
                    pagination: {
                        el: '#sliderHit .swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '#sliderHit .swiper-button-next',
                        prevEl: '#sliderHit .swiper-button-prev',
                    },
                    breakpoints: {
                        800: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 15
                        },
                        1200: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 20
                        },
                    }
                }
            }
        ];

        this.SliderPopular = [
            {
                'selector': '#SliderPopular .swiper-container',
                'options': {
                    slidesPerView: 4,
                    spaceBetween: 0,
                    grabCursor: true,
                    pagination: {
                        el: '#SliderPopular .swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '#SliderPopular .swiper-button-next',
                        prevEl: '#SliderPopular .swiper-button-prev',
                    },
                    breakpoints: {
                        1240: {
                            slidesPerView: 3
                        },
                        992: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 2
                        },
                        480: {
                            slidesPerView: 1
                        }
                    }
                }
            }
        ];

        this.SliderPluses = [
            {
                'selector': '#SliderPluses .swiper-container',
                'options': {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    centeredSlides: true,
                    loop: true,
                    grabCursor: true,
                    pagination: {
                        el: '#SliderPluses .swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '#SliderPluses .swiper-button-next',
                        prevEl: '#SliderPluses .swiper-button-prev',
                    },
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false
                    },
                    breakpoints: {
                        1240: {
                            slidesPerView: 3
                        },
                        992: {
                            slidesPerView: 3
                        },
                        768: {
                            // centeredSlides: false,
                            slidesPerView: 1
                        },
                        480: {
                            slidesPerView: 1
                        }
                    }
                }
            }
        ];

        this.SliderNews = [
            {
                'selector': '#sliderNews .swiper-container',
                'options': {
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    speed: 700,
                    loop: true,
                    pagination: {
                        el: '#sliderNews .swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '#sliderNews .swiper-btn-prev',
                        prevEl: '#sliderNews .swiper-btn-next',
                    },
                    breakpoints: {
                        800: {
                            slidesPerView: 1.5,
                            slidesPerGroup: 1.5,
                            spaceBetween: 30
                        },
                        1200: {
                            slidesPerView: 1.5,
                            slidesPerGroup: 1.5,
                            spaceBetween: 30
                        },
                    }
                }
            }
        ];

        this.init();
    }

    init() {
        this.sliderHit.forEach(function (slider) {
            if ($(slider.selector).find($('.swiper-slide')).length > 4) {
                new Slider(slider.selector, slider.options)
            } else {
                $(slider.selector).closest('.slider-catalog').find('.slider-catalog__head').addClass('slider-catalog__head--nav-hide');
            }
        });

        this.SliderPopular.forEach(function (slider) {
            new Slider(slider.selector, slider.options)
            /*if ($(slider.selector).find($('.swiper-slide')).length > 4) {
                new Slider(slider.selector, slider.options)
            } else {
                $(slider.selector).closest('.slider-catalog').find('.slider-catalog__head').addClass('slider-catalog__head--nav-hide');
            }*/
        });

        this.SliderPluses.forEach(function (slider) {
            new Slider(slider.selector, slider.options)
            /*if ($(slider.selector).find($('.swiper-slide')).length > 4) {
                new Slider(slider.selector, slider.options)
            } else {
                $(slider.selector).closest('.slider-catalog').find('.slider-catalog__head').addClass('slider-catalog__head--nav-hide');
            }*/
        });

        this.SliderNews.forEach(function (slider) {
            new Slider(slider.selector, slider.options)
            /*if ($(slider.selector).find($('.swiper-slide')).length > 4) {
                new Slider(slider.selector, slider.options)
            } else {
                $(slider.selector).closest('.slider-catalog').find('.slider-catalog__head').addClass('slider-catalog__head--nav-hide');
            }*/
        });
    }
}

export class Slider {
    constructor(selector, options) {
        new Swiper(selector, options);
    }
}