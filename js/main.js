$(document).ready(function() {
  
  //variabili
  var imgFirst = $('.first');
  var imgLast = $('.last');
  var arrowDx = $('.arrow-dx');
  var arrowSx = $('.arrow-sx');


  // cambio immagine con click su 'arrow' destra e sinistra
  arrowDx.click(successiva);
  arrowSx.click(precedente);

  // cambio immagine con tasti direzionali keyboard
  $(document).keydown(function(ev) {
    if (ev.keyCode == 39) {
      successiva();
    } else if (ev.keyCode == 37) {
      precedente();
    }

  });



   // funzione scorrimento in avanti
  function successiva() {
    var activeImage = $('.active');
    var activeCounter = $('.active-counter')

    // scorrimento immagini
    activeImage.toggleClass('active');
    activeImage.next('img').toggleClass('active');

    if (activeImage.hasClass('last')) {
      imgFirst.toggleClass('active');
    }

  };


  // funzione scorrimento indietro
  function precedente() {
    var activeImage = $('.active');
    var activeCounter = $('.active-counter')

    // scorrimento immagini
    activeImage.toggleClass('active');
   activeImage.prev('img').toggleClass('active');

    if (activeImage.hasClass('first')) {
      imgLast.toggleClass('active');
    }


  };


// chiusura document ready
});
