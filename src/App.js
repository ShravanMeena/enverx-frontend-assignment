import React, { useState } from 'react';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      <AddTransaction onAddTransaction={handleAddTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
