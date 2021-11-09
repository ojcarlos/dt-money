import { useState } from 'react'
import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'
import Modal from 'react-modal';

export function Header(){
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);
  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return(
      <Container>
          <Content>
            <img src={logo} alt="dt money logo" />
            <button type="button" onClick={handleOpenNewTransactionModal} >Nova transação</button>
            <Modal 
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal} >

              <h2>Cadastrar transação</h2>

            </Modal>
          </Content>
      </Container>  
    )
}