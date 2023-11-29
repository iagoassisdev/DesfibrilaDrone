
(function($) {
/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#loading').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});

    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

// carousel js

$(document).ready(function () {
    $("#owl-demo").owlCarousel({
        autoPlay: 3000,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });

});

// formulary js

var serialize = function (form) {
    var data = form.serializeArray();
    var json = {};
    data.forEach(function (item) {
      if (!json[item.name]) {
        json[item.name] = item.value;
        return;
      }    
      if (!Array.isArray(json[item.name]))
        json[item.name] = [json[item.name]];
      json[item.name].push(item.value);
    });
    return json;
  }
  
  var form = $("form");
  var enviar = $("#enviar");
  enviar.on("click", function (event) {
    event.preventDefault();
    var json = serialize(form);	
    console.log(json);
  });