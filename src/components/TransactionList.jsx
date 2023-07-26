import { Transaction } from "./Transaction";

export const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">{<Transaction />}</ul>
    </>
  );
};
