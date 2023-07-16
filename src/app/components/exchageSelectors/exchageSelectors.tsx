"use client";

import { useState } from "react";
import { styled } from "styled-components";

const Selectors = styled.input`
  margin: 0;
  border: solid 1px black;
`;
export default function ExchageSelectors(): React.ReactNode {
  const [exchangeCurrencies, setExchangeCurrencies] = useState(["BTC, USD"]);

  return <Selectors type="number" />;
}
