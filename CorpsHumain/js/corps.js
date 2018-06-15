$(document).ready(function($) {    /* Au moment ou le DOM est chargé*/

  /* creation d'une variable audio et de ses parametres en jquery*/

  var audio1 = document.createElement("audio");
  audio1.src = "assets/sons/mclic.mp3";
  audio1.volume = 0.1;
  audio1.autoPlay = false;
  audio1.preLoad = true;
  audio1.controls = true;

 /* Fonction au moment ou je click sur le bras*/

  $('.circlebras').click(function() {


  $('.titrepartie').html('<h4> Les Bras </h4>');
  $('.textpartie').html("<p> En anatomie, le bras (parfois arrière-bras) est la partie du membre supérieur humain comprise entre l'épaule (qui l'attache au tronc) et le coude (qui l'attache à l'avant-bras). Dans le langage courant, le terme « bras » peut référer au membre supérieur dans sa totalité. </p>");

  audio1.play();
  });

/* Fonction au moment ou je click sur la tete*/

  $('.circletete').click(function() {

  $('.titrepartie').html('<h4> La Tête </h4>');
  $('.textpartie').html("<p> La tête est la partie de l’anatomie du corps humain portée par le cou. L’homme, comme tous les primates, a une tête très différenciée, avec un cerveau important, un front, de grands yeux placés à l’avant, un nez, des joues, une bouche et deux oreilles sur chaque côté de la tête </p>");

  audio1.play();
  });


  /* Fonction au moment ou je click sur la jambe*/

  $('.circlejambe').click(function() {

  $('.titrepartie').html('<h4> Les Jambes </h4>');
  $('.textpartie').html("<p> La jambe est, en anatomie humaine, la partie de chaque membre inférieur du corps s'articulant en haut avec la cuisse, via le genou, et en bas avec le pied, via la cheville. Elle n'inclut donc pas ces deux articulations. Sa fonction est essentiellement locomotrice au cours de la marche. Dans le langage courant, « jambe » désigne le membre inférieur dans sa totalité. </p>");

  audio1.play();
  });

  /* Fonction au moment ou je click sur les abdos*/

  $('.circleabdos').click(function() {

  $('.titrepartie').html('<h4> Abdomen </h4>');
  $('.textpartie').html("<p> Chez l'être humain, l'abdomen est la région du corps située entre le thorax en haut et le petit bassin en bas, contenant la plus grande partie des organes digestifs.</p>");

  audio1.play();
  });



});