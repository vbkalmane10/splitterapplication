import styles from "./NumberInput.module.css";
import dollarIcon from "../../assets/dollars.svg";
import personIcon from "../../assets/User.svg";
interface NumberInputProps {
  value: number;
  label: string;
  typeofIcon: "person" | "dollar";
  onChange: (value: number) => void;
  error: boolean | null | string;
}

export function NumberInput(props: NumberInputProps) {
  const getIcon = () => {
    switch (props.typeofIcon) {
      case "person":
        return <img src={personIcon} alt="Person icon" />;
      case "dollar":
        return <img src={dollarIcon} alt="Dollar icon" />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.numberInput}>
      <label htmlFor="number-input" className={styles["number-input-label"]}>
        {props.label}
      </label>
      <div
        className={`${styles["input-container"]} ${props.error ? styles["input-error"] : ""}`}
      >
        {getIcon()}
        <input
          type="number"
          className={styles["number-input"]}
          value={props.value || ""}
          onChange={(event) => props.onChange(Number(event.target.value))}
        ></input>
      </div>
      <p
        className={`${styles["error-field"]} ${props.error ? styles.visible : ""}`}
      >
        {props.error}
      </p>
    </div>
  );
}

export default NumberInput;
