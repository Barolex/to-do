import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export const Task = ({ task, onDelete }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "whitesmoke",
        m: 3,
        textAlign: "start",
        width: "70%",
        height: 30,
        borderRadius: 1,
      }}
    >
      <Typography variant="h6" fontSize="medium">
        {task.assignment} <DeleteOutlineOutlinedIcon onClick={() => onDelete(task.id)}/>
      </Typography>
    </Box>
  );
};
