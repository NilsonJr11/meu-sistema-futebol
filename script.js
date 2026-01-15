// Coloque isso logo na primeira linha do seu script.js
const fotoPadrao = 'https://placehold.co/150x150?text=Sem+Foto';

// 2. Função para desenhar o mural na tela
function renderizarMural() {
    alert("O código do mural tentou rodar!"); // Adicione esta linha
    const mural = document.getElementById('muralPeneiras');
    mural.innerHTML = ''; // Limpa antes de carregar

    listaPeneiras.forEach(peneira => {
        mural.innerHTML += `
            <div class="card-peneira">
                <span class="clube-nome">⚽ ${peneira.clube}</span>
                <div class="peneira-info">
                    <b>📍 Local:</b> ${peneira.local}<br>
                    <b>📅 Data:</b> ${peneira.data}<br>
                    <b>🏃 Categoria:</b> ${peneira.categoria}
                </div>
                <div class="status-${peneira.status === 'Aberto' ? 'aberto' : 'fechado'}">
                    ● ${peneira.status}
                </div>
                <button class="btn-inscrever" onclick="window.open('${peneira.link}', '_blank')">
                    VER DETALHES NO SITE
                </button>
            </div>
        `;
    });
}

renderizarMural();

const listaPeneiras = [
    { 
        clube: "Santos FC", 
        categoria: "Sub-15 (2009/2010)", 
        data: "15/02/2026", 
        local: "CT Rei Pelé", 
        status: "Inscrições Abertas",
        requisitos: "RG original, Atestado Médico (últimos 3 meses), Material de treino próprio.",
        contato: "https://wa.me/5513999999999" // Link fictício de WhatsApp
    },
    { 
        clube: "CR Flamengo", 
        categoria: "Sub-17 (2007/2008)", 
        data: "20/03/2026", 
        local: "Ninho do Urubu - RJ", 
        status: "Vagas Limitadas",
        requisitos: "Ficha de inscrição preenchida, Eletrocardiograma com laudo.",
        contato: "https://www.flamengo.com.br"
    },
    { 
        clube: "Palmeiras", 
        categoria: "Sub-11 ao Sub-13", 
        data: "Abril/2026", 
        local: "Academia de Futebol", 
        status: "Em Breve",
        requisitos: "Monitorar o site oficial para abertura do formulário.",
        contato: "https://www.palmeiras.com.br"
    }
];

function renderizarMural() {
    const mural = document.getElementById('muralPeneiras');
    if(!mural) return;
    
    mural.innerHTML = '';
    // Estilo de grid direto no JS para garantir o layout
    mural.style.display = "grid";
    mural.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
    mural.style.gap = "20px";

    listaPeneiras.forEach(p => {
        const corStatus = p.status === 'Inscrições Abertas' ? '#2e7d32' : '#ffa000';
        
        mural.innerHTML += `
            <div style="background: white; border-top: 5px solid #1976d2; padding: 15px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); position: relative;">
                <strong style="font-size: 1.2em; color: #0d47a1;">⚽ ${p.clube}</strong>
                <div style="font-size: 0.85em; margin: 10px 0; color: #333;">
                    <p>📅 <b>Data:</b> ${p.data}</p>
                    <p>📍 <b>Local:</b> ${p.local}</p>
                    <p>🏃 <b>Categoria:</b> ${p.categoria}</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 10px 0;">
                    <p style="color: #666; font-style: italic;">📋 <b>Requisitos:</b> ${p.requisitos}</p>
                </div>
                
                <div style="color: ${corStatus}; font-weight: bold; font-size: 0.9em; margin-bottom: 10px;">
                    ● ${p.status}
                </div>

                <button onclick="window.open('${p.contato}', '_blank')" 
                    style="width: 100%; background: #1976d2; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer; font-weight: bold; transition: 0.3s;"
                    onmouseover="this.style.background='#0d47a1'" 
                    onmouseout="this.style.background='#1976d2'">
                    SABER MAIS / INSCREVER
                </button>
            </div>
        `;
    });
}

renderizarMural();

function atualizarDashboard() {
    document.getElementById('countTotal').innerText = atletas.length;
    document.getElementById('countBase').innerText = atletas.filter(a => a.categoria.includes('Sub')).length;
    
    // NOVIDADE: Qual a região com mais atletas?
    const regioes = atletas.map(a => a.regiao);
    const principalRegiao = regioes.sort((a,b) =>
          regioes.filter(v => v===a).length - regioes.filter(v => v===b).length
    ).pop() || "Nenhuma";

    document.getElementById('countPro').innerText = principalRegiao; 
    // Você pode mudar o texto do "Profissional" para "Principal Origem" no HTML
}


// 3. Chame a função no final do seu script para ela rodar assim que abrir o site
renderizarMural();

function renderizarMural() {
    // 1º: Primeiro você define QUEM é o mural (A CHAVE)
    const mural = document.getElementById('muralPeneiras');

    // 2º: Depois você manda limpar ou escrever nele (A PORTA)
    mural.innerHTML = ''; 

    const peneirasExemplo = [
        // ... seu array de peneiras ...
    { clube: "Santos FC", categoria: "Sub-15", data: "15/02/2026", local: "CT Rei Pelé", status: "Inscrições Abertas" },
    { clube: "CR Flamengo", categoria: "Sub-17", data: "20/03/2026", local: "Ninho do Urubu", status: "Vagas Limitadas" },
    { clube: "Palmeiras", categoria: "Sub-13", data: "10/02/2026", local: "Academia de Futebol", status: "Em Breve" }
];

    peneirasExemplo.forEach(p => {
        mural.innerHTML += `
            <div style="background: #e3f2fd; border-left: 5px solid #1976d2; padding: 15px; border-radius: 5px; box-shadow: 2px 2px 5px rgba(0,0,0,0.1);">
                <strong style="color: #0d47a1;">${p.clube}</strong><br>
                <small><b>Categoria:</b> ${p.categoria}</small><br>
                <small><b>Data:</b> ${p.data}</small><br>
                <div style="margin-top: 10px; font-weight: bold; font-size: 12px; color: ${p.status === 'Inscrições Abertas' ? 'green' : 'orange'}">
                    ● ${p.status}
                </div>
                <button onclick="alert('Inscrição enviada para o clube!')" style="margin-top:10px; padding: 5px; font-size: 10px; background: #1976d2; color: white; border: none; border-radius: 3px; cursor: pointer;">Candidatar Jogador</button>
            </div>
        `;
    });
}

// Chame essa função no final do seu script
renderizarMural();

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
    listaAtletasDiv.innerHTML = ''; // Limpa a lista

    if (atletasCadastrados.length === 0) {
        listaAtletasDiv.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:white;">Nenhum atleta na base.</p>';
        return;
    }

    atletasCadastrados.forEach((atleta, index) => {
        // Resolvemos a foto antes de criar o HTML
        const fotoParaExibir = atleta.foto || fotoPadrao;

        // Criamos um ÚNICO card limpo
        const cardHTML = `
            <div class="card-atleta">
                <span class="categoria-badge">${atleta.categoria}</span>
                <img src="${fotoParaExibir}" class="foto-atleta" style="width:80px; height:80px; border-radius:50%; object-fit:cover; border:2px solid #2e7d32; margin-top:10px;">
                
                <h3 style="margin: 10px 0 5px 0;">${atleta.nome}</h3>
                <small>${atleta.posicao} | Perna: ${atleta.perna}</small>
                
                <div style="background: #f0f0f0; padding: 5px; border-radius: 5px; margin-top: 10px; font-size: 0.85em;">
                    <div style="color: #1976d2;">🎯 <b>Alvo:</b> ${atleta.clubeAlvo || 'Nenhum'}</div>
                    <div style="color: #666;">📍 <b>Origem:</b> ${atleta.regiao || 'Não informada'}</div>
                </div>

                <div class="acoes-card" style="margin-top:15px; display: flex; gap: 5px; justify-content: center;">
                    <button class="btn-mini" style="background:#ffa000; border:none; color:white; padding:5px; border-radius:3px; cursor:pointer;" onclick="iniciarEdicao(${index})">EDITAR</button>
                    <button class="btn-mini" style="background:#d32f2f; border:none; color:white; padding:5px; border-radius:3px; cursor:pointer;" onclick="removerAtleta(${index})">EXCLUIR</button>
                </div>
            </div>
        `;
        listaAtletasDiv.innerHTML += cardHTML;
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
    // Procure onde você cria o objeto e adicione a linha do clube:
    const novoAtleta = {
    nome: document.getElementById('nome').value,
    nascimento: document.getElementById('nascimento').value,
    posicao: document.getElementById('posicao').value,
    perna: document.getElementById('perna').value,
    regiao: document.getElementById('regiao').value, // <-- NOVA LINHA AQUI
    categoria: calcularCategoria(document.getElementById('nascimento').value),
    foto: fotoBase64
    };

    // Adiciona na lista
    atletasCadastrados.push({ nome, posicao, regiao, clubeAlvo });

    // Salva e atualiza a tela
    salvarNoNavegador();
    renderizarLista();

    form.reset();
    alert("Jogador " + nome + " salvo com sucesso!");
});

// Ache essa parte no seu script.js:
atletasCadastrados.forEach((atleta, index) => {
    const card = `
        <div class="card-atleta">
            <button class="btn-excluir" onclick="removerAtleta(${index})">Excluir</button>
            <button class="btn-editar" onclick="iniciarEdicao(${index})">Editar</button>
            <strong>${atleta.nome}</strong><br>
            <small>${atleta.categoria} | ${atleta.posicao} | ${atleta.perna}</small>
            
            <p style="font-size: 0.8em; color: #666; margin: 2px 0;">
                📍 Origem: ${atleta.regiao || "Não informada"}
            </p>
        </div>
    `;
    listaAtletasDiv.innerHTML += card;
});

// FUNÇÃO PARA EXPORTAR (BAIXAR ARQUIVO)
function exportarDados() {
    if (atletas.length === 0) {
        alert("Não há dados para exportar!");
        return;
    }

    const dataStr = JSON.stringify(atletas, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = url;
    link.download = "backup_atletas_base.json";
    link.click();
    
    URL.revokeObjectURL(url);
}

// FUNÇÃO PARA IMPORTAR (LER ARQUIVO)
function importarDados(event) {
    const arquivo = event.target.files[0];
    if (!arquivo) return;

    const leitor = new FileReader();
    leitor.onload = function(e) {
        try {
            const dadosImportados = JSON.parse(e.target.result);
            
            if (Array.isArray(dadosImportados)) {
                if (confirm(`Deseja importar ${dadosImportados.length} atletas? Isso substituirá a lista atual.`)) {
                    atletas = dadosImportados;
                    localStorage.setItem('baseAtletas', JSON.stringify(atletas));
                    renderizar();
                    alert("Dados importados com sucesso!");
                }
            } else {
                alert("O arquivo selecionado não é um backup válido.");
            }
        } catch (erro) {
            alert("Erro ao ler o arquivo de backup.");
        }
    };
    leitor.readAsText(arquivo);
}
// 6. Mostra os dados assim que a página abre
renderizarLista();
