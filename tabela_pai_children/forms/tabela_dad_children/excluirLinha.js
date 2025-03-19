function excluirLinha(elemento) {
  fnWdkRemoveChild(elemento);
}

// Funçãp Padrão TOTVS que exluir o filho da tabela atráves do icone da lixeira atráves do onclick

function addLinha() {
  wdkAddChild("lixeira");
  console.log("Linha +newId+ adicionada");
}
// Função Padrão TOTVS add nova linha atráves do onclick

// Para realizar a personalização do Layout da tabela padrão PaiXFilho, Foi necessário adicionar as atribuiçoes nodeletebutton=true, que ativa a função de delete onde é adicionada, e noaddbutton=true que adiciona uma linha aonde é adicionado.
// Foi necessário excluir a lixeira anterior e adiconar uma nova com o "icon" em uma nova posição, e adicionar um novo "icon" somente para adicionar uma nova linha.
//Para excluir foi feito um script de excluir e adiconar linha com padrões Fluig TOTVS
