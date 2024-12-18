import PromptSync from "prompt-sync";

import menuPrincipal from "..index.js";
import produtosController from "../controllers/produtosController.js";


const prompt = PromptSync();

/**
* Interface para interação com o usuário para gerenciamento de produtos.
* - Exibe o menu de opções.
* - Recebe dados do usuário para listar, cadastrar, atualizar ou remover
produtos.
*/

const addProdutos = () => {
    console.clear();

    console.log("Cadastrar Produtos.");
    const id = prompt("ID: ");
    const nome = prompt("Nome: ");
    const categoria = prompt("Categoria: ");
    const quantidade = prompt("quantidade: ");
    const preco = prompt("Preço: ");
    produtosController.save({id, nome, categoria, quantidade, preco});

    console.log("Produto cadastrado com sucesso!");

    console.log("Pressione ENTER para continuar.");

    produtosView();
}

/**
 * Edita os dados de um produto existente.
 * Busca o produto pelo ID e permite alterar a quantidade.
 * Mantém os valores atuais caso o usuário pressione Enter sem digitar nada.
 */
const atualizarProduto = () => {
    console.clear();

    console.log("Atualizar quantidade");

    const id = prompt("ID: ");
    const produto = produtosController.findById(id);
    if (produto) {
        console.log(`Nome: ${produto.nome}`);
        console.log(`Quantidade: ${produto.quantidade}`);
     
        console.log(`Nome: ${produto.nome}`);
        const quantidade = prompt("Nova quantidade: ") || produto.quantidade;
      
        const productUpdate = { quantidade };
        produtosController.save(productUpdate);
      
        console.log("Produto editado com sucesso!")

    } else {

        console.log("Produto não encontrado!");

    }
    prompt("Pressione Enter para continuar...");
    produtosView();
};

/**
 * Lista todos os produtos cadastrados no sistema.
 * Exibe as informações de cada usuário (ID, nome e categoria).
 */
const listarProdutos = () => {
    console.clear();

    console.log("Todos os produtos");

    produtosController.findAll().forEach(produto => {
        console.log(`ID: ${produto.id}`);
        console.log(`Nome: ${produto.nome}`);
        console.log(`Categoria: ${produto.categoria}`);
    
    });
    prompt("Pressione Enter para continuar...");
    produtosView();
};

const removerProduto = () => {
    console.clear();

    console.log("Excluir produto");

    const id = prompt("ID: ");
    const produto= produtosController.findById(id);
    if (produto) {
        console.log(`Nome: ${produto.nome}`);

        const confirmacao = prompt("Deseja realmente excluir? (s/n): ");
        if (confirmacao === "s") {
            produtosController.remove(id);
        
            console.log("Usuário excluído com sucesso!");
        }
    } else {
        console.log("Usuário não encontrado!");
    }
    prompt("Pressione Enter para continuar...");
    produtosView();
};

const produtosView = () => {
    console.clear();

    console.log("Menu Usuários");

    console.log("1 - listar produtos");
    console.log("2 - Cadastrar produtos");
    console.log("3 - Atualizar produto");
    console.log("4 - Remover produto");
    console.log("5 - Buscar usuário por CPF");
    console.log("0 - Retornar ao menu principal");

    const opcao = prompt("Digite a opção desejada: ");
    switch (opcao) {
        case "0":
            menuPrincipal();
            break;
        case "1":
            listarProdutos();
            break;
        case "2":
            addProdutos();
            break;
        case "3":
            atualizarProduto();
            break;
        case "4":
            removerProduto();
            break;
        default:
            produtosView();
    }
};

// Exporta a visualização de usuário
export default produtosView;
