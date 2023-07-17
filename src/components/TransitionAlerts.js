import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { TASK_ALERT } from "../redux/types";

export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);
  const { alertMsg } = useSelector((state) => state.expenseReducer);

  const dispatch = useDispatch();

  const hideAlert = () => {
    dispatch({ type: TASK_ALERT, payload: null });
    setOpen(false)
  };

  if(!alertMsg) return <></>
  return (
    <Box sx={{ width: "100%",position:"fixed",top:0,marginBottom:100,zIndex:1 }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                hideAlert()
              }}
            >
              <CloseIcon onClic={hideAlert} fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {alertMsg}
        </Alert>
      </Collapse>
    </Box>
  );
}
