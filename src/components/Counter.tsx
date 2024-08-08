import React from "react";
import "./Counter.css";

export interface CounterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onChange: (newValue: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  value,
  onIncrement,
  onDecrement,
  onChange,
}) => {
  const handleIncrement = () => {
    onIncrement();
  };

  const handleDecrement = () => {
    onDecrement();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.valueAsNumber;
    onChange(isNaN(newValue) ? 0 : newValue);
  };

  return (
    <div className="counter">
      <div className="button" onClick={handleIncrement}>
        +
      </div>
      <input
        className="value"
        type="number"
        value={value}
        onChange={handleChange}
      />
      <div className="button" onClick={handleDecrement}>
        -
      </div>
    </div>
  );
};

export default Counter;
