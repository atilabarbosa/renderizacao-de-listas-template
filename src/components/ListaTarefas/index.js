import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [lista, setLista] = useState(["estudar react", "fazer o exercicio", "descansar"])
  const [novaTarefa, setNovaTarefa] = useState("");

  const renderizarLista = lista.map((tarefa, index) => {
    return (
    <Tarefa key={index}>
    <p>{tarefa}</p>
    <RemoveButton onClick = {() => removeTarefa (tarefa)}>
      <img src={bin} alt="" width="16px" />
    </RemoveButton>
  </Tarefa>
    )
  })

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista]
    novaLista.push(novaTarefa)
    setLista(novaLista)
    setNovaTarefa("")
  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => {
      return item !== tarefa
    })
    setLista(listaFiltrada)
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick = {adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {renderizarLista}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
