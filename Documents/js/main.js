"use strict"

// Quiz
function theQuiz(dados, lingua){
    this.lingua = lingua || 'pt';
    this.totalPontos = 0;
    this.totalPerguntas = Object.keys(dados.quiz).length
    this.curr = 0;
    this.init();
}

theQuiz.prototype.init = function() {
    console.log(this.totalPerguntas);
};

var valeTheQuiz = new theQuiz(db, 'pt');