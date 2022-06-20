import React from "react"
import styled from "styled-components"

interface ButtonProp {
  children: any
  addNewTodo: any
  newTodo: string
}

const AddBtn = styled.button`
  cursor: pointer;
  width: 20%;
  border: 1px solid #eaeaea;
  background-color: #0243eb;
  color: #FFF;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: .3s;

  &:disabled {
    background-color: #dbe9fd;
    cursor: not-allowed;
  }
`;

const TodoPage = ({ addNewTodo, newTodo }: ButtonProp) => {
  return (
    <AddBtn
      onClick={()=> addNewTodo()}
      disabled={!newTodo}
    >
      Add
    </AddBtn>
  )
}

export default TodoPage