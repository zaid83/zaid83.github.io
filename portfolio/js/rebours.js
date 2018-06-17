jQuery(function($){

var lancement = new Date(2017,06,26,00,00,00);
var days = $('#days');
var hours = $('#hours');
var minutes = $('#minutes');
var seconds = $('#seconds');


setDate();



function setDate(){
	var now = new Date();
	var s = (now.getTime() - lancement.getTime())/1000;

	var d = Math.floor(s/86400);
	days.html('<strong>'+d+' jours'+ '</strong>');
	s -= d*86400;

    var h = Math.floor(s/3600);
	hours.html('<strong>'+h+' heures'+ '</strong>');
	s -= h*3600;

	var m = Math.floor(s/60);
	minutes.html('<strong>'+m+' minutes'+ '</strong>');
	s -= m*60;

	s = Math.floor(s);
	seconds.html('<strong>'+s+' secondes'+ '</strong>');

	setTimeout(setDate,1000);
}




})