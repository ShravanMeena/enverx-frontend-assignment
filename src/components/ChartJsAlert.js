import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import LineChartExample from "./LineChartExample";
import { DialogActions } from "@mui/material";
import SpaceDivider from "./SpaceDivider";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>View Chart</Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            CLOSE
          </Button>
        </DialogActions>
        <SpaceDivider height={50} />
        <LineChartExample />
      </Dialog>
    </div>
  );
}
