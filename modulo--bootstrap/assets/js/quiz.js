//const elementos = document.querySelectorAll('.modal');

//const alternativas = document.querySelectorAll('.alt');

var pontos = 0

var perguntas = {

    pergunta1:{
        titulo: 'Pergunta 1: Qual bicho roeu a roupa do rei de roma?',
        alts:{
            alt1: 'Cobra',
            alt2: 'Camelo',
            alt3: 'Rato',
            alt4: 'Cachorro'
        }
    },

    pergunta2:{
        titulo2: 'Pergunta 2: Qual era a cor que não era do cavalo preto e branco de Napoleão?',
        alts2:{
            alt21: 'Preto',
            alt22: 'Preto e Branco',
            alt23: 'Azul',
            alt24: 'Branco'
        }
    },

    pergunta3:{
        titulo3: 'Pergunta 3: Qual o doce mais doce entre todos os doces?',
        alts3:{
            alt31: 'Cocada',
            alt32: 'Doce de batata doce',
            alt33: 'Mel',
            alt34: 'Suspiro'
        }
    },

    pergunta4:{
        titulo4: 'Pergunta 4: Qual foi a conclusão lógica que o filósofo Zenão chegou para seu paradoxo?',
        alts4:{
            alt41: 'O homem nunca alcançaria a tartaruga',
            alt42: 'A tartaruga viraria uma tartaruga ninja',
            alt43: 'A tartaruga ganharia de lavada do homem',
            alt44: 'Zenão nunca propôs paradoxo nenhum'
        }
    },

    pergunta5:{
        titulo5: 'Pergunta 5: Porquê Plutão não é mais planeta?',
        alts5:{
            alt51: 'Platão nunca foi um planeta',
            alt52: 'Plutão é o nome de uma banda musical, não de um planeta',
            alt53: 'Pois foi considerado pequeno demais para ser um planeta',
            alt54: 'Plutão é quente demais para ser considerado um planeta'
        }
    }
};

function acerto1(){
    document.getElementById('aw3').classList.replace('btn-outline-primary', 'btn-success');
}

function erro1(){
    document.getElementById('aw1').classList.replace('btn-outline-primary', 'btn-danger')
    document.getElementById('aw2').classList.replace('btn-outline-primary', 'btn-danger')
    document.getElementById('aw4').classList.replace('btn-outline-primary', 'btn-danger')
}


function acerto2(){
    document.getElementById('aw23').classList.replace('btn-outline-primary', 'btn-success');
}

function erro2(){
    document.getElementById('aw21').classList.replace('btn-outline-primary', 'btn-danger')
    document.getElementById('aw22').classList.replace('btn-outline-primary', 'btn-danger')
    document.getElementById('aw24').classList.replace('btn-outline-primary', 'btn-danger')
}

function acerto3(){
    document.getElementById('aw32').classList.replace('btn-outline-primary', 'btn-success');
}

function erro3(){
    document.getElementById('aw31').classList.replace('btn-outline-primary', 'btn-danger')
    document.getElementById('aw33').classList.replace('btn-outline-primary', 'btn-danger')
    document.getElementById('aw34').classList.replace('btn-outline-primary', 'btn-danger')
}

function acerto4(){
    document.getElementById('aw41').classList.replace('btn-outline-primary', 'btn-success');
}

function erro4(){
    document.getElementById('aw42').classList.replace('btn-outline-primary', 'btn-danger')
    document.getElementById('aw43').classList.replace('btn-outline-primary', 'btn-danger')
    document.getElementById('aw44').classList.replace('btn-outline-primary', 'btn-danger')
}

function acerto5(){
    document.getElementById('aw53').classList.replace('btn-outline-primary', 'btn-success');
}

function erro5(){
    document.getElementById('aw51').classList.replace('btn-outline-primary', 'btn-danger')
    document.getElementById('aw52').classList.replace('btn-outline-primary', 'btn-danger')
    document.getElementById('aw54').classList.replace('btn-outline-primary', 'btn-danger')
}


function gerarQuestao1(){

    document.getElementById('title1').innerHTML += ' ' + perguntas.pergunta1.titulo;
    document.getElementById('aw1').innerHTML += ' ' + perguntas.pergunta1.alts.alt1;
    document.getElementById('aw2').innerHTML += ' ' + perguntas.pergunta1.alts.alt2;
    document.getElementById('aw3').innerHTML += ' ' + perguntas.pergunta1.alts.alt3;
    document.getElementById('aw4').innerHTML += ' ' + perguntas.pergunta1.alts.alt4;

};


function gerarQuestao2(){

    document.getElementById('title2').innerHTML += ' ' + perguntas.pergunta2.titulo2;
    document.getElementById('aw21').innerHTML += ' ' + perguntas.pergunta2.alts2.alt21;
    document.getElementById('aw22').innerHTML += ' ' + perguntas.pergunta2.alts2.alt22;
    document.getElementById('aw23').innerHTML += ' ' + perguntas.pergunta2.alts2.alt23;
    document.getElementById('aw24').innerHTML += ' ' + perguntas.pergunta2.alts2.alt24;    

};

function gerarQuestao3(){

    document.getElementById('title3').innerHTML += ' ' + perguntas.pergunta3.titulo3;
    document.getElementById('aw31').innerHTML += ' ' + perguntas.pergunta3.alts3.alt31;
    document.getElementById('aw32').innerHTML += ' ' + perguntas.pergunta3.alts3.alt32;
    document.getElementById('aw33').innerHTML += ' ' + perguntas.pergunta3.alts3.alt33;
    document.getElementById('aw34').innerHTML += ' ' + perguntas.pergunta3.alts3.alt34;    

};

function gerarQuestao4(){

    document.getElementById('title4').innerHTML += ' ' + perguntas.pergunta4.titulo4;
    document.getElementById('aw41').innerHTML += ' ' + perguntas.pergunta4.alts4.alt41;
    document.getElementById('aw42').innerHTML += ' ' + perguntas.pergunta4.alts4.alt42;
    document.getElementById('aw43').innerHTML += ' ' + perguntas.pergunta4.alts4.alt43;
    document.getElementById('aw44').innerHTML += ' ' + perguntas.pergunta4.alts4.alt44;    

};

function gerarQuestao5(){

    document.getElementById('title5').innerHTML += ' ' + perguntas.pergunta5.titulo5;
    document.getElementById('aw51').innerHTML += ' ' + perguntas.pergunta5.alts5.alt51;
    document.getElementById('aw52').innerHTML += ' ' + perguntas.pergunta5.alts5.alt52;
    document.getElementById('aw53').innerHTML += ' ' + perguntas.pergunta5.alts5.alt53;
    document.getElementById('aw54').innerHTML += ' ' + perguntas.pergunta5.alts5.alt54;    

};

function limpar(){

    document.getElementById('title1').innerHTML = '';
    document.getElementById('aw1').innerHTML = '1)';
    document.getElementById('aw2').innerHTML = '2)';
    document.getElementById('aw3').innerHTML = '3)';
    document.getElementById('aw4').innerHTML = '4)';

    document.getElementById('title2').innerHTML = '';
    document.getElementById('aw21').innerHTML = '1)';
    document.getElementById('aw22').innerHTML = '2)';
    document.getElementById('aw23').innerHTML = '3)';
    document.getElementById('aw24').innerHTML = '4)';

    document.getElementById('title3').innerHTML = '';
    document.getElementById('aw31').innerHTML = '1)';
    document.getElementById('aw32').innerHTML = '2)';
    document.getElementById('aw33').innerHTML = '3)';
    document.getElementById('aw34').innerHTML = '4)';

    document.getElementById('title4').innerHTML = '';
    document.getElementById('aw41').innerHTML = '1)';
    document.getElementById('aw42').innerHTML = '2)';
    document.getElementById('aw43').innerHTML = '3)';
    document.getElementById('aw44').innerHTML = '4)';

    document.getElementById('title5').innerHTML = '';
    document.getElementById('aw51').innerHTML = '1)';
    document.getElementById('aw52').innerHTML = '2)';
    document.getElementById('aw53').innerHTML = '3)';
    document.getElementById('aw54').innerHTML = '4)';

};


