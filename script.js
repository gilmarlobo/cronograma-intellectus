// Aqui você vai copiar as linhas da sua tabela do Excel
const planosDeAula = [
    {
        aula: "01",
        data: "17/01/2026",
        tema: "Introdução ao Curso de Informática",
        // O cronograma substitui o texto simples de conteúdo
        cronograma: [
            { horario: "00:00 - 10:00", atividade: "Boas-vindas e apresentação do curso" },
            { horario: "10:00 - 20:00", atividade: "Um pouco da história dos computadores" },
            { horario: "20:00 - 50:00", atividade: "Exercicios de digitação" },
            { horario: "50:00 - 55:00", atividade: "Pausa para intervalo" },
            { horario: "55:00 - 80:00", atividade: "Exercicios com o mouse no Paint" },
            { horario: "80:00 - 90:00", atividade: "Dinâmica - quebra gelo!" }
        ],
        pratica: "Digitação na plataforma typeclub e desenho simples no Paint."
    },
            {
            "aula": "02",
            "data": "24/01/2026",
            "tema": "Área de Trabalho e Manipulação de Arquivos no Windows",
            "cronograma": [
                { "horario": "00:00 - 15:00", "atividade": "Área de Trabalho, pastas e ícones" },
                { "horario": "15:00 - 45:00", "atividade": "Aprendendo a utilizar a pontuação e acentuação com um ditado" },
                { "horario": "45:00 - 50:00", "atividade": "Intervalo" },
                { "horario": "50:00 - 65:00", "atividade": "Recortar, copiar, colar e renomear arquivos" },
                { "horario": "65:00 - 85:00", "atividade": "Atividade" },
                { "horario": "85:00 - 90:00", "atividade": "Considerações finais da aula" }
            ],
            "pratica": "Manipulação de arquivos e atividade prática relacionada ao conteúdo apresentado."
        }

    // Adicione as outras linhas do seu Excel seguindo esse padrão
];

const listaContainer = document.getElementById('lista-aulas');
const modal = document.getElementById('modal-aula');
const detalheAula = document.getElementById('detalhe-aula');
const closeBtn = document.querySelector('.close-button');

// Renderiza os cards na tela principal
planosDeAula.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card-aula';
    card.innerHTML = `
        <span class="badge-aula">Aula ${item.aula}</span>
        <h3>${item.tema}</h3>
        <p>📅 Data: ${item.data}</p>
    `;
    card.onclick = () => abrirModal(item);
    listaContainer.appendChild(card);
});

function abrirModal(item) {
    // Criamos as linhas da tabela de cronograma
    const linhasCronograma = item.cronograma.map(c => `
        <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">${c.horario}</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${c.atividade}</td>
        </tr>
    `).join('');

    detalheAula.innerHTML = `
        <div class="modal-header">
            <h2>Aula ${item.aula}: ${item.tema}</h2>
            <span class="data-badge">📅 Data: ${item.data}</span>
        </div>
        <div class="modal-body">
          <section>
                        <h4><span class="icon">⏰</span> Cronograma Detalhado</h4>
                        <div style="overflow-x: auto;"> <table style="width: 100%; border-collapse: collapse; min-width: 400px;">
                                <thead>
                                    <tr style="background: #eee; text-align: left;">
                                        <th style="padding: 12px 8px;">Horário</th>
                                        <th style="padding: 12px 8px;">Atividade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${linhasCronograma}
                                </tbody>
                            </table>
                        </div>
                    </section>
                 <section>
                <h4><span class="icon">💻</span> Atividades Práticas</h4>
                <p>${item.pratica}</p>
            </section>
        </div>
    `;
    modal.style.display = "block";
}

// Fechar modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}