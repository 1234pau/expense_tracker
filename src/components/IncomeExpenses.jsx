import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const values = transactions.map((transaction) => transaction.amount);
  const plusValues = values
    .filter((plusValue) => {
      if (plusValue > 0) {
        return true;
      } else {
        false;
      }
    })
    .reduce((total, value) => (total += value), 0);
  const minusValues = values
    .filter((minusValue) => {
      if (minusValue < 0) {
        return true;
      } else {
        false;
      }
    })
    .reduce((total, value) => total + value, 0);
  console.log(plusValues);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus"> + {plusValues} lei</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus"> - {Math.abs(minusValues)} lei</p>
      </div>
    </div>
  );
};
