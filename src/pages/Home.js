import React from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import ChartJsAlert from "../components/ChartJsAlert";
import SpaceDivider from "../components/SpaceDivider";

export default function Home() {
  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <SpaceDivider height={60} />
      <TransactionForm />
      <SpaceDivider />
      <ChartJsAlert />
      <SpaceDivider />
      <TransactionList />
    </div>
  );
}
