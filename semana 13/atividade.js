ajustaTema = () => {
	let modoEscuro = parseInt(localStorage.getItem('modoEscuro'));
	if(modoEscuro){
		document.documentElement.classList.remove('modo-escuro');
		document.getElementById('tema').textContent = 'Modo escuro';
		localStorage.setItem('modoEscuro', 0);
	}
	else{
		document.documentElement.classList.add('modo-escuro');
		document.getElementById('tema').textContent = 'Modo claro';
		localStorage.setItem('modoEscuro', 1);
	}
}

ajustaTexto = (regra) => {

	let tamanhoFonte = parseFloat(localStorage.getItem('tamanhoFonte'));
	switch(regra){
		case "+":
			if(tamanhoFonte <= 2)
				tamanhoFonte += 0.1;
			else{
				alert('Atingiu o tamanho máximo!');
				return;
			}
			break;
		case "-":
			if(tamanhoFonte > 0.5)
				tamanhoFonte -= 0.1;
			else{
				alert('Atingiu o tamanho mínimo!');
				return;
			}
			break;
		case "=":
			tamanhoFonte = 1;
			break;
	}
	localStorage.setItem('tamanhoFonte', tamanhoFonte);
	document.body.style.fontSize = tamanhoFonte.toFixed(1) + 'em';
}

function iniciar(){
	let tamanhoFonte = parseFloat(localStorage.getItem('tamanhoFonte'));
	let modoEscuro = parseInt(localStorage.getItem('modoEscuro'));
	if(isNaN(tamanhoFonte)){
		tamanhoFonte = 1;
	}
	if(isNaN(modoEscuro)){
		modoEscuro = 1;
	}
	else{
		if(modoEscuro){
			modoEscuro = 0;
		}
		else{
			modoEscuro = 1;
		}
	}
	localStorage.setItem('tamanhoFonte', tamanhoFonte);
	localStorage.setItem('modoEscuro', modoEscuro);
	ajustaTema();
	ajustaTexto();
}

document.addEventListener('DOMContentLoaded', function() {
	iniciar();
	document.getElementById('fontemaior').addEventListener('click', () => ajustaTexto("+") );
	document.getElementById('fontemenor').addEventListener('click', () => ajustaTexto("-") );
	document.getElementById('reset').addEventListener('click', () => ajustaTexto("=") );
	document.getElementById('tema').addEventListener('click', () => ajustaTema() );	
});