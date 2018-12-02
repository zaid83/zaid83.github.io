function move() {
		var elem = document.getElementById("myBar");
		var width = 10;
		var percent = elem.dataset.percent;
		var id = setInterval(frame, 10);
		function frame() {
			if (width >= percent) {
				clearInterval(id);
			} else {
				width++;
				elem.style.width = width + '%';
				elem.innerHTML = width * 1 + '%';
			}
		}
	};

	function css3(){

		$('#imggauche').attr('src','assets/img/css.png');
		$("#myBar").css("background-color","#264DE4");
		$("#myBar").attr("data-percent","70");
		$(".programtitle").html("CSS 3");
		$(".programtitle").css("color","#264DE4");
		$(".programcontent").html("Mes connaissances en CSS 3 sont bonnes.");



	}
	function html(){
		$('#imggauche').attr('src','assets/img/html.png');

		$("#myBar").css("background-color","orangered");
		$("#myBar").attr("data-percent","90");
		$(".programtitle").html("HTML 5");
		$(".programtitle").css("color","orangered");
		$(".programcontent").html("Après quelques mois, j'ai réussi à comprendre le fonctionnement et la semantique du HTML 5.Mes connaissances  dans ce langage de programmation sont solides.");



	}

	function bootstrap(){
		$('#imggauche').attr('src','assets/img/boot.png');

		$("#myBar").css("background-color","#563D7C");
		$("#myBar").attr("data-percent","80");
		$(".programtitle").html("Bootstrap");
		$(".programtitle").css("color","#563D7C");
		$(".programcontent").html("J'arrive à mettre un site en responsive facilement.");



	}

	function js(){

		$('#imggauche').attr('src','assets/img/js.png');
		$("#myBar").css("background-color","#E5A228");
		$("#myBar").attr("data-percent","60");
		$(".programtitle").html("JAVASCRIPT");
		$(".programtitle").css("color","#E5A228");
		$(".programcontent").html("Mes connaissances en Javascript sont plutot moyennes mais je m'améliore de jours en jours.");



	}

	function jquery(){

		$('#imggauche').attr('src','assets/img/jquery.png');
		$("#myBar").css("background-color","#0868AC");
		$("#myBar").attr("data-percent","70");
		$(".programtitle").html("JQUERY");
		$(".programtitle").css("color","#0868AC");
		$(".programcontent").html("Je suis plus à l'aise avec Jquery que le javascript.");



	}

	function phplogo(){

		$('#imggauche').attr('src','assets/img/phplogo.png');
		$("#myBar").css("background-color","#777BB3");
		$("#myBar").attr("data-percent","60");
		$(".programtitle").html("PHP");
		$(".programtitle").css("color","#777BB3");
		$(".programcontent").html("Je connais  les bases du PHP mais sans plus.");



	}

	function photoshop(){

		$('#imggauche').attr('src','assets/img/photoshop.png');
		$("#myBar").css("background-color","darkblue");
		$("#myBar").attr("data-percent","50");
		$(".programtitle").html("Photoshop");
		$(".programtitle").css("color","darkblue");
		$(".programcontent").html("J'utilise Photoshop pour des retouches photos.");



	}

	function premiere(){

		$('#imggauche').attr('src','assets/img/premiere.png');
		$("#myBar").css("background-color","#35193D");
		$("#myBar").attr("data-percent","40");
		$(".programtitle").html("Premiere");
		$(".programtitle").css("color","#35193D");
		$(".programcontent").html("J'utilise Premiere pour faire des montages videos.");


	}
