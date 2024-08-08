import styles from "./ResetField.module.css";

interface ResetFieldProps {
  /**
   * This is to pass the label
   */
  label1: string;
  label2: string;
  price: string | number;
}

export function ResetField(props: ResetFieldProps) {
  return (
    <div className={styles.price_div}>
      <div className={styles.tip_amount}>
        {props.label1}
        <p>/{props.label2}</p>
      </div>

      <div className={styles.price}>$ {props.price}</div>
    </div>
  );
}

export default ResetField;
