import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function AddTransaction() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to store the transaction
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        required
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        required
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <TextField
        required
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Button variant="contained" type="submit">Add Transaction</Button>
    </form>
  );
}

export default AddTransaction;
