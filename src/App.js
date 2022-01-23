import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./styles.css";

import { Header } from "./Components/Header";

function App() {
  return (
    <div className="container">
      <Box sx={{ flexGrow: 2 }}>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={4}
            border={1}
            height={250}
            textAlign="center"
            borderRadius={2}
          >
            <Header title="To-Do List" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
