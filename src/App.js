import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import "./styles.css";

import { Header } from "./Components/Header";
import { Tasks } from "./Components/Tasks";

// Implement a calendar (React Dates) to select a date and an hour (moment)

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "First title",
      assignment: "Do laundry",
      reminder: true
    },
    {
      id: 2,
      title: "Second title",
      assignment: "Do dishes",
      reminder: true
    },
  ]);

  // Delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

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
