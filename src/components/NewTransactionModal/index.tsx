import { FormEvent, useState } from "react";
import Modal from "react-modal";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import entrada from "../../assets/entradas.svg";
import saida from "../../assets/saidas.svg";
import { api } from "../../services/api";


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  const [type, setType] = useState("deposito");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    console.log(title, value, category, type);
    api.post('/transactions');
    
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          value={title}
          placeholder="Título"
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          type="number"
          name=""
          id=""
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposito");
            }}
            isActive={type === "deposito"}
            activeColor="green"
          >
            <img src={entrada} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("retirada");
            }}
            isActive={type === "retirada"}
            activeColor="red"
          >
            <img src={saida} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          placeholder="Categoria"
        />

        <button className="btnCadastro" type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
} 
