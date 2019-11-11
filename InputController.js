function InputController() {
    this.nomes = {};
    this.codigos = {};
    this.teclas = {};
}

InputController.prototype.setupKeyboard = function(novasTeclas){
    for (var t = 0; t < novasTeclas.length; t++) {
        const tecla = novasTeclas[t];
        this.nomes[tecla.codigo] = tecla.nome;
        this.codigos[tecla.nome] = tecla.codigo;
        this.teclas[tecla.nome] = false;        
    }
    var that = this;
    addEventListener("keydown", function (e) {
        var nome = that.nomes[e.keyCode];
        if(nome){
            that.teclas[nome] = true;
            e.preventDefault();
        }
         
     });
     addEventListener("keyup", function (e) {
        var nome = that.nomes[e.keyCode];
        if(nome){
            that.teclas[nome] = false;
            e.preventDefault();
        }
         
     });
  
}