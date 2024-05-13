const digital = document.querySelector('.digital');
atualiazarReloio()
function atualiazarReloio() {
    const agora = new Date();
    const hora = agora.getHours();
    const minuto = agora.getMinutes();
    const segundo = agora.getSeconds();

	digital.innerHTML = `${zeroEsquerda(hora)}:${zeroEsquerda(minuto)}:${zeroEsquerda(segundo)}`;

	setTimeout(atualiazarReloio, 1000);
}

function zeroEsquerda(time) {
	return time < 10 ? '0' + time : time;
}