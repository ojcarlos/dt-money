import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
interface newTransactionModalProps{
    isOpen:boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: newTransactionModalProps){
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName = "react-modal-overlay" 
            className = "react-modal-content" >
                <button type="button" 
                onClick={onRequestClose}
                className="react-modal-close"  >
                    <img src={closeImg} alt="fechar" />
                </button>
            <Container>
                <h2>Cadastrar transação</h2>
                <input placeholder="Título" />
                <input type="number"placeholder="Valor" />
                <TransactionTypeContainer>
                    <button
                    type="button">
                        <img src={incomeImg} alt="seta saindo" />
                        <span>Entrada</span>
                    </button>
                </TransactionTypeContainer>
                <input placeholder="categoria" />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
            
          </Modal>
    )
}