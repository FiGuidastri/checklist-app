// Aguarda o documento HTML ser completamente carregado antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // Adiciona o evento de clique para TODOS os botões de localização
    const locationButtons = document.querySelectorAll('.location-btn');
    locationButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetInputId = button.getAttribute('data-target');
            const targetInput = document.getElementById(targetInputId);
            getLocation(targetInput);
        });
    });

    // Função para obter a localização do GPS
    function getLocation(inputElement) {
        if (navigator.geolocation) {
            inputElement.value = "Obtendo...";
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    const mapsLink = `https://www.google.com/maps?q=${lat},${lon}`;
                    inputElement.value = mapsLink;
                },
                (error) => {
                    inputElement.value = "Erro ao obter localização.";
                    alert("Não foi possível obter a localização. Verifique as permissões do navegador.");
                }
            );
        } else {
            alert("Geolocalização não é suportada por este navegador.");
        }
    }

    // Lida com o envio do formulário
    const form = document.getElementById('checklist-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede que a página recarregue

        // Captura os valores de todos os campos
        const reportData = {
            nomeCliente: document.getElementById('nome-cliente').value,
            enderecoCliente: document.getElementById('endereco-cliente').value,
            localizacaoCliente: document.getElementById('localizacao-cliente').value,
            localizacaoCto: document.getElementById('localizacao-cto').value,
            corFibra: document.getElementById('cor-fibra').value,
            possuiSplitter: document.getElementById('possui-splitter').value,
            portaUtilizada: document.getElementById('porta-utilizada').value,
            localizacaoCasa: document.getElementById('localizacao-casa').value,
            nomeWifi: document.getElementById('nome-wifi').value,
            senhaWifi: document.getElementById('senha-wifi').value,
            testeNavegacao: document.getElementById('teste-navegacao').value,
            clienteCiente: document.getElementById('cliente-ciente').value,
        };

        // Formata o relatório final
        const reportText = `
📋 *CHECKLIST DE INSTALAÇÃO/REPARO*

*🧍‍♂️ 1️⃣ DADOS DO CLIENTE*
*👤 Nome completo:* ${reportData.nomeCliente}
*🏠 Rua e número:* ${reportData.enderecoCliente}
*📍 Localização:* ${reportData.localizacaoCliente}

*🧵 2️⃣ CTO / REDE EXTERNA*
*📍 Localização da CTO:* ${reportData.localizacaoCto}
*📸 Foto da CTO:* (Enviada separadamente)
*🎨 Cor da fibra:* ${reportData.corFibra}
*🔀 Possui splitter?* ${reportData.possuiSplitter}
*🔌 Número da porta utilizada:* ${reportData.portaUtilizada}

*🏡 3️⃣ CASA DO CLIENTE*
*📍 Localização da casa:* ${reportData.localizacaoCasa}
*🏘 Foto da frente da casa:* (Enviada separadamente)

*📶 4️⃣ INSTALAÇÃO INTERNA*
*🧰 Foto da instalação:* (Enviada separadamente)
*🏷 Foto do MAC:* (Enviada separadamente)
*💡 Nome do Wi-Fi:* ${reportData.nomeWifi}
*🔑 Senha do Wi-Fi:* ${reportData.senhaWifi}

*✅ 5️⃣ FINALIZAÇÃO*
*🌐 Teste de navegação com sucesso?* ${reportData.testeNavegacao}
*📞 Cliente ciente e satisfeito?* ${reportData.clienteCiente}
        `;

        // Mostra o resultado
        const resultContainer = document.getElementById('result-container');
        const reportOutput = document.getElementById('report-output');
        reportOutput.value = reportText.trim();
        resultContainer.classList.remove('hidden');
    });
    
    // Funcionalidade do botão de copiar
    const copyButton = document.getElementById('copy-btn');
    copyButton.addEventListener('click', () => {
        const reportOutput = document.getElementById('report-output');
        reportOutput.select(); // Seleciona o texto
        document.execCommand('copy'); // Copia para a área de transferência
        alert('Relatório copiado para a área de transferência!');
    });
});