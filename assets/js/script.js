$('.page-scroll').on('click', function(e){
  // ambil isi href
  const href = $(this).attr('href');
  // tangkap element
  const elementHref = $(href);
  // console.log(elementHref[0].id);
  if (elementHref[0].id === 'portfolio') {
    $('html,body').animate({
      scrollTop: elementHref.offset().top - 62.3
    }, 800, 'swing');
  } else {
    $('html,body').animate({
      scrollTop: elementHref.offset().top - 65
    }, 800, 'swing');
  }

  e.preventDefault();
});

$(window).scroll(function() {
  const windowScroll = $(this).scrollTop();
  // console.log(windowScroll);

  // nav

  

  $('nav').css({
    'background-color' : 'rgb(33, 37, 41)',
  });

  if (windowScroll >= 373) {
    $('nav').css({
      'background-color' : 'rgba(33, 37, 41, .8)',
      'transition' : '.5s'
    });
  }

  // Jumbotron

  $('.jumbotron img').css({
    'transform' : `translate(0px,${windowScroll/4}%`,
    'opacity' : '1',
    'transition' : '.6s'
  });

  $('.jumbotron h1').css({
    'transform' : `translate(0px,${windowScroll}%`,
    'opacity' : '1',
    'transition' : '.6s'
  });

  $('.jumbotron hr').css({
    'opacity' : '1',
    'transform' : `translate(0px,${windowScroll/6}%`,
    'transition' : '.6s'
  });

  $('.jumbotron p').css({
    'transform' : `translate(0px,${windowScroll}%`,
    'opacity' : '1',
    'transition' : '.6s'
  });

  if (windowScroll > 90) {
    $('.jumbotron hr').css({
      'opacity' : `0`,
      'transform' : `translate(50px,${windowScroll/6}%`,
      'transition' : '.5s'
    });
  }
  if (windowScroll > 340) {
    $('.jumbotron p').css({
      'transform' : `translate(0px,${windowScroll}%`,
      'opacity' : '0',
      'transition' : '.5s'
    });

    $('.jumbotron h1').css({
      'transform' : `translate(0px,${windowScroll}%`,
      'opacity' : '0',
      'transition' : '.5s'
    });

    $('.jumbotron img').css({
      'transform' : `translate(0px,${windowScroll/4}%`,
      'opacity' : '0',
      'transition' : '1s'
    });
  }

  // Portfolio

  $('.portfolio .card').css({
    'opacity' : '0',
    'transition' : '1.5s',
    'transform' : 'translate(0,-40px)'
  });

  if (windowScroll >= 780) {
    $('.portfolio .card').css({
      'opacity' : '1',
      'transition' : '1s',
      'transform' : 'translate(0,0)'
    })
  }
})