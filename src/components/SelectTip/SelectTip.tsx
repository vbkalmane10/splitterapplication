import "./SelectTip.css";

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
    <div className="tip-selector">
      <label className="tip-label">{props.label}</label>
      <div className="tip-buttons">
        {props.tipValues.map((value, index) => (
          <button
            key={index}
            className={`tip-button ${props.selectedTip === value ? "selected" : ""}`}
            onClick={() => handleButtonClick(value)}
          >
            {value}%
          </button>
        ))}
        <input
          type="number"
          className="tip-button custom"
          placeholder="Custom "
          onChange={handleCustomInput}
        />
      </div>
    </div>
  );
}

export default SelectTip;
