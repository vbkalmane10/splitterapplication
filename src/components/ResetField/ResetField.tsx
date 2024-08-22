import "../../App.css";

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
    <div className="grid items-center mb-8 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-16 grid-cols-[1fr_auto] font-['Space_Mono']">
      <div className="justify-self-start text-[#feffff] font-normal">
        {props.label1}
        <p className="text-[#9fb3b2] font-semibold">/{props.label2}</p>
      </div>

      <div className="justify-self-end text-[#2cc0ad] font-bold text-4xl sm:text-[40px] md:text-[44px] xl:text-[48px] leading-none sm:leading-[3rem] md:leading-[4rem] xl:leading-[4.4rem]">
        $ {props.price}
      </div>
    </div>
  );
}

export default ResetField;
