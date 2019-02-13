new Vue ({
    el: '#app',
    data: function() {
        return {
            afficher: false,
            monTexte : ""
        }
    },
    methods: {
        afficheralerte() {
            alert(this.monTexte)
        }
    }
});