$(document).ready(function(){
    $('#newsletterform').submit(function(e){
      e.preventDefault();
      var theemail = $('#newsmail').val().trim();
      $('#emailValidationMsj').hide();
      if(validateEmail(theemail)) {
        $('#newsletterAlert').slideDown();
      } else {
        $('#emailValidationMsj').slideDown();

      }
    })


    $('.homeSlider').slick({
      autoplay: true,
      autoplaySpeed: 4500
    })
    $('a.smooth-scroll[href*="#"]:not([href="#"])').click(function() {
      $('.navbar-collapse').removeClass('show');
      $('.navbar-toggler').addClass('collapsed');
      scroller($(this.hash));
      
    });


    /* LANGUAGE */
    //StoredLang
    if( Cookies.get('bluelang') == undefined || Cookies.get('bluelang') == "" ){
      Cookies.set('bluelang', 'es');
      //changeLang();
    } else if(Cookies.get('bluelang') == 'en'){
      changeLang();
    } 
    

    if(Cookies.get('bluelang') == 'es'){
      $('.lang-en').hide();
      $('.lang-es').show();
    } else if(Cookies.get('bluelang')=='en'){
      $('.lang-en').show();
      $('.lang-es').hide();
    }

    // Cookie Ok
    
    if(Cookies.get('cookiesOK') !== undefined){
      $('.cookies').hide();
    }
    $('.btn-cookies').click(function(){
      $('.cookies').hide();
      Cookies.set('cookiesOK', 1);
    });



    //Click lang
    $('.changeLang').click(function(e){
      e.preventDefault();
      $('.navbar-collapse').removeClass('show');
      $('.navbar-toggler').addClass('collapsed');
      if( Cookies.get('bluelang') == 'es' ){
        Cookies.set('bluelang', 'en');
      } else {
        Cookies.set('bluelang', 'es');
      }
      changeLang();
    });
    /*END LANGUAGE */


    $('#unete .btn-group .btn').click(function(){
      
      var val = $(this).children('input').attr('val');
      $('#unete a').attr('href', 'mailto:info@bluepureloyalty.com?subject=Estoy interesado en formar parte del área de '+val);
    });


  });
  $(document).scroll(function(){ showhidenav() });
  function scroller(hash){
      var target = hash;
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-62
        }, 1000);
        return false;
      }
  }

  function showhidenav(){
    if($(window).scrollTop()>250){
      $('nav.navbar').addClass('visible');
    } else {
      $('nav.navbar').removeClass('visible');
    }
  }


  function changeLang(){
    $('[data-l]').each(function(index){
      var pLan = $(this).html();
      var nLan = $(this).attr('data-l');
      $(this).html(nLan);
      $(this).attr('data-l', pLan);
    });

    $('[data-l-src]').each(function(index){
      var pLan = $(this).attr('src');
      var nLan = $(this).attr('data-l-src');
      $(this).attr('src', nLan);
      $(this).attr('data-l-src', pLan);
    });

    if(Cookies.get('bluelang')=='en'){
      $('.lang-en').show();
      $('.lang-es').hide();
    } else {
      $('.lang-en').hide();
      $('.lang-es').show();
    }
  }

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }



$(document).ready(function(){
  $('.etapas').click(function () {
    $('.etapastxt').slideUp()
    $($(this).attr('data-d')).slideDown()
  })
});


/* Botones Alcance */
$(document).ready(function(){
  $('.alcancebutton').click(function () {
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
  })
});

