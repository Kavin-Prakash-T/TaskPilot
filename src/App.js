import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import AddTask from './components/AddTask/AddTask';
import ShowTask from './components/ShowTask/ShowTask';
import './App.css';
const App = () => {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task, setTask] = useState({});
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "medium");
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class")
    document.documentElement.classList.add(theme)

  }, [theme]);

  return (
    <div className={"App " + theme}>
      <Header theme={theme} setTheme={setTheme} />
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <p className="footer">Developed by KP</p>
    </div>
  )
}

export default App
