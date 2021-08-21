export default function initChangeNikeMain() {
    // selecionando as váriaveis que irão receber os eventos e que sofrerão possíveis alterações
    const nikeListShoes = document.querySelectorAll('.nikeshoes-list li');
    const nikeMain = document.querySelector('.nike-main');

    function handleClickChangeNike() {
        // recuperando o valor do atributo class de cada elemento percorrido pelo forEach
        const classNikeShoes = this.getAttribute('class');

        // Adicionando uma condição
        if(classNikeShoes == 'bg-violet') {
            nikeMain.setAttribute('src', `assets/nike-b.png`);
        } 
        else if(classNikeShoes == 'bg-green-clean') {
            nikeMain.setAttribute('src', `assets/nike-s.png`);
        }
        else if(classNikeShoes == 'bg-red-clean') {
            nikeMain.setAttribute('src', `assets/nike.png`);
        }
        else if(classNikeShoes == 'bg-green') {
            nikeMain.setAttribute('src', `assets/nike-g.png`)
        }
       
        
    }

    // percorrendo todo array-like do nikeListShoes e adicionando uma funções após clicar nos elementos selecionados
    nikeListShoes.forEach((item, index, array) => {
        item.addEventListener('click', handleClickChangeNike);
    });
}