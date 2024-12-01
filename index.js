document.addEventListener('DOMContentLoaded', () => {
    const jogos = document.querySelectorAll('.jogo');
    
    jogos.forEach(jogo => {
        jogo.addEventListener('click', () => {
            alert(`Você selecionou o jogo: ${jogo.dataset.nome}`);
        });
    });
});