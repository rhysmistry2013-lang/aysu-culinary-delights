import mezze from "@/assets/dish-mezze.jpg";
import shish from "@/assets/dish-lamb-shish.jpg";
import iskender from "@/assets/dish-iskender.jpg";
import dessert from "@/assets/dessert.jpg";
import coldStarters from "@/assets/cat-cold-starters.jpg";
import hotStarters from "@/assets/cat-hot-starters.jpg";
import kebabs from "@/assets/cat-kebabs.jpg";
import specialKebabs from "@/assets/cat-special-kebabs.jpg";
import platters from "@/assets/cat-platters.jpg";
import seafood from "@/assets/cat-seafood.jpg";
import stews from "@/assets/cat-stews.jpg";
import vegetarian from "@/assets/cat-vegetarian.jpg";
import burgers from "@/assets/cat-burgers.jpg";
import wraps from "@/assets/cat-wraps.jpg";
import salads from "@/assets/cat-salads.jpg";
import breakfast from "@/assets/cat-breakfast.jpg";
import omelettes from "@/assets/cat-omelettes.jpg";
import sides from "@/assets/cat-sides.jpg";
import drinks from "@/assets/cat-drinks.jpg";

export const dishImages: Record<string, string> = { mezze, shish, iskender, dessert };

const byCategory: Record<string, string> = {
  "Cold Starters": coldStarters,
  "Hot Starters": hotStarters,
  "Kebabs & Grills": kebabs,
  "Special Turkish Kebabs": specialKebabs,
  "Sharing Platters": platters,
  Seafood: seafood,
  "Daily Stews": stews,
  "Vegetarian Dishes": vegetarian,
  Burgers: burgers,
  Wraps: wraps,
  Salads: salads,
  "Breakfast & Brunch": breakfast,
  Omelettes: omelettes,
  "Sides & Extras": sides,
  Desserts: dessert,
  Drinks: drinks,
};

export const fallbackFor = (category: string) => byCategory[category] ?? shish;