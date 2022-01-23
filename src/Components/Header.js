import PropTypes from "prop-types"
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const Header = ({title}) => {
    return (
      <Box >
        <h1>{title}</h1>
        <Button variant="outlined" color="success">Add</Button>
      </Box>
    );
}

Header.defaultProps = {
    title: "Default title"
}

Header.propTypes = {
    title: PropTypes.string
}