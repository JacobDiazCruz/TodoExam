import React, {useState} from "react"

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
    </>
  )
}

export default TodoPage