import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import { Grid } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import { useState } from "react";

import { MainButton } from "./MainButton";

export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("No text");
      return;
    }
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid container justifyContent="space-evenly">
        <Grid item m={1} width={400}>
          <TextField
            label="Add Text"
            variant="outlined"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Grid>
        <Grid item m={1} width={400}>
          <TextField
            label="Add Day"
            variant="outlined"
            type="text"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </Grid>
        <Grid item m={1} width={400}>
          <FormControlLabel
            control={
              <Checkbox
                checked={reminder}
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
              />
            }
            label="Add reminder"
          ></FormControlLabel>
        </Grid>
        <Grid item m={1} width={400}>
          <Input type="submit" value="Save" color="success" />
        </Grid>
      </Grid>
    </form>
  );
};
