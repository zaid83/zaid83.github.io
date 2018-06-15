	$(document).ready(function($) {
		var Body = $('body');
    Body.addClass('preloader-site');       // quand le DOM est chargé, j'attribue la class preloader-site
});

	$(window).on('load', function() {            
    $('.preloader-wrapper').fadeOut();               // j'applique un effet de fondu a la fin du chargement de la page
    $('body').removeClass('preloader-site');        // quand la fenetre est chargé, j'enleve la class preloader-site 
});