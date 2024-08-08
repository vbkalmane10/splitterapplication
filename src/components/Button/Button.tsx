import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

export function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <div
      className={`${styles.button} ${disabled ? styles.disabled : ""}`}
      onClick={!disabled ? onClick : undefined}
    >
      <label>{label}</label>
    </div>
  );
}

export default Button;
