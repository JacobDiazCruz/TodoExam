import React from "react"
import styled from "styled-components"

interface TodoItemData {
  text: string,
  done: boolean
}

interface ItemProp {
  item: TodoItemData,
  onItemClick: Function,
  deleteItem: Function
}

interface ItemTextProps {
  done: any
}

const TodoItemBox = styled.div<ItemTextProps>`
  border: 1px solid#eaeaea;
  box-shadow: 0 2px 6px rgb(0 0 0 / 8%);
  transition: .2s;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  text-align: left;
  background-color: ${(props: ItemTextProps) => props.done ? "rgb(245, 244, 242)": ""};

  &:hover {
    box-shadow: 0 2px 6px rgb(0 0 0 / 15%);
  }
`;

const TodoItemText = styled.div<ItemTextProps>`
  text-decoration: ${(props: ItemTextProps) => props.done ? "line-through" : ""};
  margin-top: 0.5rem;
`;

const DeleteBtn = styled.button`
  color: #FFF;
  background-color: #dc262b;
  padding: 0.5rem 1rem;
  border: 1px solid #dc262b;
  border-radius: 4px;
  cursor: pointer;
`

const TodoItem = ({item, onItemClick, deleteItem}: ItemProp) => {
  return (
    <TodoItemBox
      onClick={e => !item.done ? 
        onItemClick({item, e}) 
        : null
      }
      done={item.done}
    >
      <TodoItemText done={item.done}>
        {item.text}
      </TodoItemText>
      <DeleteBtn onClick={e => deleteItem(item, e)}>
        Delete
      </DeleteBtn>
    </TodoItemBox>
  )
}

export default TodoItem