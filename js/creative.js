
(function ($) {
    /* ---------------------------------------------- /*
         * Preloader
        /* ---------------------------------------------- */

    $(window).load(function () {
        $('#loading').fadeOut();
        $('#preloader').delay(300).fadeOut('slow');
    });

    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
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
    $('.navbar-collapse ul li a').click(function () {
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

function armazenarDados() {

    var nome = document.getElementById('c_name');
    var email = document.getElementById('c_email');
    var mensagem = document.getElementById('c_message');
    var erroNome = document.getElementById('erroNome');
    var erroEmail = document.getElementById('erroEmail');
    var erroMensagem = document.getElementById('erroMensagem');

    if (nome.value == '') {
        erroNome.innerText = "Campo nome é obrigatório!";
        nome.focus();
        return false;//interrompe a execução
    }
    else {
        erroNome.innerText = "";
        if (email.value == '') {
            erroEmail.innerText = "Campo E-Mail é obrigatório!";
            email.focus();
            return false;
        }
        else {
            erroEmail.innerText = "";
            if (mensagem.value == '') {
                erroMensagem.innerText = "Campo Mensagem é obrigatório!";
                mensagem.focus();
                return false;
            }
            else {
                erroMensagem.innerText = "";
                //Cadastro realizado com sucesso
                localStorage.setItem('nomeUsuario', nome.value);
                localStorage.setItem('emailUsuario', email.value);
                localStorage.setItem('mensagemUsuario', mensagem.value);
                return true;
            }
        }

    }

}

