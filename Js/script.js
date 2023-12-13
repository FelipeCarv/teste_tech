//-------------- Toggle Menu --------------

const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu-lateral')
const main = document.querySelector('main')

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    main.classList.toggle('active');
}) 


//-------------- FILTRO RELATÓRIOS --------------

function selectsFilter (){
    let selectMes = document.querySelector('#mesPagamento').value;
    let selectStatus = document.querySelector('#statusNota').value;
    let selectDataEmissao = document.querySelector("#dataEmissao").value;
    let selectDataCobranca = document.querySelector("#dataCobranca").value;

    let dataEmissao = formataData(selectDataEmissao);
    let dataCobranca = formataData(selectDataCobranca);

    interaTabela(dataEmissao, dataCobranca, selectMes, selectStatus);
}


//-------------- FORMATA A DATA PADRÃO PT-BR E RESETA O FUSO HORÁRIO--------------
function formataData(data){
    let dataFormatar = new Date(data + 'T00:00:00');
    return dataFormatar.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
}

//-------------- INTERA SOBRE A TABELA E APLICA O FILTRO --------------
function interaTabela(dataEmissao, dataCobranca, selectMes, selectStatus) {
    const tabela = document.getElementById('corpo-dados');
    const linha = tabela.getElementsByTagName('tr');
    let encontrado = false;

    for (let posicao in linha) {
        if (true === isNaN(posicao)) {
            continue;
        }
        let conteudoLinha = linha[posicao].innerHTML;
        
        if (true === conteudoLinha.includes(dataEmissao) ||
            true === conteudoLinha.includes(dataCobranca) ||
            true === conteudoLinha.includes(selectMes) ||
            true === conteudoLinha.includes(selectStatus)) {
            linha[posicao].style.display = '';
            encontrado = true;
        } else {
            linha[posicao].style.display = 'none';
        }
    }

    if (!encontrado) {
        const mensagem = document.getElementById('mensagem');
        mensagem.textContent = "Nenhum valor encontrado.";

        // Exibe novamente todas as linhas da tabela
        for (let posicao in linha) {
            if (true === isNaN(posicao)) {
                continue;
            }
            linha[posicao].style.display = '';
        }
    } else {
        const mensagem = document.getElementById('mensagem');
        mensagem.textContent = '';
    }
}
