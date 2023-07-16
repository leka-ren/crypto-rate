"use client";

import { GetCurrencyData } from "@/app/customHooks/currencyInfoHook";
import { styled } from "styled-components";
import { Type } from "typescript";

const TableContent = styled.table`
  width: 100%;
  border-spacing: 0;
`;

const Th = styled.th`
  padding: 10px 0;
`;

const Td = styled.td`
  text-align: center;
  padding: 20px 0;
  margin: 0;
`;

const Tr = styled.tr<{ bg?: boolean }>`
  background-color: ${(props) => (props.bg ? "black" : "")};
  &:hover {
    background-color:  ${(props) => (props.bg ? "" : "#3e3e3e")};
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;

  &:hover {
    color: #00ff91;
  }
`;

export default function CurrencyInformTable(): React.ReactNode {
  const titles = ["Name", "Price", "Circ.Supply", "Market Cap", "Category"];
  const { currenciesData } = GetCurrencyData();
  const data = currenciesData?.data || [];

  const digit = (rate: number) => {
    const rateLength = String(rate.toFixed(0)).length;
    console.log(rate);
    switch (rateLength) {
      case rateLength >= 10 && rateLength <= 12 ? rateLength : true:
        console.log((rate / 1000000000).toFixed(2) + "B");
        return (rate / 1000000000).toFixed(2) + "B";
      case rateLength >= 6 && rateLength <= 9 ? rateLength : true:
        return (rate / 1000000).toFixed(2) + "M";
      default:
        return rate;
    }
  };

  const categoryLink = (category: string) => {
    const categoryName = category?.split(" ").join("-").toLowerCase();
    const link = `https://cryptorank.io/categories/${categoryName}`;

    return link;
  };

  return (
    <TableContent>
      <thead>
        <Tr bg>
          {titles.map((el, key) => (
            <Th key={key}>{el}</Th>
          ))}
        </Tr>
      </thead>
      <tbody>
        {data.map((el: any) => (
          <Tr bg={false} key={el.name}>
            <Td>
              <Link
                target="_blank"
                href={`https://cryptorank.io/price/${el.slug}`}
              >
                {el.name}
              </Link>
            </Td>
            <Td>{"$ " + el.values.USD.price.toFixed(3)}</Td>
            <Td>{el.circulatingSupply}</Td>
            <Td>{"$ " + digit(el.values.USD.marketCap)}</Td>
            <Td>
              {el.category ? (
                <Link target="_blank" href={categoryLink(el.category)}>
                  {el.category}
                </Link>
              ) : (
                "-"
              )}
            </Td>
          </Tr>
        ))}
      </tbody>
    </TableContent>
  );
}
