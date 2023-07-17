import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function TransactionList({ transactions }) {
  return (
    <List>
      {transactions.map((transaction, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={`${transaction.description} - ${transaction.category}`}
            secondary={`$${transaction.amount} on ${new Date(transaction.date).toDateString()}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default TransactionList;
