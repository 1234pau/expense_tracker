import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount > 0 ? "+" : "-";
  const { handleDelete } = useContext(GlobalContext);
  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      {transaction.text}
      <span>
        {sign}
        {Math.abs(transaction.amount)} lei
      </span>
      <button
        className="delete-btn"
        onClick={() => handleDelete(transaction.id)}>
        x
      </button>
    </li>
  );
};
Transaction.propTypes = String;
