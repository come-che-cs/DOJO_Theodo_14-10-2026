import { computeMenuKcal, MENU_BATEAU } from "./food";

test("computes the kcal of a menu from its composition", () => {
  expect(
    computeMenuKcal([
      { itemName: "Sushi", quantity: 2 },
      { itemName: "Maki", quantity: 3 }
    ])
  ).toBe(2 * 45 + 3 * 20);
});

test("menu bateau kcal is the sum of its items", () => {
  // 4 sushi + 6 maki + 6 california + 1 soupe miso
  expect(MENU_BATEAU.kcal).toBe(4 * 45 + 6 * 20 + 6 * 35 + 50);
});

test("throws on an unknown food item", () => {
  expect(() =>
    computeMenuKcal([{ itemName: "Pizza", quantity: 1 }])
  ).toThrow("Unknown food item: Pizza");
});
