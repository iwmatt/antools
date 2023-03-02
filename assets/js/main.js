$(() => {

    if (Swiper && $('.team__swiper')) {
        const teamSwiper = new Swiper('.team__swiper',{
            slidesPerView: 1,
            pagination: {
                el: '.team__swiper-pagination'
            },
            allowTouchMove: true,
            spaceBetween: 2000,
            speed: 700,
        })
        const [teamSwiperLeft, teamSwiperRight] = [
            $('.team__swiper-arrow-left'),
            $('.team__swiper-arrow-right'),
        ]
        teamSwiperLeft.click(() => {
            teamSwiper.slidePrev()
        })
        teamSwiperRight.click(() => {
            console.log("right")
            teamSwiper.slideNext()
        })
    } else {
        console.log('swiper.js .team__swiper error')
    }
})