import React from 'react'
// Estado
// O estado de uma aplicação representa as característica dela naquele momento.
// podendo controlar o que esta aparecendo na tela
// disable={!ativo} > se nao for verdadeiro vai ficar inativo.


// const App = () => {
//     const ativo = true
//     return(
//         <button disabled={!ativo}>{ativo ? "Botão ativo" : "Botão inativo"}
//         </button>
//     )
// }

// export default App;

// Hooks > são função especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais.

//----------------------------------------------------//

//React.useState
// O React.useState é uma função que retorna um array com 2 valores. O primeiro valor
// guarda o dado do estado atual, pode ser qualquer tipo de dado como strings,arrays, boolen, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.

const App = () => {
    const [ativo, setAtivo] = React.useState(true)

    return(
        <button onClick={() => setAtivo(!ativo)}>
            {ativo ? "Ativo": "Inativo"} 
        </button>
    )
}
export default App;