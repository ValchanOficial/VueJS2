new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Botão pressionado!')
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})