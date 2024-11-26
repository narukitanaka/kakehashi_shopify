$('.slider').slick({
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  swipeToSlide: true,
  arrows:true,
  swipeToSlide: false,
  edgeFriction: 0.2,
  draggable: true,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 600, 
      settings: {
      slidesToShow: 1,
      dots:true,
      centerMode: true,
      arrows:false,
      },
    },
  ],

});

$('.recommend_slide').slick({
  infinite: true,
  slidesToShow: 1,
  arrows:true,
  speed: 500,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 600, 
      settings: "unslick",
    },
  ],
});



$(function(){

	var logo = $('#header_02');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 830) { //スクロールが830pxを越えたら
			logo.addClass('nav_fixed');
		} else { //スクロールが830pxを越えなければ
			logo.removeClass('nav_fixed');
		}
	});

});


$(function(){

	var logo = $('.pc_header');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 830) { //スクロールが830pxを越えたら
			logo.addClass('change-color');
		} else { //スクロールが830pxを越えなければ
			logo.removeClass('change-color');
		}
	});

});

$(function(){

	var logo = $('.sp_header');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 600) { //スクロールが830pxを越えたら
			logo.addClass('change-color2');
		} else { //スクロールが830pxを越えなければ
			logo.removeClass('change-color2');
		}
	});

});


// $(function () {
//   $('.close_nav').on('click', function () {
//     $('.body_bg').removeClass('nav-open');
//   });
// });

// function toggleNav() {
//   var body = document.body;
//   var hamburgersp = document.getElementById('js-hamburgersp');
//   var blackBgsp = document.getElementById('js-black-bgsp');

//   hamburgersp.addEventListener('click', function() {
//     body.classList.toggle('nav-open');
//   });
//   blackBgsp.addEventListener('click', function() {
//     body.classList.remove('nav-open');
//   });
// }
// toggleNav();

