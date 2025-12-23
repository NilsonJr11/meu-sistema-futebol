function atualizarDashboard() {
    const dash = document.getElementById('dashboard');
    const total = atletasCadastrados.length;
    const sub15 = atletasCadastrados.filter(a => a.categoria === 'Sub-15').length;
    const profissional = atletasCadastrados.filter(a => a.categoria === 'Profissional').length;

    dash.innerHTML = `
        <div class="stat-item">TOTAL <span>${total}</span></div>
        <div class="stat-item">SUB-15 <span>${sub15}</span></div>
        <div class="stat-item">PRO <span>${profissional}</span></div>
    `;
}

async function converterParaBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// 1. Tenta carregar os dados salvos logo de cara
let atletasCadastrados = JSON.parse(localStorage.getItem('meusAtletas')) || [];

const form = document.getElementById('formCadastro');
const listaAtletasDiv = document.getElementById('listaAtletas');

// 2. Função que salva no "banco" do navegador
function salvarNoNavegador() {
    localStorage.setItem('meusAtletas', JSON.stringify(atletasCadastrados));
}

function renderizarLista() {
    listaAtletasDiv.innerHTML = ''; // Limpa a lista antes de desenhar
    
    if (atletasCadastrados.length === 0) {
        listaAtletasDiv.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:white;">Nenhum atleta na base.</p>';
        return;
    }

    atletasCadastrados.forEach((atleta, index) => {
        const card = `
            <div class="card-atleta">
                const fotoSrc = atleta.foto || 'https://via.placeholder.com/80?text=Atleta';
                // ... dentro do template literal do card ...
                <img src="${fotoSrc}" style="width:80px; height:80px; border-radius:50%; object-fit:cover; border:2px solid #2e7d32; margin-bottom:10px;">
                <span class="categoria-badge">${atleta.categoria}</span>
                <strong>${atleta.nome}</strong>
                <small>${atleta.posicao}<br>Perna: ${atleta.perna}</small>
                
                <div class="acoes-card">
                    <button class="btn-mini" style="background:#ffa000" onclick="iniciarEdicao(${index})">EDITAR</button>
                    <button class="btn-mini" style="background:#d32f2f" onclick="removerAtleta(${index})">EXCLUIR</button>
                </div>
            </div>
        `;
        listaAtletasDiv.innerHTML += card;
    });
}

// 4. Função para excluir
window.removerAtleta = function(index) {
    if(confirm("Deseja excluir este atleta?")) {
        atletasCadastrados.splice(index, 1);
        salvarNoNavegador();
        renderizarLista();
    }
}

// 5. Evento de envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const posicao = document.getElementById('posicao').value;

    // Adiciona na lista
    atletasCadastrados.push({ nome, posicao });

    // Salva e atualiza a tela
    salvarNoNavegador();
    renderizarLista();
    
    form.reset();
    alert("Jogador " + nome + " salvo com sucesso!");
});

// 6. Mostra os dados assim que a página abre
renderizarLista();
