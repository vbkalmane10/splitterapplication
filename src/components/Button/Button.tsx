import "../../App.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

export function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <div
      className={`flex justify-center items-center font-['Space_Mono'] bg-[#25c2ad;] leading-[3.2rem] tracking-[10%] rounded-[7px] text-[24px] cursor-pointer mt-[146px] font-bold text-[#00474b] 
      ${disabled ? "bg-[#0d686d] cursor-not-allowed" : ""}`}
      onClick={!disabled ? onClick : undefined}
    >
      <label>{label}</label>
    </div>
  );
}

export default Button;
