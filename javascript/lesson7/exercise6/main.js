
new Vue ({
    el: '#app',
    data: () => {
        return {
            monTexte : ""
        }
    },
    watch: {
        monTexte: function (value) {
            console.log(value);
            if (value == "vue") return alert("vue")
        }
    },
    methods: {
        gifs () {
            var key= "2DOXws2NUZxcr0LPsCOLT6RjcegOFSGw"
            var texte= this.monTexte
            var request = new XMLHttpRequest(); //création de la requête
            request.open("GET", "http://api.giphy.com/v1/gifs/search?q="+texte+"&api_key="+key+"&   limit=5", true);
            console.log("requestIs: "+"http://api.giphy.com/v1/gifs/search?q="+texte+"&api_key="    +key+"&limit=5");
            request.send(); //envoie de la requête
            request.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                for (var i = 0; i < data.data.length; i++) {
                    var img = document.createElement("img");
                    img.setAttribute("src", data.data[i].images.fixed_width.url);
                    document.body.appendChild(img);
                    } 
                    /* var div = document.createElement("div");
                    div.innerHTML = data.data[i].images.fixed_width.url;
                    document.body.appendChild(div); */
                }
            } 
        }
    }

})
/* var img = document.createElement("img");
img.setAttribute("src", data.data[i].images.fixed_width.url);
document.body.appendChild(img);
} */