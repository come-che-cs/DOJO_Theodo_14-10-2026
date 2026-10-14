import Miso from "../assets/images/food/Miso.svg";
import Meat from "../assets/images/food/Brochette viande.svg";
import Maki from "../assets/images/food/Maki.svg";
import Sushi from "../assets/images/food/Sushi.svg";
import California from "../assets/images/food/California.svg";
import BeefCheese from "../assets/images/food/Brochette boeuf fro.svg";
import Bateau from "../assets/images/food/Bateau.svg";

export interface FoodItem {
  name: string;
  kcal: number;
  imageUrl: string;
}

// values from: http://dieteplaisir.canalblog.com/archives/2012/05/18/24268064.html
export const FOOD_ITEMS: Array<FoodItem> = [
  {
    name: "Sushi",
    kcal: 45,
    imageUrl: Sushi
  },
  {
    name: "Maki",
    kcal: 20,
    imageUrl: Maki
  },
  {
    name: "California",
    kcal: 35,
    imageUrl: California
  },
  {
    name: "Boeuf Fromage",
    kcal: 175,
    imageUrl: BeefCheese
  },
  {
    name: "Soupe Miso",
    kcal: 50,
    imageUrl: Miso
  },
  {
    name: "Viande",
    kcal: 130,
    imageUrl: Meat
  }
];

export interface MenuComponent {
  itemName: string;
  quantity: number;
}

export interface FoodMenu extends FoodItem {
  composition: Array<MenuComponent>;
}

const getItemKcal = (itemName: string): number => {
  const item = FOOD_ITEMS.find((foodItem: FoodItem) => foodItem.name === itemName);
  if (!item) {
    throw new Error(`Unknown food item: ${itemName}`);
  }
  return item.kcal;
};

export const computeMenuKcal = (composition: Array<MenuComponent>): number =>
  composition.reduce(
    (acc: number, component: MenuComponent) =>
      acc + component.quantity * getItemKcal(component.itemName),
    0
  );

const MENU_BATEAU_COMPOSITION: Array<MenuComponent> = [
  { itemName: "Sushi", quantity: 4 },
  { itemName: "Maki", quantity: 6 },
  { itemName: "California", quantity: 6 },
  { itemName: "Soupe Miso", quantity: 1 }
];

export const MENU_BATEAU: FoodMenu = {
  name: "Menu Bateau",
  composition: MENU_BATEAU_COMPOSITION,
  kcal: computeMenuKcal(MENU_BATEAU_COMPOSITION),
  imageUrl: Bateau
};

export const FOOD_MENUS: Array<FoodMenu> = [MENU_BATEAU];
