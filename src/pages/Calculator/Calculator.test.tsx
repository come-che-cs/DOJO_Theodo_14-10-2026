import { fireEvent, render, within } from "@testing-library/react";
import React from "react";
import CalculatorPage from "./Calculator";
import { MENU_BATEAU } from "../../data/food";

const getMenuBateauTile = (getByAltText: (text: string) => HTMLElement) =>
  getByAltText(MENU_BATEAU.name).parentElement as HTMLElement;

test("adds the menu bateau kcal when clicking +", () => {
  const { getByAltText, getByText } = render(<CalculatorPage />);

  fireEvent.click(within(getMenuBateauTile(getByAltText)).getByText("+"));

  expect(getByText(`${MENU_BATEAU.kcal} Kcal`)).toBeInTheDocument();
});

test("adds the menu bateau kcal once per menu", () => {
  const { getByAltText, getByText } = render(<CalculatorPage />);
  const plusButton = within(getMenuBateauTile(getByAltText)).getByText("+");

  fireEvent.click(plusButton);
  fireEvent.click(plusButton);

  expect(getByText(`${2 * MENU_BATEAU.kcal} Kcal`)).toBeInTheDocument();
});
