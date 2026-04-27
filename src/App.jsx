import { useState } from 'react'
import Counter from './Task/Counter'
import DynamicForm from './Task/DynamicForm'
import Stopwatch from './Task/Stopwatch'
import Search from './Task/Search'
import Users from './Task/Users'
import Modal from './Task/Modal'
import Tabs from './Task/Tabs'
import Table from './Task/Table'
import MovieApp from './components/MovieApp'

function App() {
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false);
  const tabs = [
    { label: "Home", content: "Home Content" },
    { label: "About", content: "About Content" },
    { label: "Contact", content: "Contact Content" }
  ];

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Age", accessor: "age" }
  ];

  const data = [
    { name: "Rahul", age: 25 },
    { name: "Aman", age: 30 }
  ];
  return (
    <>
      {/* <h1>{count}</h1>
      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button> */}
      {/* <Counter /> */}
      {/* <DynamicForm /> */}
      {/* <Stopwatch /> */}
      {/* <Search /> */}
      {/* <Users /> */}
      {/* <button onClick={() => setOpen(true)}>Open Modal</button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Custom Modal</h2>
      </Modal> */}

      {/* <Tabs tabs={tabs} /> */}

      {/* <Table columns={columns} data={data} /> */}
      
      <MovieApp/>
    </>
  )
}

export default App
