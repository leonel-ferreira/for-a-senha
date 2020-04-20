$(function(){

	$('#senha').bind('keyup', function(){
		var txt = $(this).val();
		var forca = 0;

		//letras
		//números
		//caracteres especiais
		//min. caracteres

		if(txt.length > 6) {
			forca += 25;
		}

		var reg = new RegExp(/[a-z]/i);
		if(reg.test(txt)) {
			forca += 25;
		}

		var reg = new RegExp(/[0-9]/i);
		if(reg.test(txt)) {
			forca += 25;
		}

		var reg = new RegExp(/[^a-z0-9]/i);
		if(reg.test(txt)) {
			forca += 25;
		}

		if(forca >= 75) {
			var aceita = 'FORTE';
		} else {
			var aceita= 'FRACA! (DIGITE NÚMEROS E CARACTERES ESPECIAIS)';
		}
		
		if(forca >= 0 && forca < 75) {
			$('#forca').css('width','595');
		} else if(forca >= 75) {
			$('#forca').css('width','220');
		}
		$('#forca').html('FORÇA DA SENHA: '+forca+' '+aceita);
	});

});