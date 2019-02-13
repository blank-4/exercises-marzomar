new Vue ({
    el: '#app',
    data: () => {
        return {
            monTexte : "",
            success: false,
        }
    },
    computed: {
        maProprieteComputed: function() {
            console.log("maProprieteComputed");
          if (this.success) return 'valid';
          else return '';
        }
    },
    mounted: () => {
        console.log("mouted")
    },
    created: () => {
        console.log("created");
    },
    beforeUpdated: () => {
        console.log("beforeUpdated");
    },
    updated: () => {
        console.log("updated");
    },
    beforeDestroy: () => {
        console.log("beforeDestroy");
        
    }
});
