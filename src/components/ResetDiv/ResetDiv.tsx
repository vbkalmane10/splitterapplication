import "./ResetDiv.css";

import ResetField from "../ResetField";
import Button from "../Button";

interface ResetDivProps {
  tipAmount: string;
  totalAmount: string;
  onReset: () => void;
}

export function ResetDiv({ onReset }: ResetDivProps) {
  return (
    <div className="resetDiv">
      <ResetField label1="Tip Amount" label2="person" price="0" />
      <ResetField label1="Total" label2="person" price="0" />
      <div className="buttonDiv">
        <Button label="RESET" onClick={onReset} disabled={false} />
      </div>
    </div>
  );
}
export default ResetDiv;
