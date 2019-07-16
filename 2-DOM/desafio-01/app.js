new Vue({
    el: '#desafio',
    data: {
        nome: 'Valéria',
        idade: 25,
        img: 'https://i.etsystatic.com/11465033/r/il/7bcf0e/1303089442/il_794xN.1303089442_v8kl.jpg',

    },
    methods: {
        idadeX3: function () {
            return this.idade * 3
        },
        random: function () {
            return Math.floor(Math.random() * 2)
        }
    }
})