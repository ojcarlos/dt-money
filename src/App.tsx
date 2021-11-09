import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal/Index";
export function App() {
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);
  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <>
      <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal} />
      <Dashboard/>
        <NewTransactionModal
          isOpen = {isNewTransactionModalOpen}
          onRequestClose = {handleCloseNewTransactionModal}/>
      <GlobalStyle/>
    </>
  );
}

