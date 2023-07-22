import './App.css'
import NewItem from './components/newitems/newitem'
import TodoList from './components/todolist/todolist'

const App = () => {
  return (
    <div className='app'>
        <div className="container"> 
          <h1>TODO LIST</h1>
        </div>
      <TodoList />
    </div>
  )
}

export default App
