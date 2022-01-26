import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import "../styles.css";

export const Task = ({ task, onDelete, onToggle }) => {

  return (
    <div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h6>
        {task.text}
        <DeleteOutlineOutlinedIcon
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h6>
      <p>{task.day}</p>
    </div>
    // <Box
    //   sx={{
    //     backgroundColor: "whitesmoke",
    //     m: 3,
    //     width: "70%",
    //     height: 30,
    //     borderRadius: 0.5,
    //   }}
    //   className={`${task.reminder ? "reminder" : ""}`}
    //   onDoubleClick={() => onToggle(task.id)}
    // >
    //   <Grid container justifyContent={"space-around"}>
    //     <Grid item>
    //       <Typography variant="h6" fontSize="medium">
    //         {task.assignment}
    //       </Typography>
    //     </Grid>
    //     <Grid item mt={0.2}>
    //       <DeleteOutlineOutlinedIcon color="error" onClick={() => onDelete(task.id)} />
    //     </Grid>
    //   </Grid>
    // </Box>
  );
};
