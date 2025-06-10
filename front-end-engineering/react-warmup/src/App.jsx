import { useEffect, useState } from 'react';
import Header from './components/Header';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("Componente montado");
    return () => console.log("Componente desmontado");
  }, []);

  useEffect(() => {
    console.log("Tasks atualizadas", tasks);
  }, [tasks]);


  const handleAddTask = () => {
    setTasks([
      { title: "Task 1", id: 1 },
      { title: "Task 2", id: 2 },
    ]);
  }

  const handleCleanTask = () => {
    setTasks([]);
  }

  return (
    <>
      <Header title="Titulo" />
      <h2>Hello World!</h2>

      <button onClick={handleAddTask}>Adicionar tasks</button>
      <button onClick={handleCleanTask}>Limpar tasks</button>

      {tasks.length === 0 && <div>Nenhuma Task</div>}

      {tasks.length > 0 && tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
        </div>
      ))}
    </>
  )
}

export default App
