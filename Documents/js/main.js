"use strict"

var currLanguage = 'pt';

$introducao = $('#quizIntroducao').text(db.introducao[currLanguage]);

// Quiz
function theQuiz(dados, lingua)
{
    this.lingua = lingua || 'pt';
    this.totalPontos = 0;
    // this.totalPerguntas = Object.keys(dados.quiz).length;
    this.dados = dados;
    this.quiz = dados.quiz;
    this.totalPerguntas = this.quiz.length;
    this.curr = 0;
    this.$view = $('#quizFrame');
    this.view = {
        img: this.$view.find('.quizImg:eq(0)'),
        pergunta: this.$view.find('.quizPergunta:eq(0)'),
        respostas: this.$view.find('.quizRespostas:eq(0)'),
        resultado: $('#quizResultadoResposta')
    }
    this.opts = ['a','b','c'];
    this.isCorreto = false;
    this.init();
};

theQuiz.prototype.init = function() {
    this.build(this.curr);
    this.listener(true);
};

theQuiz.prototype.listener = function(chave) {
    var that = this;
    chave = chave || false;
    console.log(chave);
    (chave)
    ? this.view.respostas.on('click', '> li', {"that": that}, that.responde)
    : this.view.respostas.off('click', '> li', that.responde)
};

theQuiz.prototype.responde = function(ev)
{
    ev.preventDefault();
    var that = ev.data.that;
    var $el = $(this);
    that.isCorreto = $el.data('ok');
    (that.isCorreto)
    ? $el.addClass('ok')
    : $el.addClass('fail');
    that.next();
}

theQuiz.prototype.next = function() {
    var that = this;
    this.listener();
    if(this.isCorreto)
    {
        this.totalPontos++;
        this.view.resultado.removeClass('fail').addClass('ok')
        .find('span').text(this.dados.correto[this.lingua]);
    }
    else
    {
        this.view.resultado.removeClass('ok').addClass('fail')
        .find('span').text(this.dados.incorreto[this.lingua]);
    }

    TweenMax.to(this.view.resultado, .5, {opacity: 1});
    TweenMax.from(this.view.resultado, 1, {top: "-50%", ease:Bounce.easeOut, onComplete: that.after, onCompleteParams: [that]});
};

theQuiz.prototype.after = function(that) {
    if(that.curr < (that.totalPerguntas - 1))
    {
        that.curr++;
        TweenMax.to(that.view.resultado, .5, {delay: 1, opacity: 0, onComplete: function(){
            that.build(that.curr);
            that.listener(true);
        }});
    }
    else{
        that.showResult();
    }
};

theQuiz.prototype.showResult = function() {
    console.log('showResult');
}

theQuiz.prototype.build = function(pos) {
    var that = this;
    this.view.img.get(0).src = '../Documents/images/'+this.quiz[pos].image;
    this.view.pergunta.text(this.quiz[pos].pergunta[this.lingua]);
    this.view.respostas.children('li').each(function(k, v) {
        var $resposta = $(v);
        $resposta.text(that.quiz[pos].respostas[that.opts[k]][that.lingua]);
        $resposta.data('letra',that.opts[k]);
        if(that.quiz[pos].correta == that.opts[k])
            $resposta.data('ok',true);
        else
            $resposta.data('ok',false);

        $resposta.removeClass('ok').removeClass('fail');
    });
};

var valeTheQuiz = new theQuiz(db, currLanguage);
