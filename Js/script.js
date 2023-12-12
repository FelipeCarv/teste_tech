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

    console.log(dataEmissao);
    console.log(dataCobranca);
    console.log(selectMes);
    console.log(selectStatus);
    
}


//-------------- FORMATA A DATA PADRÃO PT-BR E RESETA O FUSO HORÁRIO--------------
function formataData(data){
    let dataFormatar = new Date(data + 'T00:00:00');
    return dataFormatar.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
}