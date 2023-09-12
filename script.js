// script.js

// Função para alterar o conteúdo da página com base na guia selecionada
function changeTab(tab) {
    var conteudo = document.getElementById('conteudo');
    var tabInicio = document.getElementById('tab-inicio');
    var tabVideos = document.getElementById('tab-videos');
    var tabPlaylists = document.getElementById('tab-playlists');
    var tabCanais = document.getElementById('tab-canais');
    
    switch (tab) {
        case 'inicio':
            conteudo.innerHTML = `
                <h1>Página Inicial</h1>
                <p>Este é o conteúdo da página Inicial.</p>`;
            break;
        case 'videos':
            conteudo.innerHTML = `
                <h1>Vídeos</h1>
                <p>Aqui estão os vídeos do canal.</p>`;
            break;
        case 'playlists':
            conteudo.innerHTML = `
                <h1>Playlists</h1>
                <p>Confira nossas playlists.</p>`;
            break;
        case 'canais':
            conteudo.innerHTML = `
                <h1>Canais</h1>
                <p>Veja outros canais relacionados.</p>`;
            break;
    }

    // Remove a classe "active" de todos os links
    var links = document.querySelectorAll('#navbar a');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }

    // Adiciona a classe "active" ao link selecionado
    document.getElementById('tab-' + tab).classList.add('active');
}

// Defina a guia "Início" como ativa por padrão ao carregar a página
window.onload = function() {
    changeTab('inicio');
}
