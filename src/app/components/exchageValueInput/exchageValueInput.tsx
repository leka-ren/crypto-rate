"use client";

import { styled } from "styled-components";

const Input = styled.input`
  margin: 0;
  border: solid 1px black;
`;

export default function ExchageValueInput(): React.ReactNode {
  return <Input type="number" min={0} />;
}
