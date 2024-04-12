import { useEffect, useState } from "react";
import Snackbar from "@mui/joy/Snackbar";
import CancelIcon from "@mui/icons-material/Cancel";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

export default function Toaster({ message, type }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    console.log('handle close')
    setOpen(false);
  };
  useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, 3000);
  },[]);

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
