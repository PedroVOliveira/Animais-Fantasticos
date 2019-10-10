function initTabNav(){
// Seleção dos elementos
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabcontent = document.querySelectorAll('.js-tabcontent section');
// Verifica se o ambos os elementos possui o mesmo valor para ativar os efeitos//
if(tabMenu.length && tabcontent.length){
tabcontent[0].classList.add('ativo');
// Função que ativa a navegação por tabs //
function activeTab(index){
    tabcontent.forEach((section)=>{
        // remove a classe ativo dos itens
        section.classList.remove('ativo');
    });
    //Adiciona a classe ativo no item desejado//
    tabcontent[index].classList.add('ativo');
}
// Nesse caso é necessário criar a função de callback devido a um possivel erro.
tabMenu.forEach((itemMenu,index)=>{
    itemMenu.addEventListener('click', ()=>{
        activeTab(index);
    });
})
}
}
initTabNav();
//Isolar o codigo em funções para facilitar a visualização
// função init
function initAccordion(){
//selecionando os elementos
const accordionList = document.querySelectorAll('.js-accordion dt');
//Deixa o primeiro item da lista ativo
accordionList[0].classList.add('ativo');
accordionList[0].nextElementSibling.classList.add('ativo');
//funcionalidade de ativar e desativar os FAQS
function activeAccordion(){
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
}

//Evento. Ao clicar ativa o faq referente ao item clicado
accordionList.forEach((item)=>{
    item.addEventListener('click',activeAccordion);
})
}

//Invocação da função acima
initAccordion();
//Animação ao scroll//
//seleções das seções animadas //
const sections = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight * 0.6;
//função que ativa as animações
function animaScroll(){
    sections.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top;
        //essa variavél pega metade do top e faz lógica do scroll
        const isVisibleSection = (sectionTop - windowMetade) <0;
        //verifica se é true//
        if(isVisibleSection){
            //adiciona a classe animada//
            section.classList.add('ativo');
        }
    })

}
animaScroll();
window.addEventListener('scroll',animaScroll);

//nav animate //
/*Esse código é para animação do menu 
const menuSection = document.querySelector('.menu');
console.log(menuSection);
function menuScroll(){
    const windowTop = window.pageYOffset;
    if((windowTop)> menuSection.offsetHeight){
        menuSection.classList.add('roll');
    }
    else{
        menuSection.classList.remove('roll');
    }
    console.log(menuSection.offsetHeight);
}


 window.addEventListener('scroll',menuScroll);

*/