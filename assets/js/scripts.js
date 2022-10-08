//Initialize Swiper

function showCount(n) {
	var count = $('.carousel-inner .carousel-item').length
	$('.carousel-number-counting').html(n + '/' + count)
}

window.onload = () => {
	setInterval(() => {
		$('.carousel-inner .carousel-item').each((i, n) => {
			// console.log(n);
			if ($(n).hasClass('active')) {
				i = i + 1
				showCount(i)
				$('.carousel-indicators [data-bs-target]').removeClass('active')
				$('.slide-' + i).addClass('active')
			}
		})
	}, 100)
}

var swiper = new Swiper('.Swiper-client-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	loop: true,
	slidesPerView: 5,
	spaceBetween: 40,
})

var swiper = new Swiper('.Swiper-testimonial-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// autoplay: {
	// 	delay: 3000,
	// 	disableOnInteraction: false,
	// },
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},

	speed: 2000,
	loop: true,
	centeredSlides: true,
	// slidesPerView: 2.5,
	spaceBetween: 50,

	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		// when window width is >= 480px
		1000: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		// when window width is >= 640px
		1000: {
			slidesPerView: 2.5,
			spaceBetween: 40,
		},
	},
})
