# Sistema de Controle de Atendimento

Este é um sistema de controle de atendimento que permite gerenciar uma fila de pessoas aguardando atendimento. Ele foi desenvolvido em HTML, CSS e JavaScript, e utiliza uma fila circular para organizar os atendimentos.

## Funcionalidades

- Adicionar pessoas à fila de atendimento, informando nome e CPF.
- Remover a primeira pessoa da fila quando for atendida.
- Buscar por um CPF na fila para verificar a posição da pessoa.
- Exibir a lista de pessoas na fila, mostrando nome, data e hora de entrada.
- Calcular o tempo de espera de cada pessoa na fila.

## Como Usar

1. Clone ou baixe este repositório para sua máquina local.
2. Abra o arquivo `index.html` em seu navegador da web.
3. Na interface do sistema, preencha o nome e CPF da pessoa que deseja adicionar à fila e clique em "Adicionar à fila".
4. Para atender a próxima pessoa da fila, clique em "Atender".
5. Para buscar por um CPF na fila, insira o CPF no campo de busca e clique em "Buscar".

## Pré-requisitos

- Um navegador da web atualizado (recomendado: Google Chrome, Mozilla Firefox, Safari).
- Conexão com a internet (para carregar bibliotecas externas, como Bootstrap e Font Awesome).

## Estrutura de Arquivos

- `index.html`: Arquivo HTML principal que contém a estrutura da página e os elementos interativos.
- `style.css`: Arquivo CSS para estilizar a página e os elementos HTML.
- `atendimento.js`: Arquivo JavaScript que define a classe `Atendimento` para representar os atendimentos.
- `FilaCircular.js`: Arquivo JavaScript que define a classe `FilaCircular` para gerenciar a fila de atendimentos.
- `README.md`: Este arquivo que contém informações sobre o projeto.
