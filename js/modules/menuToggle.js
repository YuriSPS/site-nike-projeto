export default function initMenuToggle() {
    const btnMenuToggle = document.querySelector('.menu-toggle');
    const menuToggleList = document.querySelector('.menu-toggle-list');
    const btnClose = document.querySelector('.btnClose');

    btnMenuToggle.addEventListener('click', handleClick);

    function handleClick(event) {
        event.preventDefault(); //comando para evitar de direcionar para alguma página, basicamente evitando uma função padrão
        menuToggleList.classList.add('active');
        
    }

    btnClose.addEventListener('click', () => {
        menuToggleList.classList.remove('active');
    });
}