/*
Quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

Para isso vamos precisar trabalhar com dois elementos
1- listagem
2- cartão do pokémon
*/

// Precisamos criar duas variáveis no JS para trabalhar com os elementos na tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

// Trabalhar com o evento do click feito pelo usuário na listagem de pokémons
listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        // remover a classe aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        // ao clicar em um pokémon da listagem pegamos o id para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = (document.getElementById(idDoCartaoPokemonParaAbrir))
        cartaoPokemonParaAbrir.classList.add('aberto')

        // remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // adicionar a classe ativo no item da lista selecionado
        const PokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        PokemonSelecionadoNaListagem.classList.add('ativo')

    })
})


