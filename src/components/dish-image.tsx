import mezze from "@/assets/dish-mezze.jpg";
import shish from "@/assets/dish-lamb-shish.jpg";
import iskender from "@/assets/dish-iskender.jpg";
import dessert from "@/assets/dessert.jpg";

export const dishImages: Record<string, string> = { mezze, shish, iskender, dessert };

export const fallbackFor = (category: string) => {
  if (category === "Desserts" || category === "Drinks") return dessert;
  if (category.includes("Starter") || category === "Salads" || category === "Vegetarian Dishes")
    return mezze;
  if (category === "Special Turkish Kebabs" || category === "Wraps") return iskender;
  return shish;
};