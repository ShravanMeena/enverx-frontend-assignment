import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  createTaskRequest,
  updateTaskRequest,
} from "../redux/actions/expenseAction";
import { GET_TASK_SUCCESS } from "../redux/types";
import { categories } from "../utils/utils";
import TransitionAlerts from "./TransitionAlerts";
import SpaceDivider from "./SpaceDivider";

const TransactionForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const { task } = useSelector((state) => state.expenseReducer);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTransaction = { description, amount, category, date: new Date()};
    try {
      dispatch(
        task?.length === 1
          ? updateTaskRequest({ id: task[0].id, ...updatedTransaction })
          : createTaskRequest(updatedTransaction)
      );
    } catch (error) {}
  };

  useEffect(() => {
    if (task?.length > 0) {
      let singleTask = task[0];

      setDescription(singleTask.description);
      setAmount(singleTask.amount);
      setCategory(singleTask.category);
    }
  }, [task]);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <FormControl
        style={{
          width: 200,
        }}
      >
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <SpaceDivider />
      <Stack direction="row" spacing={2}>
        <Button type="submit" variant="contained" color="primary">
          {task?.length > 0 ? "Update Transaction" : "Add Transaction"}
        </Button>

        {task?.length > 0 && (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch({ type: GET_TASK_SUCCESS, payload: [] });
            }}
          >
            RESET
          </Button>
        )}
        <TransitionAlerts />
      </Stack>
    </form>
  );
};

export default TransactionForm;
