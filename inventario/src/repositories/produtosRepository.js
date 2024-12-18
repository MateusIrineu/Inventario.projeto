/**
* Funções para manipulação dos dados de produtos.
* - getProdutos: Retorna todos os produtos cadastrados.
* - addProduto: Adiciona um novo produto ao banco de dados.
* - findProduto: Busca um produto pelo ID.
* - atualizarQuantidade: Atualiza a quantidade de um produto existente.
* - removerProduto: Remove um produto pelo ID.
*/

const produtosRepository = {
    
    /**
     * Retorna todos os produtos no banco de dados.
     * @returns {Array} Lista de produtos.
     */
    findAll: () => database.produtos,

    /**
     * Busca um produto pelo ID.
     * @param {string} id - O ID do produto a ser buscado.
     * @returns {Object|undefined} O produto encontrado ou undefined se não encontrado.
     */
    findById: (id) => database.produtos.find(produto => produto.id === id),

    /**
     * Salva um novo produto no banco de dados.
     * @param {Object} produto - Objeto representando o produto.
     * @param {number} produto.id - ID do produto (obrigatório).
     * @param {string} [produto.nome] - Nome do produto.
     * @param {string} [produto.categoria] - Categoria do produto.
     * @param {number} [produto.quantidade] - Quantidade do produto.
     * @param {number} [produto.preco] - Preço do produto.
     * @returns {Object} - O produto salvo.
     */
    save: (produto) => {
        const isProductExists = produtosRepository.findById(produto.id)
        if (isProductExists) {
            Object.assign(isProductExists, produto);
            return isProductExists;
        } else {
            database.produtos.push(produto);
            return produto;
        }
    },

    /**
     * Remove um produto do banco de dados pelo ID.
     * @param {string} id - O ID do produto a ser removido.
     */
    remove: (id) => {
        const index = database.produtos.findIndex(produto => produto.id === id);
        if (index !== -1) {
            database.produtos.splice(index, 1);
        } else {
            throw new Error(`Produto com ID ${id} não encontrado.`);
        }
    }
};

export default produtosRepository;