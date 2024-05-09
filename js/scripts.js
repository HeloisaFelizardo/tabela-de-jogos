const frm = document.querySelector('form');
const btnListar = document.querySelector('#btnListar');
const inputClube = document.querySelector('#inClube');
const tabelaJogos = document.querySelector('#tabelaJogos');
const messageError = document.querySelector('.message-error');

let clubes = [];

const adicionarClubes = (e) => {
	e.preventDefault();

	const clube = inputClube.value;

	if (!clube) {
		messageError.textContent = 'Adicione um clube no campo.';
	} else {
		clubes.push(clube);
		messageError.textContent = '';
	}

	console.log(clubes);

	inputClube.value = '';
};

const listarClubes = () => {
	tabelaJogos.innerHTML = '';

	if (clubes.length === 0) {
		messageError.textContent = 'Não há clubes na lista.';
	} else if (clubes.length % 2 !== 0) {
		messageError.textContent = 'O número de clubes deve ser par.';
	} else {
		messageError.textContent = '';

		const numJogos = clubes.length / 2;

		for (let i = 0; i < numJogos; i++) {
			const tr = document.createElement('tr');

			const tdCasa = document.createElement('td');
			tdCasa.textContent = clubes[i];

			const tdVersus = document.createElement('td');
			tdVersus.textContent = 'X';

			const tdVisitante = document.createElement('td');
			tdVisitante.textContent = clubes[clubes.length - 1 - i];

			console.log(i);
			console.log(`posição: ${clubes.length - 1 - i}`);
			tr.appendChild(tdCasa);
			tr.appendChild(tdVersus);
			tr.appendChild(tdVisitante);

			tabelaJogos.appendChild(tr);
		}
	}
};

frm.addEventListener('submit', adicionarClubes);

btnListar.addEventListener('click', listarClubes);
