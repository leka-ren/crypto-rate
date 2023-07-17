import { CurrencyData } from "@/types/currency.types";
import { digit } from "@/helpers/makeDigit";
import { categoryLink } from "@/helpers/makeLink";
import { $currencyData } from "@/states/getCurrencyData";
import { useStore } from "effector-react";
import { styled } from "styled-components";

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

const Tr = styled.tr<{ $bgColor?: boolean }>`
  background-color: ${(props) => (props.$bgColor ? "black" : "")};
  &:hover {
    background-color:  ${(props) => (props.$bgColor ? "" : "#3e3e3e")};
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

  const currencyData = useStore($currencyData);

  return (
    <TableContent>
      <thead>
        <Tr $bgColor>
          {titles.map((el, key) => (
            <Th key={key}>{el}</Th>
          ))}
        </Tr>
      </thead>
      <tbody>
        {currencyData &&
          currencyData.map((el: CurrencyData) => (
            <Tr key={el.name}>
              <Td>
                <Link
                  target="_blank"
                  href={`https://cryptorank.io/price/${el.slug}`}
                >
                  {el.name}
                </Link>
              </Td>
              <Td>{"$ " + el.values.USD.price.toFixed(3)}</Td>
              <Td>{el.symbol + " " + el.circulatingSupply}</Td>
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
