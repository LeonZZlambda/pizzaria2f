import react, {useState, useEffect} from 'react'

const Listagem = () => {
   
    const ItensLista = () => Pizzas.map(
        pizza =>
        <li key={pizza.id} style={{listStyle: 'none'}}>
            <img src ={pizza.imagem}
            alt={pizza.nome}
            style={{
                width: "150",
                height:"100px",
                borderRadius:"8px",
                margin: "0px",
            }}
            />
        </li>
    )

    return (
        <>
            <h2 style={{textAlign: 'center'}}>
                Pizzas ITB
            </h2>
            <ul>
                <ItensLista />
            </ul>
        </>
    )
}

export default Listagem