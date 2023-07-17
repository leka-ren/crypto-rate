import { useStore } from "effector-react";
import { ChangeEvent } from "react";
import { styled } from "styled-components";
import { $currencyInput, setCurrencyInput } from "./exchangeInput.model";

const Input = styled.input`
  outline: none;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-bottom: solid 1px #f1f1f1;
  background-color: transparent;
  margin: auto 0 auto;
  width: 200px;
  color: #fff;
  transition: 0.3s all ease-in-out;

  &:focus {
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.3);
    color: #3e3e3e;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default function ExchageInput(): React.ReactNode {
  const currencyInput = useStore($currencyInput);

  const inputHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrencyInput(e.target.value);
  };

  return <Input value={currencyInput} onChange={inputHandle} />;
}
