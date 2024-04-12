import { useEffect, useState } from "react";
import Snackbar from "@mui/joy/Snackbar";
import CancelIcon from "@mui/icons-material/Cancel";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import PropTypes from "prop-types";

export default function Toaster({ message, type }:any) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, 3000);
  }, []);

  return (
    <Snackbar
      autoHideDuration={3000}
      color={type}
      size="sm"
      open={open}
      variant="outlined"
      startDecorator={
        type === "danger" ? (
          <RemoveDoneIcon />
        ) : type === "success" ? (
          <DoneAllIcon />
        ) : (
          <ReportGmailerrorredIcon />
        )
      }
      endDecorator={
        <CancelIcon className="hover:cursor-pointer" onClick={handleClose} />
      }
    >
      {message}
    </Snackbar>
  );
}
Toaster.proptypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["danger", "success", "error"]).isRequired,
};
