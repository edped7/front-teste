import React from 'react';
import './Button.scss';

/** 
  * @Name: Botão Padrão
  * @Data: 2019
  * @Desc: Botão Padrão do Sistema. 
  * @props:
  *     
  *     className: 'Condição do botão (altera seu estilo)'
  */

const Button = (props) =>{

    return (
        <React.Fragment>
            <button 
                className= {`btn ${props.className} ${props.disabled ? 'disabled' : ''}`}>
                {props.children}
            </button>
        </React.Fragment>
    )
}

export default Button;