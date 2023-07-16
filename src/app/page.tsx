"use client";

import { styled } from "styled-components";
import CurrencyExchageForm from "./components/exchageForm/exchageForm";
import CurrencyInformTable from "./components/currencyInformTable/currencyInformTable";

const MainPage = styled.main`
  background-color: #222;
  height: 100vh;
  width: 100vw;
  color: #fff;
  font-family: "Courier New", Courier, monospace;
`;
export default function Page(): React.ReactNode {
  return (
    <MainPage>
      <CurrencyExchageForm />
      <CurrencyInformTable />
    </MainPage>
  );
}
