$(function(){

$.ajax({
	url: 'https://mindicador.cl/api',
	type: 'GET',
	}).then(function(data) {
		console.log(data);
	});

})