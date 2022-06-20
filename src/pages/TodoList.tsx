import React, {useState} from "react"
import Button from "../components/Button"
import {Container, Flex, TextField} from "../components/TodoStyles"

interface TodoItemData {
  text: string,
  done: boolean
}

const TodoPage: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>("")
  const [items, setItems] = useState<TodoItemData[]>([])

  /**
   * @description add new todo item
   * @trigger "Add" button
   * @status done
   */
  const addNewTodo = () => {
    const newItem: TodoItemData = {
      text: newTodo,
      done: false
    }
    setItems(prev => [...prev, newItem])
    setNewTodo("")
  }

  return (
    <>
      <h1>The Todo App</h1>
      <Container>
        <Flex>
          <TextField 
            type="text"
            placeholder="Type here"
          />
          <Button
            addNewTodo={addNewTodo}
            newTodo={newTodo}
          >
            Add
          </Button>
        </Flex>
      </Container>
    </>
  )
}

export default TodoPage