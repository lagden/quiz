var db = {
    introducao: {
        pt: 'Responda e descubra se você reconhece as nossas operações ao redor do mundo.',
        en: 'Answer these questions to find out if you recognize our operations around the world.',
        es: 'Responda y descubra si reconoce nuestras operaciones alrededor del mundo.'
    },
    correto: {
        pt: 'Correto',
        en: 'Correct',
        es: 'Correcto',
        msg: {
            titulo: {
                pt: 'Parabéns!',
                en: 'Congratulations!',
                es: '¡Felicitaciones!'
            },
            corpo: {
                pt: 'Você realmente conhece muito sobre as nossas operações. Continue assim!<br><a href="http://intranet.valeglobal.net/pt-br/oquefazemos/estrategiadenegocios/Paginas/default.aspx">Saiba ainda mais aqui</a>',
                en: 'You really know a lot about our operations. Keep it up!<br><a href="http://intranet.valeglobal.net/en-us/oquefazemos/estrategiadenegocios/Pages/default.aspx">Find out more here</a>',
                es: 'Realmente sabe mucho sobre nuestras operaciones. ¡Continúe así!<br><a href="http://intranet.valeglobal.net/es-es/oquefazemos/estrategiadenegocios/Paginas/default.aspx">Sepa aún más aquí</a> '
            }
        }
    },
    incorreto: {
        pt: 'Incorreto',
        en: 'Incorrect',
        es: 'Incorrecto',
        msg: {
            titulo: {
                pt: 'Pode melhorar, hein...',
                en: 'Better luck next time...',
                es: 'Puede mejorar, ¿eh?...'
            },
            corpo: {
                pt: 'Que tal aprender um pouco mais sobre a nossa empresa?<br><a href="http://intranet.valeglobal.net/pt-br/oquefazemos/estrategiadenegocios/Paginas/default.aspx">Saiba ainda mais aqui</a>',
                en: 'Why don’t you learn a little more about our company?<br><a href="http://intranet.valeglobal.net/en-us/oquefazemos/estrategiadenegocios/Pages/default.aspx">Click here</a>',
                es: '¿Qué tal aprender un poco más sobre nuestra empresa?<br><a href="http://intranet.valeglobal.net/es-es/oquefazemos/estrategiadenegocios/Paginas/default.aspx">Haga clic aquí</a>'
            }
        }
    },
    quiz: [{
        image: 'frame1.jpg',
        tip: {
            pt: 'Operamos neste lugar há mais de 100 anos.',
            en: 'We have had operations at this location for over 100 years.',
            es: 'Operamos en este lugar hace más de 100 años.'
        },
        pergunta: {
            pt: 'Você sabe que operação é essa?',
            en: 'Do you know which of our operations this is?',
            es: '¿Sabe qué operación es esta?'
        },
        respostas: {
            a: {
                pt: 'Mina de Totten, Sudbury, Canadá',
                en: 'Totten Mine, Sudbury, Canada',
                es: 'Mina de Totten, Sudbury, Canadá'
            },
            b: {
                pt: 'Mina do Cauê, Minas Gerais, Brasil',
                en: 'Cauê Mine, Minas Gerais, Brazil',
                es: 'Mina do Cauê, Minas Gerais, Brasil'
            },
            c: {
                pt: 'Mina de Moatize, Moçambique',
                en: 'Moatize Mine, Mozambique',
                es: 'Mina de Moatize, Mozambique'
            }
        },
        correta: 'a'
    }, {
        image: 'frame2.jpg',
        tip: false,
        pergunta: {
            pt: 'E esta, você conhece?',
            en: 'Do you know where this is?',
            es: 'Y esta operación, ¿la conoce?'
        },
        respostas: {
            a: {
                pt: 'Terminal Marítimo de Ponta da Madeira, Maranhão, Brasil',
                en: 'Ponta da Madeira Maritime Terminal, Maranhão, Brazil',
                es: 'Terminal Marítima de Ponta da Madeira, Maranhão, Brasil'
            },
            b: {
                pt: 'Hidrelétrica da usina de processamento de Soroawako, Indonésia',
                en: 'Hydroelectric station at the Soroawako processing plant, Indonesia',
                es: 'Hidroeléctrica de la usina de procesamiento de Soroawako, Indonesia'
            },
            c: {
                pt: 'Mina de Thompson, Manitoba, Canadá',
                en: 'Thompson Mine, Manitoba, Canada',
                es: 'Mina de Thompson, Manitoba, Canadá'
            }
        },
        correta: 'b'
    }, {
        image: 'frame3.jpg',
        tip: {
            pt: 'Esta é a maior mina de minério de ferro a céu aberto do mundo.',
            en: 'This is the biggest open-pit iron ore mine in the world.',
            es: 'Esta es la mayor mina de mena de hierro a cielo abierto del mundo.'
        },
        pergunta: {
            pt: 'Não diga que não reconhece essa?',
            en: 'You can’t say you don’t recognize this one!',
            es: '¿No me diga que no reconoce esta?'
        },
        respostas: {
            a: {
                pt: 'Mina de Mariana, Minas Gerais, Brasil',
                en: 'Mariana Mine, Minas Gerais, Brazil',
                es: 'Mina de Mariana, Minas Gerais, Brasil'
            },
            b: {
                pt: 'Mina de Carajás, Pará, Brasil',
                en: 'Carajás Mine, Pará, Brazil',
                es: 'Mina de Carajás, Pará, Brasil'
            },
            c: {
                pt: 'Complexo Industrial do Porto de Sohar, Omã',
                en: 'Port of Sohar Industrial Complex, Oman',
                es: 'Complejo Industrial del Puerto de Sohar, Omán'
            }
        },
        correta: 'b'
    }, {
        image: 'frame4.jpg',
        tip: {
            pt: 'Este projeto irá ajudar a construir 137km de ferrovia.',
            en: 'This project will help towards the construction of 137km of railway track.',
            es: 'Este proyecto ayudará a construir 137 km de vía férrea.'
        },
        pergunta: {
            pt: 'E aí, descobriu onde fica essa operação?',
            en: 'Have you figured out where this operation is?',
            es: 'Y ahora, ¿descubrió dónde se localiza esta operación?'
        },
        respostas: {
            a: {
                pt: 'Projeto Corredor de Nacala, Malauí',
                en: 'Nacala Corridor Project, Malawi',
                es: 'Proyecto Corredor de Nacala, Malawi'
            },
            b: {
                pt: 'Mina Taquari-Vassouras, Sergipe, Brasil',
                en: 'Taquari-Vassouras Mine, Sergipe, Brazil',
                es: 'Mina Taquari-Vassouras, Sergipe, Brasil'
            },
            c: {
                pt: 'Mina de Moatize, Moçambique',
                en: 'Moatize Mine, Mozambique',
                es: 'Mina de Moatize, Mozambique'
            }
        },
        correta: 'a'
    }, {
        image: 'frame5.jpg',
        tip: {
            pt: 'Este local produz metais básicos e está em processo de ramp-up.',
            en: 'This location produces base metals and is undergoing a ramp-up process.',
            es: 'Este local produce metales básicos y está en proceso de ramp-up.'
        },
        pergunta: {
            pt: 'Vamos lá... E essa foto aí de cima, de onde é?',
            en: 'Where do you think this photo was taken?',
            es: 'Vamos a ver... Y esta foto, ¿de dónde es?'
        },
        respostas: {
            a: {
                pt: 'Mina de Bayóvar, Sechura, Peru',
                en: 'Bayóvar Mine, Sechura, Peru',
                es: 'Mina de Bayóvar, Sechura, Perú'
            },
            b: {
                pt: 'Mina do Tamanduá, Minas Gerais',
                en: 'Tamanduá Mine, Minas Gerais',
                es: 'Mina do Tamanduá, Minas Gerais'
            },
            c: {
                pt: 'Projeto Vale Nova Caledônia (VNC), Nova Caledônia',
                en: 'Vale New Caledonia (VNC) Project, New Caledonia',
                es: 'Proyecto Vale Nueva Caledonia (VNC), Nueva Caledonia'
            }
        },
        correta: 'c'
    }, {
        image: 'frame6.jpg',
        tip: {
            pt: 'O complexo possui porto, usina e pátio ferroviário.',
            en: 'This complex has a port, a plant and a railway stockyard.',
            es: 'El complejo posee un puerto, una planta y un patio ferroviario.'
        },
        pergunta: {
            pt: 'A última imagem, vai... Você consegue descobrir que operação é essa?',
            en: 'Here’s the last one, do you know which operation this is?',
            es: 'La última imagen. ¿Consigue descubrir que operación es esta?'
        },
        respostas: {
            a: {
                pt: 'Mina de Carborough Downs, Queensland, Canadá',
                en: 'Carborough Downs Mine, Queensland, Canada',
                es: 'Mina de Carborough Downs, Queensland, Canadá'
            },
            b: {
                pt: 'Terminal Teluk Rubiah, Peark, Malásia',
                en: 'Teluk Rubiah Terminal, Peark, Malaysia',
                es: 'Terminal Teluk Rubiah, Perak, Malasia'
            },
            c: {
                pt: 'Complexo de Tubarão, Espírito Santo, Brasil',
                en: 'Tubarão Complex, Espírito Santo, Brazil',
                es: 'Complejo de Tubarão, Espírito Santo, Brasil'
            }
        },
        correta: 'c'
    }]
}