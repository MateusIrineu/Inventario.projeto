import PromptSync from "prompt-sync";

const prompt = PromptSync();

const menuPrincipal = () => {
    console.clear();
  
    console.log("Sistema de Gerenciamento de Inventário");
   
    console.log("1 - Gerenciar Produtos");
    console.log("2 - Gerenciar Categorias");
    console.log("3 - Gerar Relatórios");
    console.log("0 - Sair");
  

    const opcao = prompt("Escolha a opção desejada: ");
    switch(opcao) {
        case "1":
            // gerenciarProdutos();
            // break;
        case "2":
            // gerenciarCategorias();
            // break;
        case "3":
            // gerarRelatorios();
            // break;
        case "0":
            process.exit();
    }
}

export default menuPrincipal;
menuPrincipal();