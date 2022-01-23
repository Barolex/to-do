import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import "./styles.css";

import { Header } from "./Components/Header";
import { Tasks } from "./Components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "First title",
      assignment: "Do laundry",
    },
    {
      id: 2,
      title: "Second title",
      assignment: "Do dishes",
    },
  ]);

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
            <Tasks tasks={tasks} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
