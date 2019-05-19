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

const Button = (props) => {
    const {className, children, disabled, click} = props;
 return(<button className={ `btn ${className} ${disabled ? 'disabled' : disabled }` } onClick={click}>
        {children}
    </button>)
}
    

export default Button;