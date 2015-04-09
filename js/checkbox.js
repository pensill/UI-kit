
$('input[type=radio]').css({'opacity': 0}).wrap('<div class="radio__wrap"></span>');
$('.radio__wrap').click(function() {
  $(this).toggleClass('radio__wrap--active'); 
})

$('input[type=checkbox]').css({'opacity': 0}).wrap('<div class="checkbox__wrap"></span>');
$('.checkbox__wrap').click(function() {
  $(this).toggleClass('checkbox__wrap--checked'); 
})

$('.checkbox-toggle__input').css({'opacity': 0}).wrap('<div class="checkbox-toggle_wrap"></span>');
$('.checkbox-toggle_wrap').click(function() {
  $(this).toggleClass('checkbox-toggle--checked'); 
})


