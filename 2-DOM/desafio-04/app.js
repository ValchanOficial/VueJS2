new Vue({
	el: '#desafio',
	data: {
		C1: 'destaque',
		azul: true,
		roxo: true,
		classeUser: '',
		tipo: '',
		corUser: '',
		estiloJS: {
			width: '50px',
			height: '50px'
		},
		width: 0

	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.C1 = this.C1 == 'destaque' ? 'encolher' : 'destaque';
			}, 1000);

		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 2;
				this.width = `${valor}%`;
				if (valor == 100) {
					clearInterval(temporizador);
				}
			}, 200);
		},
		setRoxo(event) {
			if (event.target.value == "true") {
				this.roxo = true;
			} else if (event.target.value == "false") {
				this.roxo = false;
			}
		}
	}
})
