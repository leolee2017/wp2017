$(document).ready(() => {
 $('.headingSlide').animate({width: '137px'}, 650, 'easeInOutSine' , () => {
     $('.headingSlide h1').animate({width: '137px'}, 650, 'easeInOutSine');
   });

  $('.block').addClass('border').animate({width: '900px'}, 650, 'easeInOutSine' , () => {
     $('.pictureBlock').removeClass('hide');
     $('.pictureBlock').animate({width: '427px'}, 650, 'easeInOutSine');
     $('.descriptionBlock').animate({width: '330px'}, 650, 'easeInOutSine');
   });
});
