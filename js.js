document.getElementById('menu-toggle').addEventListener('click', function() {
    document.body.classList.toggle('menu-open');
});

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu-principal');
    var menuToggle = document.getElementById('menu-toggle');
    // Verifica se o clique não foi dentro do menu nem no botão de toggle
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        document.body.classList.remove('menu-open');
    }
});

$(document).ready(function() {
    // Função para fechar o menu quando clicar fora dele
    $(document).on('click', function(event) {
        // Verifica se o clique foi fora do menu
        var menu = $('#menu-principal');
        var menuIcon = $('#menu-toggle');
        var isClickInsideMenu = menu.is(event.target) || menuIcon.is(event.target);
        if (!isClickInsideMenu) {
            // Fecha o menu se o clique foi fora dele
            $('body').removeClass('menu-open');
        }
    });
})