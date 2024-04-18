 // Crie uma instância da fila
 let minhaFila = new FilaCircular(5);

 // Função para adicionar um elemento à fila
 function adicionarElemento() {
  const nome = document.getElementById("txtnovoNome").value;
  const cpf = document.getElementById("txtnovoCpf").value;

  if (nome.length < 3) {
    alert("O nome deve ter pelo menos 3 caracteres.");
    return;
  }

  if (!nome) {
      alert("Por favor, preencha o nome.");
      return;
  }

  if (!cpf) {
      alert("Por favor, preencha o CPF.");
      return;
  }

  const data = obterDataAtual();
  const hora = obterHoraAtual();

  console.log("Nome:", nome);
  console.log("CPF:", cpf);
  console.log("Data:", data);
  console.log("Hora:", hora);

  document.getElementById("txtnovoNome").value = "";
  document.getElementById("txtnovoCpf").value = "";

  const novoAtendimento = new Atendimento(nome, cpf, data, hora);
  if (minhaFila.enqueue(novoAtendimento)) {
      console.log("Elemento adicionado à fila com sucesso!");
      atualizarFila();
  } else {
      console.log("A fila está cheia!");
  }
}
//--------------------------------------------------------------------------------------------
// Função para remover o primeiro elemento da fila
function removerElemento() {
    if (!minhaFila.isEmpty()) {
        const pessoaAtendida = minhaFila.dequeue(); // Remove o primeiro da fila
        const horaSaida = obterHoraAtual(); // Obtém a hora atual
        const tempoNaFila = calcularDiferencaHoras(pessoaAtendida.hora, horaSaida);
        mostrarMensagemRemocao(pessoaAtendida, horaSaida, tempoNaFila);
        
        // Atualiza a exibição da fila após a remoção
        atualizarFila();
        
        // Verifica se a fila está vazia após a remoção
        if (minhaFila.isEmpty()) {
            document.getElementById("lblPessoasFila").textContent = "Fila vazia!";
        }
    } else {
        console.log("A fila está vazia!");
        // Exibe um aviso pop-up apenas se o botão "Atender" for clicado e a fila estiver vazia
        alert("A fila está vazia!");
    }
}
 //--------------------------------------------------------------------------------
 function buscarCpf() {
  const cpfBuscar = document.getElementById("txtnovoCpf").value;
  if (minhaFila.elementos && minhaFila.elementos.length > 0) {
      const pessoa = minhaFila.elementos.find(atendimento => atendimento && atendimento.cpf === cpfBuscar);
      if (pessoa) {
          const posicao = minhaFila.elementos.indexOf(pessoa) + 1; // Posição baseada em 1
          console.log(`CPF encontrado na fila! Posição: ${posicao}`);
          alert(`CPF encontrado na fila! Posição: ${posicao}`);
      } else {
          console.log("CPF não encontrado na fila!");
          alert("CPF não encontrado na fila!");
      }
  } else {
      console.log("A fila está vazia!");
      alert("A fila está vazia!");
  }

  document.getElementById("txtnovoCpf").value = "";
}
//--------------------------------------------------------------------------------------------
function mostrarMensagemRemocao(pessoaAtendida, horaSaida, tempoNaFila) {
  const mensagem = `Chamando para ser atendido(a): ${pessoaAtendida.nome}, chegou às ${pessoaAtendida.hora} está sendo atendido(a) às ${horaSaida}. Tempo de espera: ${tempoNaFila}`;
  const mensagemRemocao = document.getElementById("mensagem-remocao");
  mensagemRemocao.textContent = mensagem;
  mensagemRemocao.style.display = "block"; // Exibir a barra de mensagens
}
//--------------------------------------------------------------------------------------------
 // Função para atualizar a exibição da fila
function atualizarFila() {
  const listaFila = document.getElementById("listFila");
  listaFila.innerHTML = ""; // Limpa a lista de "Pessoas na fila"

  // Verifica se a fila não está vazia
  if (!minhaFila.isEmpty()) {
      document.getElementById("lblPessoasFila").textContent = "Pessoas na fila:";
      
      // Percorre os elementos da fila
      minhaFila.elementos.forEach(atendimento => {
          if (atendimento) { // Verifica se o atendimento é válido
              const li = document.createElement("li");
              li.textContent = `Nome: ${atendimento.nome} - Data: ${atendimento.data} - Hora: ${atendimento.hora}`;
              listaFila.appendChild(li); // Adiciona a pessoa à lista
          }
      });
  } else {
      // Se a fila estiver vazia, atualiza o texto correspondente
      document.getElementById("lblPessoasFila").textContent = "Fila vazia!";
  }
}

//--------------------------------------------------------------------------------------------
 // funcao data
 function obterDataAtual() {
    let dataAtual = new Date();
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1; // Adiciona 1 porque o mês inicia do zero
    let ano = dataAtual.getFullYear();
    // Formata a data como "dd/mm/aaaa"
    let dataFormatada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;
    return dataFormatada;
}
//--------------------------------------------------------------------------------------------
function obterHoraAtual() {
  const data = new Date();
  const hora = data.getHours().toString().padStart(2, '0');
  const minuto = data.getMinutes().toString().padStart(2, '0');
  const segundo = data.getSeconds().toString().padStart(2, '0');
  return `${hora}:${minuto}:${segundo}`;
}
//--------------------------------------------------------------------------------------------
function calcularDiferencaHoras(hora1, hora2) {
  const [h1, m1, s1] = hora1.split(':').map(Number);
  const [h2, m2, s2] = hora2.split(':').map(Number);
  
  const diferencaSegundos = (h2 * 3600 + m2 * 60 + s2) - (h1 * 3600 + m1 * 60 + s1);
  
  const horas = Math.floor(diferencaSegundos / 3600);
  const minutos = Math.floor((diferencaSegundos % 3600) / 60);
  const segundos = diferencaSegundos % 60;
  
  return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}
//--------------------------------------------------------------------------------------------