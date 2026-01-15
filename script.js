// ========================
// Dados iniciais do jogo
// ========================

const personagens = [
    {
        nome: "Zeus",
        classe: "Bárbaro",
        subclasse: ["Rúnico", "Sacrificial"],
        PV: 200,
        PE: 100,
        Defesa: 50,
        habilidades: ["Runa de Proteção", "Golpe de Sangue", "Fúria Inicial", "Reflexo Selvagem"],
    },
    {
        nome: "Poseidon",
        classe: "Amante dos Mares",
        subclasse: ["Pirata", "Marinheiro"],
        PV: 150,
        PE: 200,
        Defesa: 40,
        habilidades: ["Tiro de Canhão", "Navegação Experiente", "Lança de Âncora", "Defesa de Tripulação"],
    },
    {
        nome: "Hefesto",
        classe: "Forjador",
        subclasse: ["Ferreiro", "Construtor"],
        PV: 180,
        PE: 120,
        Defesa: 80,
        habilidades: ["Martelo Preciso", "Estrutura Básica", "Olhar Técnico", "Golpe Direcionado"],
    }
];

const inventario = [
    { nome: "Espada de Bronze", tipo: "Arma" },
    { nome: "Poção de Cura", tipo: "Consumível" },
    { nome: "Armadura de Couro", tipo: "Equipamento" }
];

// ========================
// Funções de exibição
// ========================

function mostrarPersonagens() {
    const lista = document.getElementById("lista-personagens");
    lista.innerHTML = "";

    personagens.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("personagem");

        div.innerHTML = `
            <h3>${p.nome}</h3>
            <p><strong>Classe:</strong> ${p.classe}</p>
            <p><strong>Subclasses:</strong> ${p.subclasse.join(", ")}</p>
            <p><strong>PV:</strong> ${p.PV}</p>
            <p><strong>PE:</strong> ${p.PE}</p>
            <p><strong>Defesa:</strong> ${p.Defesa}</p>
            <p><strong>Habilidades:</strong> ${p.habilidades.join(", ")}</p>
        `;

        lista.appendChild(div);
    });
}

function mostrarInventario() {
    const lista = document.getElementById("itens");
    lista.innerHTML = "";

    inventario.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("item");

        div.innerHTML = `
            <h3>${item.nome}</h3>
            <p><strong>Tipo:</strong> ${item.tipo}</p>
        `;

        lista.appendChild(div);
    });
}

// ========================
// Inicialização
// ========================

document.addEventListener("DOMContentLoaded", () => {
    mostrarPersonagens();
    mostrarInventario();
});
// ===== IMAGEM DO PERSONAGEM =====
const inputImagem = document.getElementById("imagemPersonagem");
const imagemMostrada = document.getElementById("imagemMostrada");

inputImagem.addEventListener("change", function(event) {
  const arquivo = event.target.files[0];
  if (arquivo) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imagemMostrada.src = e.target.result; // Mostra a imagem
    };
    reader.readAsDataURL(arquivo);
  }
});
