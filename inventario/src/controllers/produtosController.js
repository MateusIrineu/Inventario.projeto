/**
* Funções de lógica de negócio para produtos.
* - listarProdutos: Retorna todos os produtos.
* - cadastrarProduto: Valida e adiciona um novo produto.
* - atualizarProduto: Valida e atualiza a quantidade de um produto
existente.
* - removerProduto: Valida e remove um produto.
*/

const produtosController = {

    /**
     * Salva ou atualiza um produto.
     * 
     * @param {Object} produto - Objeto representando o produto.
     * @param {number} produto.id - ID do produto (obrigatório).
     * @param {string} [produto.nome] - Nome do produto.
     * @param {string} [produto.categoria] - Categoria do produto.
     * @param {number} [produto.quantidade] - Quantidade do produto.
     * @param {number} [produto.preco] - Preço do produto.
     * @returns {void}
     */
    save: (produto) => produtosRepository.save(produto),

    /**
     * Remove um produto pelo ID.
     * 
     * @param {number} id - ID do produto a ser removido.
     * @returns {void}
     */
    remove: (id) => produtosRepository.remove(id),

    /**
     * Retorna uma lista com todos os usuários.
     * 
     * @returns {Array<Object>} - Lista de usuários cadastrados.
     */
    findAll: () => produtosRepository.findAll(),

    /**
     * Busca um usuário pelo CPF.
     * 
     * @param {string} id - CPF do usuário a ser buscado.
     * @returns {Object|null} - Objeto do usuário encontrado ou null se não existir.
     */
    findById: (id) => produtosRepository.findById(id)

}

export default produtosController;