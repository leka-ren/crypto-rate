import { useStore } from "effector-react";

import { styled } from "styled-components";
import ExchageInput from "../exchageValueInput/exchangeInput";
import ExchageSelectors from "../exchageSelectors/exchageSelectors";
import { $exchangeResult } from "./exchageForm.model";

const Form = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  padding: 15px;
`;

const Result = styled.p`
  margin: auto;
  width: 240px;
  border-bottom: solid #fff 1px;
  padding: 10px 15px;
`;

export default function ExchageForm(): React.ReactNode {
  const exchangeResult = useStore($exchangeResult);

  return (
    <Form>
      <ExchageInput />
      <ExchageSelectors />
      {!Number.isNaN(exchangeResult) ? (
        <Result>&asymp; {exchangeResult}</Result>
      ) : (
        <p>Расчета не будет, Люся отмена!</p>
      )}
    </Form>
  );
}
