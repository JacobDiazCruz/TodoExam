import React, {useState} from "react"
import Button from "../components/Button"
import {Container, Flex, TextField} from "../components/TodoStyles"
import TodoItem from "../components/TodoItem"

interface TodoItemData {
  text: string,
  done: boolean
}
interface ItemClickParam {
  item: TodoItemData,
  e: Event
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

  /**
   * @description set done if the item has been clicked
   * @trigger TodoItem component
   * @status done
   */
  const onItemClick = ({item, e}: ItemClickParam) => {
    items.map((origItem, key) => {
      if(item.text == origItem.text) {
        let newItems: TodoItemData[] = [...items]
        newItems[key].done = true
        setItems(newItems)
      }
    })
  }

  /**
   * @description delete todo item
   * @trigger "Delete" button
   * @status done
   */
  const deleteItem = (item: TodoItemData, e: Event) => {
    e.stopPropagation()
    let newItems: TodoItemData[] = items.filter((data) => data !== item)
    setItems(newItems)
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
          {items.map(item => (
            <TodoItem 
              key={item.text}
              item={item}
              onItemClick={onItemClick}
              deleteItem={deleteItem}
            />
          ))}
        </Flex>
      </Container>
    </>
  )
}

export default TodoPage