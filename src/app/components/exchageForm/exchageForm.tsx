"use client";

import { styled } from "styled-components";
import ExchageValueInput from "../exchageValueInput/exchageValueInput";

const Form = styled.div`
  display: flex;
  flex-direction: row;
`;
export default function exchageForm(): React.ReactNode {
  return (
    <Form>
      <ExchageValueInput />
    </Form>
  );
}
