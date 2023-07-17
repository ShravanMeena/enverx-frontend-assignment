import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import {
  fetchTasksRequest,
  getTaskRequest,
} from "../redux/actions/expenseAction";
import { useDispatch, useSelector } from "react-redux";
import AlertDialog from "./AlertDialog";
import { Alert } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function TransactionList() {
  const { tasks, loading } = useSelector((state) => state.expenseReducer);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchTasksRequest());
  }, [dispatch]);

  const updateExpenseHandler = async (id) => {
    dispatch(getTaskRequest(id));
  };
if(loading) return <></>
  return (
   <>
    <TableContainer component={Paper}>
      {tasks.length > 0 ?
         <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">#</StyledTableCell>
            <StyledTableCell align="center">Amount (₹)</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks?.map((row, index) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="left">{index + 1}</StyledTableCell>
              <StyledTableCell align="center">{row.amount}</StyledTableCell>
              <StyledTableCell align="center">{row.category}</StyledTableCell>
              <StyledTableCell align="center">
                {row.description}
              </StyledTableCell>
              <StyledTableCell align="left">
                <Stack direction="row" spacing={2}>
                
                  <AlertDialog id={row.id}/>
                  
                  <Button
                    onClick={() => updateExpenseHandler(row.id)}
                    variant="contained"
                    endIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                </Stack>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      :
      <Alert severity="info">No Expense</Alert>
    }
    </TableContainer>
   </>
  );
}
