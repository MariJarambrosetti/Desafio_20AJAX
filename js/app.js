$(function(){

// LLAMADO 
	$.ajax({
		url: 'https://mindicador.cl/api',
		type: 'GET',
		// FUNCION Y VARIABLE DATA 
		}).then(function(data) {
			console.log(data);
			var indicador = data;

		// MOSTRAR EL VALOR ACTUAL DE DOLAR Y EURO
			$('#dolartext').text(indicador.dolar.valor);
			$('#eurotext').text(indicador.euro.valor);

		// VALORES DE DOLAR, EURO Y PESO EN VARIABLES 
			var dolar = parseInt(indicador.dolar.valor);
			console.log(dolar);

			var euro  = parseInt(indicador.euro.valor); 
			console.log(euro);

			var peso  = $('#cltext').text(1);
			console.log(peso);

		// BOTON DE FUNCION CONVERTIR PESOS CHILENOS A DOLAR Y EURO
			$('#convertir_cl').on('click', function(event) {
				event.preventDefault(event);

				var valor_chileno_ingresado = $('#valor_cl').val();
				console.log(valor_chileno_ingresado);

				var resultado1 = parseInt(valor_chileno_ingresado / dolar);
				console.log(resultado1);

				var resultado2 = parseInt(valor_chileno_ingresado / euro);
				console.log(resultado2);

				$('#dolartext').text(resultado1);
				$('#eurotext').text(resultado2);
			});

		// BOTON CONVERTIR DOLARES A PESO CHILENO 
			$('#convertir_usd').on('click', function(event) {
				event.preventDefault(event);

				var valor_dolar_ingresado = $('#valor_dolar').val();
				console.log(valor_chileno_ingresado);

				
			});


		});	
})