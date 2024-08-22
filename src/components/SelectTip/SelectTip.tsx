import React from "react";

import "../../App.css";

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
    <div className="w-full m-0 pt-5 rounded-md mb-14  text-[#5d6b6c] font-bold">
      <label className="text-[var(--font-size-medium)] font-[var(--font-family)]  leading-4 p-0 pr-2.5 sm:text-[var(--font-size-small)]">
        {props.label}
      </label>
      <div className="grid grid-cols-2 gap-6 mt-4 md:grid-cols-3">
        {props.tipValues.map((value, index) => (
          <button
            key={index}
            className={`${
              props.selectedTip === value
                ? "bg-[#26c2ad] text-white"
                : "bg-[#00474b] text-[#feffff]"
            } border-none rounded-lg cursor-pointer leading-[3rem] tracking-[0.1em] text-[30px] font-bold text-center p-2.5 hover:bg-[#242424]`}
            onClick={() => handleButtonClick(value)}
          >
            {value}%
          </button>
        ))}
        <input
          type="number"
          className="w-[calc(100%-5px)] p-0 pr-2.5 border-none rounded-[5px] text-[28px] text-center bg-[#f3f8fb] text-black"
          placeholder="Custom"
          onChange={handleCustomInput}
        />
      </div>
      <p
        className={`text-red-500 font-bold h-2 mt-2 ${
          props.customError ? "visible" : "invisible"
        }`}
      >
        {props.customError}
      </p>
    </div>
  );
}

export default SelectTip;
