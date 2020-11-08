$('.page-scroll').on('click', function(e){
  // ambil isi href
  const href = $(this).attr('href');
  // tangkap element
  const elementHref = $(href);
  $('html,body').animate({
    scrollTop: elementHref.offset().top - 50
  }, 800);

  e.preventDefault();
})