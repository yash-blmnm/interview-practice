import "./styles.css";
import { useState } from "react";

export default function App() {
  let [monthlyAmount, setMonthlyAmount] = useState(0);
  let [totalAmount, setTotalAmount] = useState(0);
  let [interestPaid, setInterestPaid] = useState(0);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    let p = parseFloat(formData.get("amount"));
    let i = parseFloat(formData.get("arr")) / 100 / 12;
    let n = parseFloat(formData.get("loanTerm")) * 12;
    const mAmount = (
      p *
      ((i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1))
    ).toFixed(2);
    const totalPaid = (mAmount * n).toFixed(2);
    setMonthlyAmount(mAmount);
    setTotalAmount(totalPaid);
    setInterestPaid((totalPaid - p).toFixed(2));
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div>
          <label>Amount : </label>
          <input type="number" name="amount" />
        </div>
        <div>
          <label>Interest Rate(%) : </label>
          <input type="number" name="arr" />
        </div>
        <div>
          <label>Loan term(years) : </label>
          <input type="number" name="loanTerm" />
        </div>
        <input type="submit" value="Calculate" />
      </form>
      <br />
      <div>
        <p>Monthly Payment Amount : $ {monthlyAmount}</p>
        <p>Total Payment Amount : $ {totalAmount}</p>
        <p>Total Interest Paid : $ {interestPaid}</p>
      </div>
    </>
  );
}
