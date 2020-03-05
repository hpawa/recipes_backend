$(document).ready(function(){
  $('.header-burger').click(function(){
    $('.header-burger, .header-menu').toggleClass('active');
  });

  $('.menu-list').click(function(){
    $('.header-burger, .header-menu').removeClass('active');
  })
})