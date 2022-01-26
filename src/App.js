import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import "./styles.css";

import { Header } from "./Components/Header";
import { Tasks } from "./Components/Tasks";
import { AddTask } from "./Components/AddTask";

// Implement a calendar (React Dates) to select a date and an hour (moment)
// Implement dark / light mode
// Add SnackBar to Add Task in the if

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "First title",
      day: "Do laundry",
      reminder: true,
    },
    {
      id: 2,
      text: "Second title",
      day: "Do dishes",
      reminder: true,
    },
  ]);

  // Add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
  };

  // Delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Box sx={{ flexGrow: 2 }}>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={4}
            sx={{
              height: "50%",
              border: 1,
              textAlign: "center",
              borderRadius: 2,
            }}
          >
            <Header title="To-Do List" />
            <AddTask onAdd={addTask} />
            {tasks.length > 0 ? (
              <Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleReminder}
              />
            ) : (
              "Please add a reminder."
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
