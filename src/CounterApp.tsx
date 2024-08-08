import React, { useState } from "react";
import "./index.css";
import Counter from "./components/Counter";
import "./components/Counter.css";

const CounterApp: React.FC = () => {
  const [values, setValues] = useState([0, 0]);

  const handleIncrement = (index: number) => {
    const newValues = [...values];
    newValues[index] += 1;
    setValues(newValues);
  };

  const handleDecrement = (index: number) => {
    const newValues = [...values];
    newValues[index] -= 1;
    setValues(newValues);
  };

  const handleChange = (index: number, newValue: number) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  const total = values.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="container">
      <div className="total">Total: {total}</div>
      <div className="counter-container">
        {values.map((value, index) => (
          <Counter
            key={index}
            value={value}
            onIncrement={() => handleIncrement(index)}
            onDecrement={() => handleDecrement(index)}
            onChange={(newValue) => handleChange(index, newValue)}
          />
        ))}
      </div>
    </div>
  );
};

export default CounterApp;
