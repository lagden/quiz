Quiz!!
======

Este é um quiz da Vale feito em 3 línguas utilizando `HTML` + `Javascript` + `CSS`.

Instalação local
----------------

###Você precisa ter:###


+ Node.js
    + Bower `npm install -g bower`
    + Grunt `npm install -g grunt`
+ Ruby
    + Compass `gem install compass`

###Instalação:###

    git clone git@github.com:lagden/quiz.git --recursive
    npm install -d
    bower install --save
    

###Executar local###
    
    grunt watch

    ou apenas

    grunt
    

Como publicar na Vale
---------------------

E faça o upload dos arquivos para: 

[Vale Site Manager](https://intranet.valeglobal.net/pt-br/oquefazemos/_layouts/sitemanager.aspx?Source=%2Fpt-br%2Foquefazemos%2FPaginas%2Fquiz-das-operacoes%2Easpx&Filter=1&FilterOnly=1)

+ `output.js`
+ `pt_en_es.html`
+ `css/screen.css`
+ `images/*`

Crie uma `Webpart` dentro da página e link para o arquivo `pt_en_es.html`.
