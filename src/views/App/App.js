import React, { useState, lazy } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Page2 from '../Page2'; // Como conheçemos
import ButtonStoom from '../../components/Button/Button';

/**
 * Imports reactstrap.
 */
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';

/***
 * Import das dependencias do bootstrap
 */
import * as $ from 'jquery'     //Somente para o JqueryModalSample
import 'bootstrap/dist/js/bootstrap.min.js'; //Somente para o JqueryModalSample

/***
 * Imports dos Lazy devem ficar abaixo dos demais imports.
 */
const Page1 = lazy(() => import('../Page1')) // Lazy recomendado para grandes blocos ( containers )

/****
*****Este componente foi feito utilizando a biblitoteca do reactrap 
*****/
const ReactstrapModalSample = ({ modal, callback }) => {
  return ( // Biblioteca reactstrap
    <Modal isOpen={modal} toggle={callback} className='a-classe-faz-o-que-quero'>
      <ModalHeader toggle={callback}>Modal title</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={callback}>Do Something</Button>{' '}
        <Button color="secondary" onClick={callback}>Cancel</Button>
      </ModalFooter>
    </Modal>)
}

/***
*** Modal feito com o bootstrap padrão.
****/
const JqueryModalSample = () => {
  //Bootstrap default padrão....
  return (<div className="modal fade" id="modalTeste">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 className="modal-title">Modal title</h4>
        </div>
        <div className="modal-body">
          <p>One fine body&hellip;</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>)
}

/***
 * Botões 
 **/
const HomePage = withRouter((props) => {
  //Hoocks
  const [disabled, meuClick] = useState(false);
  const [modal, toggleModal] = useState(false);
  
  return (
  <div className="App">

    {/** Modal jquery  */}
    <JqueryModalSample /> 

    {/** Modal do reactstrap */}
    <ReactstrapModalSample modal={modal} callback={() => toggleModal(modal => !modal)} />   
    
    <session>

      {/**Componentes do reactrap - INICIO*/}
      <Container>
        <Row>
          <Col sm="4" >
            <Button color="warning" onClick={() => toggleModal(modal => !modal)}>Modal Reactstrap</Button>
          </Col >
        </Row>
        {/** Fim do reactrap - FIM*/}

        {/**Bootstrap padrão - INICIO */}
        <div className='row'>
          <div className='col-sm-4'>
            <ButtonStoom className="btn-danger" disabled={disabled} click={e => meuClick(disabled => {
              $('#modalTeste').modal('show');
              return !disabled;
            })}>Modal Bootstrap .
            </ButtonStoom>
          </div>
          {/**Bootstrap padrão - FIM */}

          <div className='col-sm-4'>
            <Button color="info" onClick={() => props.history.push('/page1/')}>Page 1</Button>
          </div>
        </div>
      </Container>
      
    </session>
  </div >);
});


const App = () => {

  return (
    <React.Suspense fallback={'...LOADING'}> {/**AQUI PODEMOS INSERIR UM COMPONENTE E TODA VEZ QUE UMA PÁGINA É CARREGADA NA MEMÓRIA ESTE COMPONENTE SERÁ EXIBIDO. */}
     
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
       
        <Route exact path='/page1/' render={() => <Page1 />} /> {/** ESSE SÓ SERÁ INSERIDO NA MEMÓRIA QUANDO FOR UTILIZADO (COM LAZY) */}
        <Route exact path='/page2/' component={Page2} /> {/** ESSE CARA É INJETADO NA MEMÓRIA SEM SER USADO....(SEM LAZY) */}
     
      </Switch>
    </React.Suspense>
  );
}

export default withRouter(App);
