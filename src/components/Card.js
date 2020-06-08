import React from 'react';

function Card(props) {
    /**
     * Console log ajuda a saber o que o componente está recebendo no props.
     */
    console.log("PROPS:", props);
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.imagem} alt="" />
                <span className="card-title">{props.nome}</span>
            </div>
            <div className="card-content">
                <p><b>cor favorita:</b>Verde</p>
                <p><b>comida favorita:</b> Macarrão com queijo  </p>
            </div>
            <div className="card-action">
                <a href="#">Ver github</a>
            </div>
        </div>
    )
}

export default Card;