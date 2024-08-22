import "../../App.css";
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
    <div className="flex flex-col text-[#5d6b6c] w-full">
      <label
        htmlFor="number-input"
        className="font-semibold pl-1.5 text-xl w-fit md:text-base sm:text-sm" //number-input-label
      >
        {props.label}
      </label>
      <div
        className={`font-space-mono flex items-center justify-center rounded-md bg-[#f7fafd] border-2 ${
          props.error
            ? "border-red-500"
            : "border-transparent hover:border-black"
        }`}
      >
        <div className="w-fit p-2">{getIcon()}</div>
        <input
          type="number"
          className=" no-spin-button text-lg font-bold leading-6 p-2.5 pr-3.5 font-space-mono text-end border-none outline-none text-[#5d6b6c] flex-grow bg-transparent" //number-input
          value={props.value || ""}
          onChange={(event) => props.onChange(Number(event.target.value))}
        ></input>
      </div>
      <p
        className={`text-red-600 font-bold h-2.5 my-3 ${
          props.error ? "block" : "invisible"
        }`}
      >
        {props.error}
      </p>
    </div>
  );
}

export default NumberInput;
