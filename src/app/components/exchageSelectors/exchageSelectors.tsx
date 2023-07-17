import { useStore } from "effector-react";
import { ChangeEvent } from "react";
import { styled } from "styled-components";
import {
  $currencyFrom,
  $currencyTo,
  setCurrencyFrom,
  setCurrencyTo,
} from "./exchageSelectors.model";
import { $currencyData } from "@/states/getCurrencyData";
import { CurrencyData } from "@/types/currency.types";

const SelectContent = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Select = styled.select`
  margin: auto 10px;
  outline: none;
  padding: 10px 0;
  font-size: 16px;
  border: solid 1px #f1f1f1;
  background-color: #3e3e3e;
  width: fit-content;
  color: #fff;
  transition: 0.3s all ease-in-out;

  &:focus {
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.3);
    color: #3e3e3e;
  }
`;
const FromTo = styled.p`
  padding: 0;
  margin: auto;
  color: #f1f1f1;
  font-size: 30px;
  font-weight: 100;
`;

export default function ExchageSelectors(): React.ReactNode {
  const currencyFrom = useStore($currencyFrom);
  const currencyTo = useStore($currencyTo);
  const currencyData = useStore($currencyData);

  const handleChangeFrom = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrencyFrom(event.target.value);
  };
  const handleChangeTo = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrencyTo(event.target.value);
  };

  const CurrencyOptions = ({
    currencyData,
  }: {
    currencyData: CurrencyData[];
  }) => (
    <>
      {currencyData &&
        currencyData.map((el) => (
          <option key={el.id} value={el.symbol}>
            {`${el.name}(${el.symbol})`}
          </option>
        ))}
    </>
  );

  return (
    <SelectContent>
      <Select value={currencyFrom} onChange={handleChangeFrom}>
        <CurrencyOptions currencyData={currencyData} />
      </Select>
      <FromTo>&rarr;</FromTo>
      <Select value={currencyTo} onChange={handleChangeTo}>
        <CurrencyOptions currencyData={currencyData} />
      </Select>
    </SelectContent>
  );
}
