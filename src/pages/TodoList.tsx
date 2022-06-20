import React, {useState} from "react"
import {Container, Flex, TextField} from "../components/TodoStyles"

interface TodoItemData {
  text: string,
  done: boolean
}

const TodoPage: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>("")
  const [items, setItems] = useState<TodoItemData[]>([])

  return (
    <>
      <h1>The Todo App</h1>
      <Container>
        <Flex>
          <TextField 
            type="text"
            placeholder="Type here"
          />
        </Flex>
      </Container>
    </>
  )
}

export default TodoPage