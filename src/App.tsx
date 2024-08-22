import { useReducer } from "react";
import "./App.css";
import "./components/ResetDiv/ResetDiv.css";
import "./components/NumberInput/NumberInput.module.css";
import "./components/SelectTip/SelectTip.module.css";
import NumberInput from "./components/NumberInput";
import SelectTip from "./components/SelectTip";
import ResetField from "./components/ResetField";
import Button from "./components/Button";

interface State {
  billValue: number;
  peopleValue: number;
  selectedTip: number | null;
  tipAmount: number | string;
  totalAmount: number | string;
  isResetDisabled: boolean;
}

type Action =
  | { type: "SET_BILL"; value: number }
  | { type: "SET_PEOPLE"; value: number }
  | { type: "SET_TIP"; value: number }
  | { type: "RESET" };

const initialState: State = {
  billValue: 0,
  peopleValue: 0,
  selectedTip: null,
  tipAmount: "--",
  totalAmount: "--",
  isResetDisabled: true,
};

function reducer(state: State, action: Action): State {
  const calculateAmounts = (
    billValue: number,
    peopleValue: number,
    selectedTip: number | null
  ) => {
    let tipAmount = 0;
    let totalAmount = 0;
    if (
      billValue > 0 &&
      selectedTip !== null &&
      peopleValue > 0 &&
      peopleValue % 1 === 0 &&
      selectedTip >= 0
    ) {
      tipAmount = Number(
        ((billValue * selectedTip) / 100 / peopleValue).toFixed(2)
      );
      totalAmount = Number(
        ((billValue + tipAmount * peopleValue) / peopleValue).toFixed(2)
      );
    }
    return { tipAmount, totalAmount };
  };

  switch (action.type) {
    case "SET_BILL": {
      const { tipAmount, totalAmount } = calculateAmounts(
        action.value,
        state.peopleValue,
        state.selectedTip
      );
      const isResetDisabled =
        action.value <= 0 ||
        state.peopleValue <= 0 ||
        state.peopleValue % 1 !== 0;
      return {
        ...state,
        billValue: action.value,
        isResetDisabled,
        tipAmount,
        totalAmount,
      };
    }
    case "SET_PEOPLE": {
      const isDecimal = action.value % 1 !== 0;
      const isResetDisabled =
        action.value <= 0 || state.billValue <= 0 || isDecimal;
      const { tipAmount, totalAmount } = calculateAmounts(
        state.billValue,
        action.value,
        state.selectedTip
      );
      return {
        ...state,
        peopleValue: action.value,
        isResetDisabled,
        tipAmount,
        totalAmount,
      };
    }
    case "SET_TIP": {
      const { tipAmount, totalAmount } = calculateAmounts(
        state.billValue,
        state.peopleValue,
        action.value
      );
      return {
        ...state,
        selectedTip: action.value,
        tipAmount,
        totalAmount,
      };
    }
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
}

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleBillChange = (newValue: number) => {
    dispatch({ type: "SET_BILL", value: newValue });
  };

  const handlePeopleChange = (newValue: number) => {
    dispatch({ type: "SET_PEOPLE", value: newValue });
  };

  const handleTipSelect = (value: number) => {
    dispatch({ type: "SET_TIP", value });
  };

  const getBillError = () => {
    return state.billValue < 0 ? "Bill Amount should be greater than 0" : null;
  };

  const getPeopleError = () => {
    if (state.peopleValue < 0) {
      return "Number of people should be greater than 0";
    } else if (state.peopleValue % 1 !== 0) {
      return "Decimal value not allowed";
    }
    return null;
  };

  const getCustomError = () => {
    if (state.selectedTip! < 0) {
      return "Tip amount should be greater than 0";
    }
  };
  return (
    <div className="flex flex-col items-center justify-center bg-[#c5e4e7] mt-5">
      <div className="text-2xl font-bold flex flex-col items-center justify-center text-[#00474b] mb-[2%] md:text-lg sm:text-base">
        <span className="text-2xl">S P L I</span>
        <span className="text-2xl">T T E R</span>
      </div>
      <div className="grid grid-cols-1 p-6 gap-15 max-w-full bg-white rounded-2xl md:grid-cols-2">
        <div className=" max-w-[526px]">
          <NumberInput
            value={state.billValue}
            typeofIcon="dollar"
            label="Bill"
            onChange={handleBillChange}
            error={getBillError()}
          />
          <SelectTip
            label={"Select Tip %"}
            tipValues={[5, 10, 15, 20, 50]}
            onSelect={handleTipSelect}
            selectedTip={state.selectedTip}
            customError={getCustomError()}
          />
          <NumberInput
            value={state.peopleValue}
            typeofIcon="person"
            label="Number of People"
            onChange={handlePeopleChange}
            error={getPeopleError()}
          />
        </div>
        <div className="w-full max-w-[526px] bg-[#00474B] p-10 rounded-xl">
          <ResetField
            label1="Tip Amount"
            label2="person"
            price={state.tipAmount}
          />
          <ResetField
            label1="Total"
            label2="person"
            price={state.totalAmount}
          />
          <Button
            label="RESET"
            onClick={() => dispatch({ type: "RESET" })}
            disabled={state.isResetDisabled}
          />
        </div>
      </div>
    </div>
  );
}
