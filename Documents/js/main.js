// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

var currLanguage = String(window.parent.document.documentElement.lang).split('-')[0] || 'pt';
console.log(currLanguage);

;( function( window ) {

'use strict';

var $ = window.jQuery;
var $introducao = $('#quizIntroducao').text(db.introducao[currLanguage]);

// Quiz
function theQuiz(dados, lingua, path)
{
    this.path = path || '../Documents/images/';
    this.lingua = lingua || 'pt';
    this.totalPontos = 0;
    this.dados = dados;
    this.quiz = dados.quiz;
    this.totalPerguntas = this.quiz.length;
    this.curr = 0;
    this.$view = $('#quizFrame');
    this.view = {
        img: this.$view.find('.quizImg:eq(0)'),
        pergunta: this.$view.find('.quizPergunta:eq(0)'),
        respostas: this.$view.find('.quizRespostas:eq(0)'),
        resultado: $('#quizResultadoResposta'),
        atual: $('#quizAtual'),
        tipHandler: $('#quizTip'),
        tipBox: $('#quizTipBox'),
        show: $('#quizShowResultado'),
        grupo: $('#quizGroupQuestion')
    };
    this.opts = ['a','b','c'];
    this.isCorreto = false;
    this.pontos = {
        'pt': 'ponto',
        'en': 'point',
        'es': 'ponto'
    }
    this.init();
};

theQuiz.prototype.init = function() {
    this.reset();

    var that = this;

    // Tip events
    this.view.tipHandler.on('mouseenter mouseleave', {"box": this.view.tipBox}, function(ev){
        var box = ev.data.box;
        if(ev.type == 'mouseenter')
        {
            // Ga
            gaUpdate('pergunta' + (that.curr + 1) + '_saiba-mais', 'mouse-over');
            TweenMax.to(box, .5, {opacity: 1, right: 0});
        }
        else
            TweenMax.to(box, .5, {opacity: 0, right: '-225px'});
    })
    .trigger('mouseleave');

    this.view.tipBox
    .css({opacity: 0})
    .removeClass('hidden');

    // this.view.show.on('click', {"that": this}, function(ev){
    //     ev.data.that.reset();
    // });
};

theQuiz.prototype.reset = function() {
    this.totalPontos = this.curr = 0;
    this.build(this.curr);
    this.listener(true);
    this.view.show.removeClass('ok fail remove-o-span-do-ie').addClass('hidden');
    this.view.grupo.css({opacity: 1});
    this.view.resultado.css({opacity: 0});
}

theQuiz.prototype.listener = function(chave) {
    var that = this;
    chave = chave || false;
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

    // Ga
    gaUpdate('pergunta-' + (that.curr + 1) + '_resposta-'+ $el.data('letra'));

    // Mostra o correto
    if($el.hasClass('fail'))
    {
        setTimeout(function()
        {
            that.view.respostas.find('> li').filter(function(){
                return $(this).data("ok") == true;
            })
            .addClass('ok');
            that.next();
        }, 1000);
    }
    else
        that.next();
}

theQuiz.prototype.next = function(el) {
    el = el || false;
    var that = this;
    this.listener();
    if(this.isCorreto)
    {
        this.totalPontos++;
        this.view.resultado.removeClass('fail remove-o-span-do-ie').addClass('ok')
        .find('span').text(this.dados.correto[this.lingua]);
    }
    else
    {
        this.view.resultado.removeClass('ok remove-o-span-do-ie').addClass('fail')
        .find('span').text(this.dados.incorreto[this.lingua]);
    }

    TweenMax.to(this.view.resultado, .5, {opacity: 1});
    TweenMax.from(this.view.resultado, 1.5, {top: "-50%", ease:Bounce.easeOut, onComplete: that.after, onCompleteParams: [that]});
};

theQuiz.prototype.after = function(that) {
    setTimeout(function()
    {
        if(that.curr < (that.totalPerguntas - 1))
        {
            that.curr++;
            TweenMax.to(that.view.resultado, .5, {delay: 1, opacity: 0, onComplete: function(){
                that.view.resultado.addClass("remove-o-span-do-ie");
                that.build(that.curr);
                that.listener(true);
            }});
        }
        else{
            that.showResult();
        }
    }, 4000);
};

theQuiz.prototype.showResult = function() {
    var media =  Math.ceil(this.totalPerguntas / 2);
    var css = (this.totalPontos > media) ? 'ok' : 'fail';
    var tituloMsg = (this.totalPontos > media) ? this.dados.correto.msg.titulo[this.lingua] : this.dados.incorreto.msg.titulo[this.lingua];
    var corpoMsg = (this.totalPontos > media) ? this.dados.correto.msg.corpo[this.lingua] : this.dados.incorreto.msg.corpo[this.lingua];
    var pontos = this.pontos[this.lingua] + (this.totalPontos > 1) ? 's' : '';
    this.view.show.find('.txt:eq(0) > .pontos:eq(0)').addClass(css).html('<div>' + this.totalPontos + '<br><span>' + pontos + '</span></div>')
    this.view.show.find('.txt:eq(0) > .tituloMsg:eq(0)').text(tituloMsg);
    this.view.show.find('.txt:eq(0) > .corpoMsg:eq(0)').html(corpoMsg);
    this.view.show.css({opacity: 0}).removeClass('hidden ok fail remove-o-span-do-ie').addClass(css);
    TweenMax.to(this.view.show, 1, {opacity: 1});
    TweenMax.to(this.view.grupo, 1, {opacity: 0});

    // Ga
    gaUpdate('resultado_' + this.totalPontos + 'pontos', 'load');

    this.view.show.find('.txt:eq(0) > .corpoMsg:eq(0) > a:eq(0)').on('click', function(ev){
        ev.preventDefault();
        gaUpdate('resultado_saiba-ainda-mais-aqui');
        var that = this;
        setTimeout(function(){
            window.open(that.href, '_parent');
        }, 500);
    });
    'resultado_saiba-ainda-mais-aqui'
}

theQuiz.prototype.build = function(pos) {
    var that = this;
    this.view.atual.find('span').text(pos+1);
    this.view.img.get(0).src = this.path + this.quiz[pos].image;
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

    if(this.quiz[pos].tip)
    {
        this.view.tipHandler.removeClass('hidden');
        this.view.tipBox
        .removeClass('hidden')
        .text(this.quiz[pos].tip[this.lingua]);
    }
    else
    {
        this.view.tipHandler.addClass('hidden');
        this.view.tipBox.addClass('hidden');
    }
};

// browser global
window.theQuiz = theQuiz;

})( window );

$('#preloadImgsQuiz').imagesLoaded()
    .always( function( instance ) {
        console.log('always: all images loaded');
        runQuiz();
    })
    .done( function( instance ) {
        console.log('done: all images successfully loaded');
    })
    .fail( function() {
        console.log('fail: all images loaded, at least one is broken');
    })
    .progress( function( instance, image ) {
        var result = image.isLoaded ? 'loaded' : 'broken';
        console.log( 'image is ' + result + ' for ' + image.img.src );
    });

// Executa
var valeTheQuiz;
function runQuiz()
{
    valeTheQuiz = new theQuiz(db, currLanguage, pathImg);
}

// Method Ga
function gaUpdate(track, evento, slug)
{
    evento = evento || 'clique';
    slug = slug || 'aboutvale_news_paginas_teste-seus-conhecimentos-e-se-emocione-com-a-historia-da-vale';
    if(_gaq)
    {
        _gaq.push(['_trackEvent', slug, evento, track]);
        console.log(track, evento, slug);
    }
}
