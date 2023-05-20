// Função para exibir o modal
function exibirModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
  }
  
  // Função para fechar o modal
  function fecharModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  
  // Evento de clique no botão "Enviar"
  document.getElementById("enviarBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    exibirModal(); // Exibe o modal
  });
  
  // Evento de clique no botão "Fechar"
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    fecharModal(); // Fecha o modal
  });
  