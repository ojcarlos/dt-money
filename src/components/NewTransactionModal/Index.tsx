import Modal from 'react-modal';
import { Container } from './styles';

interface newTransactionModalProps{
    isOpen:boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: newTransactionModalProps){
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose} >
            <Container>
                <h2>Cadastrar transação</h2>
                <input placeholder="Título" />
                <input type="number"placeholder="Valor" />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
          </Modal>
    )
}