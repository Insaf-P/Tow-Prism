//Initialize Swiper
var p = 0
function showCount(n) {
	var count = $('#carouselSlider .carousel-inner .carousel-item').length
	$('#circle-counting').html(n + '/' + count)
}

const myCarouselElement = document.querySelector('#carouselSlider')

myCarouselElement.addEventListener('slide.bs.carousel', function (n) {
	console.log(n.from)
	$('#circle-loading').css({ animation: 'circleLoader 5s 0s linear 1' })

	if (p != n) {
		setTimeout(() => {
			$('#circle-loading').css({ animation: '' })
		}, 5000)

		p = n
	}
})

window.onload = () => {
	setInterval(() => {
		$('.carousel-inner .carousel-item').each((i, n) => {
			// console.log(n);
			if ($(n).hasClass('active')) {
				m = i + 1
				$('#carouselSlider-text .carousel-item:nth-child(' + m + ')').css({ display: 'block' })
				console.log(m)
				showCount(m)
				$('.carousel-indicators [data-bs-target]').removeClass('active')
				$('.slide-' + m).addClass('active')
			} else {
				m = i + 1
				$('#carouselSlider-text .carousel-item:nth-child(' + m + ')').css({ display: 'none' })
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
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		// when window width is >= 768px
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		// when window width is >= 1000px
		1000: {
			slidesPerView: 5,
			spaceBetween: 40,
		},
	},
})

var swiper = new Swiper('.Swiper-testimonial-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
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

$(window).scroll(function () {
	var sticky = $('.header'),
		scroll = $(window).scrollTop()

	if (scroll >= 200) {
		sticky.addClass('fixed-header')
	} else {
		sticky.removeClass('fixed-header')
	}
})

document.addEventListener('DOMContentLoaded', function (event) {
	let offset = 50
	let circleContainer = document.querySelector('.circle-container')
	let circlePath = document.querySelector('.circle-container path')
	let pathLength = circlePath.getTotalLength()
	circlePath.style.transition = circlePath.style.WebkitTransition = 'none'
	circlePath.style.strokeDasharray = pathLength
	circlePath.style.strokeDashoffset = pathLength
	circlePath.getBoundingClientRect()
	circlePath.style.transition = circlePath.style.WebkitTransition = 'stroke-dashoffset 10ms linear'

	let updateLoader = () => {
		let scrollTop = window.scrollY
		let docHeight = document.body.offsetHeight
		let winHeight = window.innerHeight
		let height = docHeight - winHeight
		let progress = pathLength - (scrollTop * pathLength) / height
		circlePath.style.strokeDashoffset = progress

		if (scrollTop > offset) {
			circleContainer.classList.add('active')
		} else {
			circleContainer.classList.remove('active')
		}
	}

	circleContainer.onclick = function () {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	window.onscroll = () => {
		updateLoader()
	}

	updateLoader()
})
