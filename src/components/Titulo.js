// Inclusão da lib React obrigatório em todo componente
// Similar:
// let React = require('react')
import React from 'react'

/** 
 * Função do componente, responsável por retornar o HTML para o elemento que solicitou.
*/
function Titulo() {
    // Retorno do HTML usa o formato JSX
    return <p>
                Eu sou um componente!
            </p>
}

// Exporta a o valor "Titulo" para ser importado
export default Titulo