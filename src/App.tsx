import React, { useState, useEffect } from "react";
import { Task } from "./types/task";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { v4 as uuidv4 } from "uuid";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: Task = { id: uuidv4(), title, completed: false };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (id: string, newTitle: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg flex flex-col h-[90vh]">

        <div className="border-b">
          <h1 className="text-3xl font-extrabold text-blue-600 text-center mb-4">
            AFNAN  To-Do List
          </h1>
          <AddTask onAdd={addTask} />
        </div>

        <div className="flex-1 overflow-y-auto mt-6">
          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={editTask}
          />
          {tasks.length === 0 && (
            <p className="text-gray-500 text-center mt-4">
              No tasks added yet. Start by adding one above!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
