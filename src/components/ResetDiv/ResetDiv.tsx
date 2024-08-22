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
    <div className="p-10 w-full max-w-inherit md:p-10 md:max-w-inherit sm:p-7 sm:max-w-inherit">
      <ResetField label1="Tip Amount" label2="person" price="0" />
      <ResetField label1="Total" label2="person" price="0" />
      <div className="text-lg mt-10 p-3 md:text-base md:mt-7 md:p-2.5 sm:text-sm sm:mt-5 sm:p-2">
        <Button label="RESET" onClick={onReset} disabled={false} />
      </div>
    </div>
  );
}
export default ResetDiv;
