import './App.css'
import AddTodo from './components/AddTodo';
import Filter from './components/Filter';
import Todos from './components/Todos';

function App() {
  return (
    <div className='container__content'>
      <h1>TodoList</h1>
      <AddTodo />
      <Filter />
      <Todos />
      <footer>
        Created by Dan , 2024 =)
      </footer>
    </div>

  )
}
export default App;
