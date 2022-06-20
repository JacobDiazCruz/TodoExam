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

  const onEnter = (e: any) => {
    if(e.key === 'Enter') {
      addNewTodo()
    }
  }

  return (
    <>
      <h1>The Todo App</h1>
      <Container>
        <Flex>
          <TextField 
            type="text"
            placeholder="Type here"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
            onKeyPress={e => onEnter(e)}
          />
          <Button
            addNewTodo={addNewTodo}
            newTodo={newTodo}
          >
            Add
          </Button>
        </Flex>
        {items.length ?
          <>
            {items.map(item => (
              <TodoItem 
                key={item.text}
                item={item}
                onItemClick={onItemClick}
                deleteItem={deleteItem}
              />
            ))}
          </>
        : 
          <>
            <div style={{ fontSize: "18px"}}>
              <b>No todo item</b>
            </div>
            <div style={{ fontSize: "14px"}}>
              Fill up the field and click "Add" button to add a new todo
            </div>
          </>
        }
      </Container>
    </>
  )
}

export default TodoPage