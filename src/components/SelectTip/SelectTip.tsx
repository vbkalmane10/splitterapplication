import React from "react";
import styles from "./SelectTip.module.css";

interface SelectTipProps {
  /**
   * This is the label
   */
  label: string;
  /**
   * Array of tip values
   */
  tipValues: number[];
  /**
   * Callback function to handle tip selection
   */
  onSelect: (value: number) => void;

  selectedTip: number | null;
  customError: string | undefined;
}

export function SelectTip(props: SelectTipProps) {
  const handleButtonClick = (value: number) => {
    props.onSelect(value);
  };

  const handleCustomInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const customValue = parseFloat(event.target.value);
    props.onSelect(customValue);
  };

  return (
    <div className={styles.tipSelector}>
      <label className={styles.tipLabel}>{props.label}</label>
      <div className={styles.tipButtons}>
        {props.tipValues.map((value, index) => (
          <button
            key={index}
            className={`${styles.tipButton} ${props.selectedTip === value ? styles.tipButtonSelected : ""}`}
            onClick={() => handleButtonClick(value)}
          >
            {value}%
          </button>
        ))}
        <input
          type="number"
          className={`${styles.tipButton} ${styles.tipButtonCustom}`}
          placeholder="Custom"
          onChange={handleCustomInput}
        />
      </div>
      <p
        className={`${styles.customError} ${props.customError ? styles.visible : ""}`}
      >
        {props.customError}
      </p>
    </div>
  );
}

export default SelectTip;
