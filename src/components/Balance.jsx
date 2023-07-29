import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const total = transactions
    .map((transaction) => {
      return transaction.amount;
    })
    .reduce((totalValue, value) => (totalValue += value), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{total} lei</h1>
    </>
  );
};
