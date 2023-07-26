import "./index.css";
import Heder from "./components/Heder";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
function App() {
  return (
    <div>
      <Heder title="Expense Tracker" />
      <Balance />
      <IncomeExpense />
    </div>
  );
}

export default App;
