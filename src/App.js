import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import {useState} from 'react';
function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appt',
        day: 'Feb 5',
        reminder: true
    },
    {
        id:2,
        text: 'Meeting',
        day: 'Feb 3',
        reminder: true
    },
    {
        id:3,
        text: 'Grocery Shop',
        day: 'Feb 7',
        reminder: false
    }     
]);

const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=> id !== task.id));
}

const toggleReminder = (id) =>{
   setTasks(tasks.map((task)=> task.id === id? {...task, reminder: !task.reminder} : task))
}

const addTask = (task) =>{
  const id = Math.floor(Math.random() * 10000) +1;
  const newTask = {id, ...task};
  setTasks([...tasks, newTask]);
}
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
       showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {
        tasks.length > 0? (
          <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        ): ('No Tasks To Show')
      }
    </div>
  );
  
}


export default App;
