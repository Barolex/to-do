import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { MainButton } from "./MainButton";

// ENF

export const Header = ({ title }) => {
  return (
    <Box>
      <h1>{title}</h1>
      <MainButton text="Add" color="success" />
    </Box>
  );
};

Header.defaultProps = {
  title: "Default title",
};

Header.propTypes = {
  title: PropTypes.string,
};
