import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import CodeIcon from "@mui/icons-material/Code";
import { Link, NavLink } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";
import Register from "features/Auth/components/Register";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const useStyles = makeStyles({
  link: {
    color: "white",
    textDecoration: "none",
  },
  closeButton: {
    position: "absolute !important",
    top: 1,
    right: 1,
    color: grey[500],
    zIndex: 1,
  },
});

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className={classes.link} to="/">
              EZ SHOP
            </Link>
          </Typography>
          <NavLink className={classes.link} to="/todos">
            <Button color="inherit">Todos</Button>
          </NavLink>
          <NavLink className={classes.link} to="/albums">
            <Button color="inherit">Albums</Button>
          </NavLink>

          <Button color="inherit" onClick={handleClickOpen}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={(event, reason) => {
          if (reason === "backdropClick" || reason === "escapeKeyDown") return;
          handleClose();
        }}
      >
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogContent>
          <Register closeDialog={handleClose} />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
