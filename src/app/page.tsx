"use client";

import { useEffect } from "react";
import { styled } from "styled-components";
import ExchageForm from "./components/exchageForm/exchageForm";
import CurrencyInformTable from "./components/currencyInformTable/currencyInformTable";
import { getCurrencyData } from "@/states/getCurrencyData";

const MainPage = styled.main`
  background-color: #222;
  height: 100vh;
  width: 100vw;
  color: #fff;
  font-family: "Courier New", Courier, monospace;
`;
export default function Page(): React.ReactNode {
  useEffect(() => {
    getCurrencyData();
  }, []);

  return (
    <MainPage>
      <ExchageForm />
      <CurrencyInformTable />
    </MainPage>
  );
}
